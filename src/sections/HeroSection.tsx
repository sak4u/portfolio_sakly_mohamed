import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { ResumeDownload } from '../components/resume/ResumeDownload';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* Subtle dot-grid background */}
      <div
        aria-hidden="true"
        className="dot-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Subtle accent blur */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '35rem',
          height: '35rem',
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 8%, transparent), transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '48rem' }}>
          {/* Eyebrow */}
          <motion.p
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{ marginBottom: '1.25rem' }}
          >
            Software Engineer · Full-Stack Developer
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '42rem',
              marginBottom: '2.5rem',
            }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}
          >
            <a
              href="#projects"
              id="cta-view-projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}
            >
              View My Projects
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <ResumeDownload
              id="cta-download-resume"
              variant="secondary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}
            />
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            style={{ display: 'flex', gap: '0.5rem' }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label="Visit GitHub profile (opens in new tab)"
              title="GitHub"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label="Visit LinkedIn profile (opens in new tab)"
              title="LinkedIn"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-ghost"
              aria-label="Send an email"
              title="Email"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll down cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll to About section"
        onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') handleScrollDown(); }}
      >
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
