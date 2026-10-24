import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const label = status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Planned';
  const className = status === 'completed' ? 'status-completed' : 'status-in-progress';
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        fontSize: '0.6875rem',
        fontWeight: 600,
        padding: '0.2rem 0.625rem',
        borderRadius: '9999px',
        letterSpacing: '0.03em',
      }}
    >
      {label}
    </span>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="card"
      style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.375rem', flexWrap: 'wrap' }}>
            <h3
              style={{
                fontSize: '1.0625rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {project.tagline}
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.375rem', flexShrink: 0 }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
              title="View source"
            >
              <Github size={17} aria-hidden="true" />
            </a>
          ) : (
            <span
              className="btn btn-ghost"
              style={{ opacity: 0.35, cursor: 'not-allowed' }}
              title="Repository not yet public"
              aria-label="Repository not yet available"
            >
              <Github size={17} aria-hidden="true" />
            </span>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label={`View live demo of ${project.title} (opens in new tab)`}
              title="Live demo"
            >
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      {/* Expandable details */}
      <div>
        <button
          className="btn btn-ghost"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={`project-details-${project.id}`}
          style={{
            padding: '0.375rem 0',
            gap: '0.375rem',
            fontSize: '0.8125rem',
            color: 'var(--accent)',
            fontWeight: 500,
          }}
        >
          {expanded ? (
            <>View less <ChevronUp size={14} aria-hidden="true" /></>
          ) : (
            <>Case study <ChevronDown size={14} aria-hidden="true" /></>
          )}
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`project-details-${project.id}`}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  paddingTop: '1rem',
                  marginTop: '0.5rem',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Problem */}
                <div>
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Solution
                  </h4>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                    {project.solution}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Key features
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem',
                    }}
                  >
                    {project.features.map((f) => (
                      <li
                        key={f}
                        style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                      >
                        <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
