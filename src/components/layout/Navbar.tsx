import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ResumeDownload } from '../resume/ResumeDownload';

interface NavProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export function Navbar({ theme, onThemeToggle }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => { if (mq.matches) setMenuOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--bg-base) 90%, transparent)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background-color 300ms, border-color 300ms, backdrop-filter 300ms',
        }}
      >
        <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
            aria-label="Mohamed Sakly — back to top"
          >
            MS
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: 'none' }} className="md-nav">
            <ul
              role="list"
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', padding: 0, margin: 0 }}
            >
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    style={{
                      display: 'inline-block',
                      padding: '0.375rem 0.75rem',
                      fontSize: '0.875rem',
                      fontWeight: isActive(href) ? 600 : 400,
                      color: isActive(href) ? 'var(--text-primary)' : 'var(--text-secondary)',
                      borderRadius: 'var(--radius-md)',
                      transition: 'color 150ms, background-color 150ms',
                      position: 'relative',
                    }}
                    aria-current={isActive(href) ? 'page' : undefined}
                    onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-subtle)'; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Theme toggle */}
            <button
              className="btn btn-ghost"
              onClick={onThemeToggle}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark'
                ? <Sun size={18} aria-hidden="true" />
                : <Moon size={18} aria-hidden="true" />}
            </button>

            {/* Resume — desktop only */}
            <ResumeDownload id="nav-resume-btn" className="resume-btn" label="Resume" />

            {/* Mobile hamburger */}
            <button
              className="btn btn-ghost mobile-menu-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .md-nav { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
          @media (max-width: 767px) {
            .resume-btn { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '4rem',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              backgroundColor: 'var(--bg-base)',
              borderTop: '1px solid var(--border)',
              overflowY: 'auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            <nav aria-label="Mobile navigation">
              <ul role="list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                      style={{
                        display: 'block',
                        padding: '0.875rem 1rem',
                        fontSize: '1.0625rem',
                        fontWeight: isActive(href) ? 600 : 400,
                        color: isActive(href) ? 'var(--accent)' : 'var(--text-primary)',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: isActive(href) ? '2px solid var(--accent)' : '2px solid transparent',
                        transition: 'color 150ms, background-color 150ms',
                      }}
                      aria-current={isActive(href) ? 'page' : undefined}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <ResumeDownload id="mobile-resume-btn" fullWidth placement="top" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
