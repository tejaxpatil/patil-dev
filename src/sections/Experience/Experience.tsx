import { motion } from 'framer-motion';

import {
  Container,
  EducationCard,
  ExperienceCard,
} from '@/components/ui';

import { education, experience } from '@/data/experience';

function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-[var(--border)] py-28 lg:py-36"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              EXPERIENCE
            </p>

            <h2 className="mt-5 font-heading text-4xl font-bold tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl">
              Where I’ve been learning by doing.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
          >
            My experience so far has combined technical exploration,
            communication, data analysis, and hands-on project work.
          </motion.p>
        </div>

        {/* Experience */}
        <div className="mt-16">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              experience={item}
            />
          ))}
        </div>

        {/* Education */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              EDUCATION
            </p>

            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Building the foundation.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6">
            {education.map((item) => (
              <EducationCard
                key={item.id}
                education={item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;