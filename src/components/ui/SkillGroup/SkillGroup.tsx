import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillGroupProps {
  group: {
    id: string;
    number: string;
    title: string;
    description: string;
    skills: string[];
  };
  index: number;
}

function SkillGroup({ group, index }: SkillGroupProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group relative border-t border-[var(--border)] py-8 transition-colors duration-300 hover:border-[var(--accent)]/50"
    >
      <div className="grid gap-6 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start">
        {/* Number */}
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          {group.number}
        </span>

        {/* Title */}
        <div>
          <h3 className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            {group.title}

            <ArrowUpRight
              size={18}
              className="text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </h3>
        </div>

        {/* Content */}
        <div>
          <p className="max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
            {group.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)]/50 hover:text-[var(--text-primary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default SkillGroup;