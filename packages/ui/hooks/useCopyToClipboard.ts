import { useState, useCallback } from 'react';

/**
 * Centralizes the clipboard + copied state + timeout pattern that was
 * previously duplicated across 15+ files with inconsistent timeout values
 * (1500ms vs 2000ms). Default timeout is 1500ms.
 *
 * Returns `reset` for callers that need to clear the copied state imperatively
 * (e.g. when the annotation target element changes).
 */
export function useCopyToClipboard(timeoutMs = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), timeoutMs);
      } catch {
        // Clipboard API may not be available in some environments
      }
    },
    [timeoutMs],
  );

  const reset = useCallback(() => setCopied(false), []);

  return { copied, copy, reset };
}
