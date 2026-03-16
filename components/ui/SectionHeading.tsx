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
        <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
          {subheading}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {heading}
      </h2>
      {children}
    </div>
  );
}
