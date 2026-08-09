import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Database, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui';
import { aboutContent } from '@/data/about';

const highlightIcons = [Code2, Sparkles, Database, Code2];

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[var(--border)] py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              {aboutContent.eyebrow}
            </p>

            <h2 className="mt-5 max-w-md font-heading text-4xl font-bold leading-tight tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl">
              More than just writing code.
            </h2>

            <div className="mt-8 hidden h-px w-24 bg-[var(--accent)] lg:block" />
          </motion.div>

          {/* Content */}
          <div>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="mb-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]"
            >
              Explore what I’ve built

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-2 border-y border-[var(--border)] lg:grid-cols-4">
          {aboutContent.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index];

            return (
              <motion.div
                key={highlight.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group border-r border-[var(--border)] px-6 py-8 last:border-r-0"
              >
                <Icon
                  size={18}
                  className="mb-6 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
                />

                <p className="font-heading text-xl font-bold text-[var(--text-primary)]">
                  {highlight.value}
                </p>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {highlight.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default About;