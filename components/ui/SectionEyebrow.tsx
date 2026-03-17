interface SectionEyebrowProps {
  label: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionEyebrow({
  label,
  align = 'center',
  className = '',
}: SectionEyebrowProps) {
  const alignment =
    align === 'center'
      ? 'justify-center text-center'
      : 'justify-start text-left';

  return (
    <div
      className={['flex items-center gap-2', alignment, className]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="inline-block h-px w-5 md:w-8 bg-accent" />
      <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.20em] md:tracking-[0.24em] text-accent/70 uppercase">
        {label}
      </span>
    </div>
  );
}

