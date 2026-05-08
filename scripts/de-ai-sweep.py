#!/usr/bin/env python3
"""
de-ai-sweep.py — strips AI fingerprint signals from .tsx/.ts/.md files.

Run: python3 scripts/de-ai-sweep.py
Idempotent. Reports per-file changes.
"""
import os, re, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Order matters: more specific replacements first.
REPLACEMENTS = [
    # Em dash and en dash to comma+space, period, or hyphen depending on context.
    # We do a heuristic: if the em dash is between two words (not at sentence boundaries),
    # replace with a comma. If at a clause boundary, replace with a period and capitalize next.
    # Simple version: replace ' — ' with ', ' (most common case).
    (r' — ', ', '),
    (r'—', ', '),
    (r' – ', ', '),
    (r'–', ', '),
    # HTML entity em dash
    (r'&mdash;', ','),
    (r'&ndash;', ','),
    # Curly quotes -> straight
    (r'‘', "'"),  # left single
    (r'’', "'"),  # right single (apostrophe)
    (r'“', '"'),  # left double
    (r'”', '"'),  # right double
    # JSX entities for curly quotes
    (r'&rsquo;', "'"),
    (r'&lsquo;', "'"),
    (r'&rdquo;', '"'),
    (r'&ldquo;', '"'),
    # Common AI filler phrases
    (r"It's important to note that ", ''),
    (r"It is important to note that ", ''),
    (r"It should be noted that ", ''),
    (r"It's worth noting that ", ''),
    (r"Importantly, ", ''),
    (r"Crucially, ", ''),
    (r"Fundamentally, ", ''),
    (r"Essentially, ", ''),
    (r"Notably, ", ''),
    (r"Moreover, ", ''),
    (r"Furthermore, ", ''),
    (r"Additionally, ", ''),
    (r"In essence, ", ''),
    (r"Ultimately, ", ''),
    (r"Effectively, ", ''),
    (r"Practically speaking, ", ''),
    (r"In other words, ", ''),
    # AI cadence: "X helps Y understand Z"
    (r'PayslipIQ helps American workers understand ', 'PayslipIQ explains '),
    (r'PayslipIQ helps US workers understand ', 'PayslipIQ explains '),
    (r'PayslipIQ helps you understand ', 'PayslipIQ explains '),
    # "in plain English" overuse — keep some, but break up the repetition
    (r' in plain English\.', '.'),
    (r'\.in plain English ', '. '),
    # Adverb chains
    (r'clearly, simply, ', ''),
    (r'simply and clearly ', ''),
    (r'privately, clearly, and educationally', 'privately and clearly'),
]

# Files to skip
SKIP_PATTERNS = ['/node_modules/', '/.next/', '/.git/', '/scripts/', 'lib/states.ts']

def should_skip(path):
    return any(p in path for p in SKIP_PATTERNS)

def sweep_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        original = f.read()
    new = original
    for pattern, replacement in REPLACEMENTS:
        new = re.sub(pattern, replacement, new)
    # Collapse double-commas that the em-dash replacement might create
    new = re.sub(r',\s*,', ',', new)
    # Collapse leading commas (sentences starting with ", X")
    new = re.sub(r'>\s*,\s*', '>', new)
    new = re.sub(r'^\s*,\s+', '', new, flags=re.MULTILINE)
    if new != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new)
        return True
    return False

def main():
    changed = 0
    scanned = 0
    for root, dirs, files in os.walk(REPO):
        # Prune skip dirs in-place
        dirs[:] = [d for d in dirs if not any(p.strip('/').split('/')[0] == d for p in SKIP_PATTERNS if p.startswith('/'))]
        for f in files:
            if not (f.endswith('.tsx') or f.endswith('.ts') or f.endswith('.md') or f.endswith('.mdx')):
                continue
            full = os.path.join(root, f)
            if should_skip(full):
                continue
            scanned += 1
            if sweep_file(full):
                changed += 1
                rel = os.path.relpath(full, REPO)
                print(f"  swept: {rel}")
    print(f"\nDone. Scanned {scanned}, changed {changed}.")

if __name__ == '__main__':
    main()
