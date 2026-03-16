import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  heading,
  subheading,
  align = 'center',
  className = '',
  children,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={cn('mb-12 md:mb-16', alignClass, className)}>
      {subheading && (
        <p className="text-accent text-xs font-bold uppercase tracking-[0.18em] mb-4 flex items-center gap-2 justify-center [.text-left_&]:justify-start">
          <span className="inline-block w-6 h-px bg-accent opacity-60" aria-hidden="true" />
          {subheading}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-0">
        {heading}
      </h2>
      {children}
    </div>
  );
}
