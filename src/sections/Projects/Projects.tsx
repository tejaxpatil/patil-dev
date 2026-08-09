import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Container, ProjectCard } from '@/components/ui';
import { projects } from '@/data/projects';

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative border-t border-[var(--border)] py-28 lg:py-36"
    >
      <Container>
        {/* Section introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              SELECTED WORK
            </p>

            <h2 className="mt-5 font-heading text-4xl font-bold tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl">
              Things I’ve built.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
          >
            A selection of projects spanning frontend development, full-stack
            applications, APIs, machine learning, and distributed data
            systems.
          </motion.p>
        </div>

        {/* Featured projects */}
        <div className="mt-16 space-y-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Additional projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + featuredProjects.length}
            />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/tejaxpatil"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border-b border-[var(--border)] pb-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
          >
            Explore more on GitHub

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;