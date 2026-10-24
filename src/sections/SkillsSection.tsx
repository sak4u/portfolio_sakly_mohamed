import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';
import type { Skill } from '../types';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 0',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <span
        className={skill.level === 'learning' ? 'skill-learning' : 'skill-proficient'}
        style={{ fontSize: '0.875rem' }}
      >
        {skill.name}
      </span>
      {skill.level === 'learning' && (
        <span
          style={{
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: 'var(--accent)',
            backgroundColor: 'var(--accent-light)',
            padding: '0.125rem 0.5rem',
            borderRadius: '9999px',
          }}
        >
          Learning
        </span>
      )}
    </li>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="skills"
      className="section scroll-mt-nav"
      aria-labelledby="skills-heading"
      style={{ backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p className="section-label" variants={itemVariants}>Skills</motion.p>
          <motion.h2 id="skills-heading" className="section-title" variants={itemVariants}>
            Technologies & fundamentals
          </motion.h2>
          <motion.p className="section-description" variants={itemVariants} style={{ marginBottom: '3rem' }}>
            A focused set of technologies I use daily, grounded in strong software engineering principles.
          </motion.p>

          <motion.div
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {skillCategories.map(({ category, icon, skills }) => (
              <motion.div
                key={category}
                className="card"
                variants={itemVariants}
                style={{ padding: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                  <span
                    aria-hidden="true"
                    style={{ fontSize: '1.125rem', lineHeight: 1 }}
                  >
                    {icon}
                  </span>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {category}
                  </h3>
                </div>
                <ul
                  role="list"
                  aria-label={`${category} skills`}
                  style={{ listStyle: 'none', padding: 0, margin: 0 }}
                >
                  {skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.p
            variants={itemVariants}
            style={{
              marginTop: '2rem',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span>
              <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Regular weight</span>{' '}
              = actively used
            </span>
            <span>
              <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Italic</span>{' '}
              = currently learning
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
