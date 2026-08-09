import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  experience: {
    id: string;
    number: string;
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
  };
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group border-t border-[var(--border)] py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[80px_0.9fr_1.1fr]">
        {/* Number */}
        <div>
          <span className="font-mono text-xs text-[var(--text-secondary)]">
            {experience.number}
          </span>
        </div>

        {/* Role information */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            {experience.period}
          </p>

          <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            {experience.role}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <span>{experience.company}</span>

            <ArrowUpRight
              size={15}
              className="text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>

          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            {experience.location}
          </p>
        </div>

        {/* Details */}
        <div>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            {experience.description}
          </p>

          <ul className="mt-7 space-y-4">
            {experience.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]"
              >
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />

                <span>{responsibility}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;