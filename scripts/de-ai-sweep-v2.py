#!/usr/bin/env python3
"""
de-ai-sweep-v2.py — second-pass cleanup of artifacts from v1 + finer AI-tell removal.
"""
import os, re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REPLACEMENTS = [
    # Clean up artifacts from v1 sweep: orphaned commas before periods/punctuation
    (r' , ', ', '),
    (r',\s+,', ','),
    (r' ,\.', '.'),
    (r' ,$', ''),
    # Sentence starting with comma (orphaned after em-dash removal)
    (r'>\s*,\s+', '>'),
    (r'^\s*,\s+', '', ),
    # Fix "pay , privately" -> "pay privately"
    (r'(\w) , (\w)', r'\1, \2'),
    # The classic AI duo "Educational only, not advice" appearing 5+ times - keep on disclaimer pages, soften elsewhere
    # We won't auto-strip; that's a human-review task.
    # Other phrases
    (r"In summary, ", ''),
    (r"To summarize, ", ''),
    (r"To put it simply, ", ''),
    (r"Simply put, ", ''),
    (r"It is worth mentioning that ", ''),
    (r"It is essential to ", ''),
    (r"It's essential to ", ''),
    (r"At the end of the day, ", ''),
    # Trim "Plain-English" repetitions
    (r'plain-English\s+plain-English', 'plain-English'),
    (r'plain English\s+plain English', 'plain English'),
    # Remove "&rsquo;" -> "'"
    (r'&rsquo;', "'"),
    (r'&lsquo;', "'"),
    (r'&rdquo;', '"'),
    (r'&ldquo;', '"'),
    # Remove en-dash entities
    (r'&mdash;', ','),
    (r'&ndash;', ','),
    # Triple-listed items ", privately and clearly. No jargon. No advice. Just clarity."
    # is highly AI - leave to human rewrite, just clean spacing
    (r'\s+,\s+', ', '),
]

SKIP_PATTERNS = ['/node_modules/', '/.next/', '/.git/', '/scripts/', 'lib/states.ts', 'lib/calc.ts']

def should_skip(p):
    return any(s in p for s in SKIP_PATTERNS)

def sweep(path):
    with open(path, 'r', encoding='utf-8') as f: original = f.read()
    new = original
    for p, r in REPLACEMENTS:
        new = re.sub(p, r, new) if isinstance(r, str) else re.sub(p, '', new)
    if new != original:
        with open(path, 'w', encoding='utf-8') as f: f.write(new)
        return True
    return False

changed = 0
for root, dirs, files in os.walk(REPO):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.md', '.mdx')):
            full = os.path.join(root, f)
            if not should_skip(full):
                if sweep(full):
                    changed += 1
                    print(f"  swept: {os.path.relpath(full, REPO)}")
print(f"Total: {changed} files cleaned.")
