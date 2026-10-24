import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personal';
import { ProjectCard } from '../components/projects/ProjectCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const highlighted = projects.filter((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="section scroll-mt-nav" aria-labelledby="projects-heading">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p className="section-label" variants={itemVariants}>Projects</motion.p>
          <motion.h2 id="projects-heading" className="section-title" variants={itemVariants}>
            Selected work
          </motion.h2>
          <motion.p className="section-description" variants={itemVariants} style={{ marginBottom: '3rem' }}>
            Full-stack applications built from scratch, each addressing a real operational problem.
          </motion.p>

          {/* Highlighted / featured projects */}
          {highlighted.length > 0 && (
            <motion.div
              variants={containerVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                marginBottom: rest.length > 0 ? '2rem' : 0,
              }}
            >
              {highlighted.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Other projects */}
          {rest.length > 0 && (
            <>
              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                Other projects
              </motion.p>
              <motion.div
                variants={containerVariants}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1rem',
                }}
              >
                {rest.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {/* Open source GitHub callout */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '2.5rem',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Github size={22} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  Explore All Open-Source Repositories
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.125rem' }}>
                  All projects are open-source and publicly hosted on GitHub.
                </p>
              </div>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
              aria-label="Visit Mohamed Sakly's GitHub profile (opens in new tab)"
            >
              <Github size={16} aria-hidden="true" />
              <span>github.com/sak4u</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
