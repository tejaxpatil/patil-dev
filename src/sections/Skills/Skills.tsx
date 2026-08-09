import { motion } from 'framer-motion';

import { Container, SkillGroup } from '@/components/ui';
import { skillGroups, strengths } from '@/data/skills';

function Skills() {
  return (
    <section
      id="skills"
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
              TECHNICAL STACK
            </p>

            <h2 className="mt-5 font-heading text-4xl font-bold tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl">
              Tools I use to build.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
          >
            A growing toolkit shaped by projects, experimentation, and a
            willingness to learn whatever a problem requires.
          </motion.p>
        </div>

        {/* Skill groups */}
        <div className="mt-16">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.id} group={group} index={index} />
          ))}
        </div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-y border-[var(--border)] py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                HOW I WORK
              </p>

              <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--text-primary)]">
                Beyond the tech stack.
              </h3>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className="text-sm text-[var(--text-secondary)]"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;