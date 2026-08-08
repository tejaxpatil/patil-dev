import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full',
        'border border-[var(--border)]',
        'bg-[var(--surface)]',
        'px-3 py-1.5',
        'text-xs font-medium text-[var(--text-secondary)]',
        'transition-colors duration-200',
        'hover:border-[var(--accent)]/40',
        'hover:text-[var(--text-primary)]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;