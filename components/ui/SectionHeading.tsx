import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/ui/SectionHeader';

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
  return (
    <SectionHeader
      title={heading}
      subtitle={subheading}
      align={align}
      className={cn('mb-12 md:mb-16', className)}
    >
      {children}
    </SectionHeader>
  );
}
