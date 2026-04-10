import type React from 'react';
import { CopyIcon, CheckIcon } from './icons/copyIcons';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

interface CopyButtonProps {
  text: string;
  className?: string;
  /** "overlay" (default): absolute-positioned, hover-reveal (parent needs group relative).
   *  "inline": normal flow, always visible, compact. */
  variant?: 'overlay' | 'inline';
  /** Optional label shown next to the icon (inline variant only). */
  label?: string;
}

/** Copy-to-clipboard button with "Copied" flash. */
export const CopyButton: React.FC<CopyButtonProps> = ({ text, className = '', variant = 'overlay', label }) => {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await copy(text);
  };

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={`flex items-center gap-1 p-0.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ${className}`}
        title={copied ? 'Copied!' : 'Copy'}
      >
        {copied ? <CheckIcon className="w-3 h-3 text-success" /> : <CopyIcon />}
        {label && (
          <span className="text-[10px]">
            {copied ? 'Copied' : label}
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`absolute top-1.5 right-1.5 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground hover:bg-muted ${className}`}
      title={copied ? 'Copied!' : 'Copy'}
    >
      {copied ? <CheckIcon className="w-3 h-3 text-success" /> : <CopyIcon />}
    </button>
  );
};
