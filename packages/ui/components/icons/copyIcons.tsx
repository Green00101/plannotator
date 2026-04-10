import React from 'react';

/**
 * Shared copy/clipboard icons (Copy / Check).
 *
 * These SVGs were previously duplicated across 10+ files. Centralizing them
 * here keeps the iconography consistent and makes future glyph tweaks trivial.
 *
 * Each icon takes an optional `className` so callers control sizing:
 * - inline actions (e.g. inside annotation toolbar): w-3 h-3
 * - standalone buttons (e.g. file header "Copy Diff"): w-4 h-4
 */

interface IconProps {
  className?: string;
}

export const CopyIcon: React.FC<IconProps> = ({ className = 'w-3 h-3' }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = 'w-3 h-3' }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);
