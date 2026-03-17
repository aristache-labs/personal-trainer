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
      <span className="inline-block h-px w-5 md:w-6 bg-accent" />
      <span className="text-[11px] font-semibold tracking-[0.26em] text-accent/70 uppercase">
        {label}
      </span>
    </div>
  );
}

