import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)} {...props}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;