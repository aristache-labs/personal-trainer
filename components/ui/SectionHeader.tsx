import { ReactNode } from 'react';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  maxWidth?: 'md' | 'lg';
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  maxWidth = 'md',
  className = '',
  children,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  const alignClasses = isCenter ? 'text-center' : 'text-left';
  const widthClasses = isCenter
    ? maxWidth === 'lg'
      ? 'mx-auto max-w-4xl'
      : 'mx-auto max-w-3xl'
    : maxWidth === 'lg'
      ? 'max-w-3xl'
      : 'max-w-2xl';

  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        alignClasses,
        widthClasses,
        className,
      )}
    >
      {eyebrow && (
        <SectionEyebrow
          label={eyebrow}
          align={align}
          className="mb-3"
        />
      )}

      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-zinc-400 text-sm md:text-[15px] leading-relaxed mt-3',
            isCenter && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}

