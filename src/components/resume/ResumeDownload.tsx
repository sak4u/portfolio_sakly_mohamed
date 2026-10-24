import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Download, Globe } from 'lucide-react';
import { personalInfo } from '../../data/personal';

interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  label?: string;
  fullWidth?: boolean;
  placement?: 'bottom' | 'top';
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface ResumeOption {
  code: 'EN' | 'FR';
  label: string;
  href: string;
  filename: string;
  langHint: string;
}

const resumeOptions: readonly ResumeOption[] = [
  {
    code: 'EN',
    label: 'English',
    href: personalInfo.resumeUrls.en,
    filename: 'mohamed-sakly-cv-en.pdf',
    langHint: 'en',
  },
  {
    code: 'FR',
    label: 'Français',
    href: personalInfo.resumeUrls.fr,
    filename: 'mohamed-sakly-cv-fr.pdf',
    langHint: 'fr',
  },
] as const;

function getInitialSuggestedLanguage(): 'EN' | 'FR' {
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) {
    return 'FR';
  }
  return 'EN';
}

export function ResumeDownload({
  variant = 'primary',
  label = 'Download Resume',
  fullWidth = false,
  placement = 'bottom',
  id,
  className,
  style,
}: ResumeDownloadProps) {
  const [open, setOpen] = useState(false);
  const [suggestedCode] = useState<'EN' | 'FR'>(getInitialSuggestedLanguage);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    // Focus preferred option on open (FR if suggested, else first item)
    const preferredIndex = resumeOptions.findIndex((opt) => opt.code === suggestedCode);
    const targetIndex = preferredIndex >= 0 ? preferredIndex : 0;
    const focusTimer = requestAnimationFrame(() => {
      itemRefs.current[targetIndex]?.focus();
    });

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(focusTimer);
    };
  }, [open, suggestedCode]);

  const handleItemKeyDown = (index: number, event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % resumeOptions.length;
      itemRefs.current[nextIndex]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (index - 1 + resumeOptions.length) % resumeOptions.length;
      itemRefs.current[prevIndex]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      itemRefs.current[resumeOptions.length - 1]?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        display: fullWidth ? 'block' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        id={id}
        className={`btn btn-${variant}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id ? `${id}-menu` : undefined}
        style={{ width: fullWidth ? '100%' : undefined, ...style }}
      >
        <Download size={16} aria-hidden="true" />
        <span>{label}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 150ms ease',
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={id ? `${id}-menu` : undefined}
            role="menu"
            aria-label="Choose resume language"
            initial={{ opacity: 0, y: placement === 'top' ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: placement === 'top' ? 4 : -4 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              [placement === 'top' ? 'bottom' : 'top']: 'calc(100% + 0.5rem)',
              left: 0,
              right: fullWidth ? 0 : 'auto',
              minWidth: fullWidth ? undefined : '13rem',
              width: fullWidth ? '100%' : undefined,
              zIndex: 60,
              listStyle: 'none',
              margin: 0,
              padding: '0.375rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {resumeOptions.map((option, index) => {
              const isSuggested = option.code === suggestedCode;
              return (
                <li key={option.code} role="none">
                  <a
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    role="menuitem"
                    href={option.href}
                    download={option.filename}
                    onClick={() => {
                      setOpen(false);
                      buttonRef.current?.focus();
                    }}
                    onKeyDown={(e) => handleItemKeyDown(index, e)}
                    aria-label={`Download resume in ${option.label}${isSuggested ? ' (Suggested)' : ''}`}
                    tabIndex={0}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0.625rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'background-color 150ms ease',
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-subtle)';
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-subtle)';
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <Globe size={14} aria-hidden="true" style={{ color: 'var(--text-muted)' }} />
                    <span style={{ flex: 1 }}>{option.label}</span>
                    {isSuggested && (
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          padding: '0.125rem 0.375rem',
                          borderRadius: '9999px',
                          backgroundColor: 'var(--accent-subtle)',
                          color: 'var(--accent)',
                          lineHeight: 1.2,
                        }}
                      >
                        Suggested
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {option.code}
                    </span>
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

