import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/tejaxpatil',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tejas-patil-9b6199283/',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/tejasxpatil/',
  },
];

function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#hero"
            className="font-heading text-lg font-bold tracking-tight text-[var(--text-primary)]"
          >
            PATIL<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>

          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Tejas Patil
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;