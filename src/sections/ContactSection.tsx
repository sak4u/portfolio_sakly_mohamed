import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const contactLinks = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    id: 'contact-github',
    icon: Github,
    label: 'GitHub',
    value: personalInfo.github,
    href: personalInfo.github,
    external: true,
  },
  {
    id: 'contact-linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: personalInfo.linkedin,
    href: personalInfo.linkedin,
    external: true,
  },
] as const;

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="contact" className="section scroll-mt-nav" aria-labelledby="contact-heading">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ maxWidth: '44rem' }}
        >
          <motion.p className="section-label" variants={itemVariants}>Contact</motion.p>
          <motion.h2 id="contact-heading" className="section-title" variants={itemVariants}>
            Let's work together
          </motion.h2>
          <motion.p
            className="section-description"
            variants={itemVariants}
            style={{ marginBottom: '2.5rem' }}
          >
            I am actively looking for junior software engineering roles. If you think I might be a good fit for your team, or if you'd like to discuss a project, I'd love to hear from you.
          </motion.p>

          {/* Location */}
          <motion.p
            variants={itemVariants}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
            }}
          >
            <MapPin size={15} aria-hidden="true" />
            Based in {personalInfo.location} — open to remote opportunities
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={containerVariants}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            {contactLinks.map(({ id, icon: Icon, label, value, href, external }) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={`${label}${external ? ' (opens in new tab)' : ''}`}
                variants={itemVariants}
                className="card"
                style={{
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.125rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {label}
                  </p>
                  <p
                    className="link-underline"
                    style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                  >
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
