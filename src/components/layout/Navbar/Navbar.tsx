import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navigationItems } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-[var(--navbar-height)] w-full max-w-[1280px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group font-heading text-lg font-bold tracking-[0.18em] text-[var(--text-primary)]"
          aria-label="Patil - Home"
        >
          PATIL
          <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-150" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* <a href="/resume/Tejas-Patil-Resume.pdf" target="_blank" rel="noreferrer">
            <Button size="sm">Resume</Button>
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-[var(--radius-md)] p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--surface)] md:hidden"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-6">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.04,
                  }}
                  onClick={closeMenu}
                  className="border-b border-[var(--border)] py-4 text-base font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </motion.a>
              ))}

              {/* <a
                href="/resume/Tejas-Patil-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-5"
              >
                <Button className="w-full">View Resume</Button>
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;