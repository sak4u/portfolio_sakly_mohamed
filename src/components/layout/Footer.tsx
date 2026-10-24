import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personal';

// Computed once at module load — year doesn't change during a session
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-surface)',
        padding: '2.5rem 0',
      }}
    >
      <div
        className="container-main"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
        }}
      >
        {/* Name */}
        <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>
          {personalInfo.name}
        </p>

        {/* Social links */}
        <nav aria-label="Social links">
          <ul
            role="list"
            style={{ display: 'flex', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}
          >
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="GitHub profile (opens in new tab)"
                title="GitHub"
              >
                <Github size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="LinkedIn profile (opens in new tab)"
                title="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-ghost"
                aria-label="Send email"
                title="Email"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          &copy; {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
