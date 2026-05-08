/**
 * Skip-to-content link for keyboard users.
 * Mount once in app/layout.tsx as the very first child of <body>.
 *
 * Becomes visible only when focused via Tab. Jumps focus to <main id="content">.
 * Pair with: any <main> on a page should have id="content".
 */
export function SkipToContent() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
    >
      Skip to main content
    </a>
  );
}
