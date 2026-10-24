import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '../data/experience';
import type { TimelineItem } from '../types';
import { GraduationCap, Briefcase, Star } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const typeIcon: Record<TimelineItem['type'], typeof GraduationCap> = {
  education: GraduationCap,
  experience: Briefcase,
  milestone: Star,
};

const typeLabel: Record<TimelineItem['type'], string> = {
  education: 'Education',
  experience: 'Experience',
  milestone: 'Milestone',
};

function TimelineEntry({ item }: { item: TimelineItem }) {
  const Icon = typeIcon[item.type];

  return (
    <li style={{ display: 'flex', gap: '1.25rem' }}>
      {/* Left column — dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
        <div
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          <Icon size={15} style={{ color: 'var(--accent)' }} />
        </div>
        <div
          className="timeline-connector"
          style={{ flex: 1, marginTop: '0.5rem', marginBottom: '0.5rem' }}
          aria-hidden="true"
        />
      </div>

      {/* Right column — content */}
      <div style={{ flex: 1, paddingBottom: '2.5rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {typeLabel[item.type]}
            </span>
            {item.current && (
              <span
                className="status-in-progress"
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  padding: '0.125rem 0.5rem',
                  borderRadius: '9999px',
                }}
              >
                Current
              </span>
            )}
          </div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            {item.title}
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            {item.organization}
            {item.location && <span style={{ color: 'var(--text-muted)' }}> · {item.location}</span>}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
            {item.startDate} — {item.endDate ?? 'Present'}
          </p>
        </div>

        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: item.highlights?.length ? '0.75rem' : 0 }}>
          {item.description}
        </p>

        {item.highlights && item.highlights.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {item.highlights.map((h) => (
              <li key={h} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="experience"
      className="section scroll-mt-nav"
      aria-labelledby="experience-heading"
      style={{ backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p className="section-label" variants={itemVariants}>Background</motion.p>
          <motion.h2 id="experience-heading" className="section-title" variants={itemVariants}>
            Education & experience
          </motion.h2>
          <motion.p
            className="section-description"
            variants={itemVariants}
            style={{ marginBottom: '3rem' }}
          >
            My academic background and professional milestones.
          </motion.p>

          {timeline.length > 0 ? (
            <motion.ul
              role="list"
              aria-label="Career and education timeline"
              variants={containerVariants}
              style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '42rem' }}
            >
              {timeline.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <TimelineEntry item={item} />
                </motion.div>
              ))}
            </motion.ul>
          ) : (
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Experience and education details will be added shortly.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
