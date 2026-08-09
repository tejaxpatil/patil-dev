import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  links: {
    github: string;
    live: string;
  };
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:border-[var(--accent)]/40 hover:-translate-y-1"
    >
      {/* Project header */}
      <div className="flex items-start justify-between border-b border-[var(--border)] px-6 py-5 sm:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            {project.category}
          </p>

          <p className="mt-2 font-mono text-xs text-[var(--text-secondary)]">
            / {project.number}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <ExternalLink size={18} />
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live project`}
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 sm:p-8">
        <h3 className="font-heading text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
          {project.subtitle}
        </p>

        <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-7 space-y-3">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:border-[var(--border)] group-hover:text-[var(--text-primary)]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;