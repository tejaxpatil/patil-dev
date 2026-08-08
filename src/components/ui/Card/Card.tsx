import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

function Card({
  children,
  className,
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)]',
        'border border-[var(--border)]',
        'bg-[var(--surface)]',
        'transition-all duration-300',
        hover && [
          'hover:-translate-y-1',
          'hover:border-[var(--accent)]/30',
          'hover:shadow-[var(--shadow)]',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;