import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { heroContent } from '@/data/hero';
// import { Button, Container } from '@/components/ui';
import { Button, Container, FlipCard } from '@/components/ui';

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden pt-[var(--navbar-height)]"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[15%] -z-10 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[140px]"
      />

      <Container className="flex min-h-[calc(100vh-var(--navbar-height))] items-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              {heroContent.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
            >
              {heroContent.description}
            </motion.p>


            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {heroContent.primaryAction.label}
                <ArrowDownRight size={18} />
              </Button>

              <a
                href={heroContent.secondaryAction.href}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  {heroContent.secondaryAction.label}
                  <ArrowUpRight size={18} />
                </Button>
              </a>
            </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-5"
          >
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Find me on
            </span>

            <div className="flex items-center gap-3">
              {heroContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
          </div>

        {/* Interactive profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto aspect-[4/5] w-full max-w-[460px] lg:ml-auto"
          >
            <FlipCard />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] lg:flex"
      >
        Scroll
        <ArrowDownRight size={15} />
      </motion.a>
    </section>
  );
}

export default Hero;