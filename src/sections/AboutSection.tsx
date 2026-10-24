import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BookOpen, Users, Lightbulb } from 'lucide-react';

const traits = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'I enjoy building complete features from database schema to polished UI, keeping both layers coherent and maintainable.',
  },
  {
    icon: BookOpen,
    title: 'Software Fundamentals',
    description: 'OOP, SOLID principles, MVC, and data structures form the foundation of how I think about code and architecture.',
  },
  {
    icon: Lightbulb,
    title: 'Clean Code',
    description: 'I care about readability, naming, and structure. Code is read far more often than it is written.',
  },
  {
    icon: Users,
    title: 'Continuous Learning',
    description: 'Software engineering evolves quickly. I actively seek to deepen my understanding of the tools and patterns I use.',
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="about" className="section scroll-mt-nav" aria-labelledby="about-heading">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.p className="section-label" variants={itemVariants}>
            About
          </motion.p>
          <motion.h2 id="about-heading" className="section-title" variants={itemVariants}>
            Building software that matters
          </motion.h2>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            style={{ maxWidth: '44rem', marginBottom: '3.5rem' }}
          >
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am a Software Engineering graduate with hands-on experience designing and building full-stack web applications. My primary stack is <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>React, TypeScript, NestJS, and MongoDB</strong>, with an appreciation for the engineering principles that make software sustainable over time.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I started programming because I wanted to build real things — applications that solve real problems for real people. That motivation has shaped how I approach every project: understanding the problem first, then designing a solution that is clear, testable, and easy to evolve.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
              I am actively looking for a junior software engineer or full-stack developer role where I can contribute meaningfully, grow alongside experienced engineers, and continue sharpening my craft.
            </p>
          </motion.div>

          {/* Trait cards */}
          <motion.div
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1rem',
            }}
          >
            {traits.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                className="card"
                variants={itemVariants}
                style={{ padding: '1.5rem' }}
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
                    marginBottom: '0.875rem',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
