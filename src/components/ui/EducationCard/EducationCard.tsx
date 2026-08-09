import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  education: {
    id: string;
    number: string;
    institution: string;
    degree: string;
    period: string;
    location: string;
    result: string;
    description: string;
    coursework: string[];
  };
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9"
    >
      {/* Decorative icon */}
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)]">
        <GraduationCap
          size={20}
          className="text-[var(--accent)]"
        />
      </div>

      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
        {education.period}
      </p>

      <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-[var(--text-primary)]">
        {education.degree}
      </h3>

      <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
        {education.institution}
      </p>

      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        {education.location}
      </p>

      {/* CGPA */}
      <div className="mt-8 inline-flex items-baseline gap-2 border-b border-[var(--accent)] pb-1">
        <span className="font-heading text-2xl font-bold text-[var(--text-primary)]">
          {education.result}
        </span>
      </div>

      <p className="mt-7 text-sm leading-7 text-[var(--text-secondary)]">
        {education.description}
      </p>

      {/* Coursework */}
      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Relevant Coursework
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <span
              key={course}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default EducationCard;