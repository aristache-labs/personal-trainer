'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface TransformationsProps {
  dict: any;
}

function BeforeAfterVisual({ size = 'large', beforeLabel, afterLabel, beforeSrc, afterSrc }: {
  size?: 'large' | 'small';
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
}) {
  const h = size === 'large' ? 'h-[300px] sm:h-[360px] md:h-auto min-h-[300px]' : 'h-56';
  return (
    <div className={`relative flex ${h}`}>
      {/* Before side */}
      <div className="flex-1 relative bg-zinc-900/80 flex flex-col items-center justify-center overflow-hidden">
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            sizes={
              size === 'large'
                ? '(min-width: 1280px) 270px, (min-width: 1024px) 240px, (min-width: 768px) 200px, 50vw'
                : '(min-width: 1024px) 260px, (min-width: 768px) 220px, 70vw'
            }
            className="object-cover object-top"
          />
        ) : (
          <svg viewBox="0 0 80 120" className={`${size === 'large' ? 'w-14 h-20' : 'w-10 h-14'} opacity-20`} aria-hidden="true">
            <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-zinc-300" />
            <path d="M14 50 C14 38 28 30 40 30 C52 30 66 38 66 50 L72 88 L54 88 L50 68 L50 118 L30 118 L30 68 L26 88 L8 88 Z" fill="currentColor" className="text-zinc-300" />
          </svg>
        )}
        <span className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 rounded bg-zinc-800 text-xs font-bold tracking-[0.12em] text-white uppercase border border-zinc-500">
            {beforeLabel}
          </span>
        </span>
      </div>

      {/* Vertical divider with BEFORE→AFTER chip */}
      <div className="absolute left-1/2 inset-y-0 -translate-x-1/2 w-px bg-border/40 flex items-center justify-center z-20">
        <div className="bg-zinc-900 border border-border/60 rounded-full px-2.5 py-1 text-[9px] text-zinc-500 font-bold tracking-wide whitespace-nowrap">
          →
        </div>
      </div>

      {/* After side */}
      <div className="flex-1 relative bg-accent/5 flex flex-col items-center justify-center overflow-hidden">
        {afterSrc ? (
          <Image
            src={afterSrc}
            alt={afterLabel}
            fill
            sizes={
              size === 'large'
                ? '(min-width: 1280px) 270px, (min-width: 1024px) 240px, (min-width: 768px) 200px, 50vw'
                : '(min-width: 1024px) 260px, (min-width: 768px) 220px, 70vw'
            }
            className="object-cover object-top"
          />
        ) : (
          <svg viewBox="0 0 80 120" className={`${size === 'large' ? 'w-14 h-20' : 'w-10 h-14'} opacity-35`} aria-hidden="true">
            <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-accent" />
            <path d="M18 50 C18 38 30 30 40 30 C50 30 62 38 62 50 L67 88 L51 88 L48 68 L48 118 L32 118 L32 68 L29 88 L13 88 Z" fill="currentColor" className="text-accent" />
          </svg>
        )}
        <span className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 rounded bg-accent text-xs font-bold tracking-[0.12em] text-black uppercase border border-accent">
            {afterLabel}
          </span>
        </span>
      </div>
    </div>
  );
}

export default function Transformations({ dict }: TransformationsProps) {
  const [featured, ...rest] = dict.transformations.items;
  const caseLabel: string = dict.transformations.caseLabel ?? 'Case';

  return (
    <section id="transformations" className="bg-background section-divider overflow-x-clip">
      <div className="container mx-auto py-14 md:py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.transformations.heading}
            subheading={dict.transformations.subheading}
          />
        </AnimatedSection>

        {/* Featured result — wide case study card */}
        <AnimatedSection delay={0.05}>
          <div className="group rounded-2xl border border-border bg-surface overflow-hidden mb-4 md:mb-5 hover:border-accent/40 transition-all duration-300">
            <div className="grid md:grid-cols-[400px_1fr] lg:grid-cols-[480px_1fr] xl:grid-cols-[540px_1fr] gap-0">
              {/* Before/After visual */}
              <BeforeAfterVisual
                size="large"
                beforeLabel={dict.transformations.beforeLabel}
                afterLabel={dict.transformations.afterLabel}
                beforeSrc="/images/before-large.png"
                afterSrc="/images/after-large.png"
              />

              {/* Content */}
              <div className="p-5 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                {/* Case eyebrow */}
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-200 font-semibold mb-4">
                  {caseLabel} 01 · {featured.result}
                </p>

                {/* Primary metric */}
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-5xl md:text-[3.25rem] font-display font-bold text-accent leading-tight">
                    {featured.metric}
                  </span>
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">{featured.duration}</p>
                  </div>
                </div>

                {/* Secondary metric chips */}
                {featured.secondaryMetrics && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.secondaryMetrics.map((m: string) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-full bg-accent/8 border border-accent/20 text-accent text-[11px] font-semibold"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-zinc-200 text-base leading-relaxed italic mb-4 max-w-md">
                  &ldquo;{featured.testimonial}&rdquo;
                </p>
                <p className="text-zinc-400 text-sm font-semibold">— {featured.name}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Remaining case study cards */}
        {/* Images indexed from case 02 onward (index 0 = case 02, index 1 = case 03) */}
        {(() => {
          const smallImages: { beforeSrc?: string; afterSrc?: string }[] = [
            { beforeSrc: '/images/before-small-Sarah.png', afterSrc: '/images/after-small-Sarah.png' },
            { beforeSrc: '/images/before-small-Michael.png', afterSrc: '/images/after-small-Michael.png' },
          ];
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {rest.map((item: any, index: number) => (
                <AnimatedSection key={index} delay={index * 0.1 + 0.1}>
                  <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/35 transition-all duration-300 h-full">
                    {/* Before/After split */}
                    <BeforeAfterVisual
                      size="small"
                      beforeLabel={dict.transformations.beforeLabel}
                      afterLabel={dict.transformations.afterLabel}
                      beforeSrc={smallImages[index]?.beforeSrc}
                      afterSrc={smallImages[index]?.afterSrc}
                    />

                {/* Stats */}
                <div className="p-4 md:p-6">
                  {/* Case label */}
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-200 font-semibold mb-2">
                    {caseLabel} {String(index + 2).padStart(2, '0')} · {item.result}
                  </p>

                  {/* Primary metric */}
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="text-3xl font-display font-bold text-accent">{item.metric}</span>
                    <p className="text-sm text-zinc-400 font-medium">{item.duration}</p>
                  </div>

                  {/* Secondary metric chips */}
                  {item.secondaryMetrics && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.secondaryMetrics.map((m: string) => (
                        <span
                          key={m}
                          className="px-2 py-0.5 rounded-full bg-accent/8 border border-accent/20 text-accent text-[11px] font-semibold"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-zinc-200 text-sm italic leading-relaxed mb-2">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                  <p className="text-zinc-400 text-sm font-semibold">— {item.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
            </div>
          );
        })()}

        {/* CTA strip — conversion bridge */}
        {dict.transformations.ctaStrip && (
          <AnimatedSection delay={0.2}>
            <div className="mt-6 md:mt-8 rounded-2xl border border-border/50 bg-surface/80 px-5 py-5 md:px-6 md:py-6 text-center">
              <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1.5">
                {dict.transformations.ctaStrip.headline}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 max-w-md mx-auto">
                {dict.transformations.ctaStrip.subline}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-black font-semibold text-sm hover:bg-accent/90 active:scale-[0.98] transition-all shadow-md shadow-accent/20"
              >
                {dict.transformations.ctaStrip.cta}
              </a>
            </div>
          </AnimatedSection>
        )}

        {/* Disclaimer */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-zinc-500 text-xs mt-6 md:mt-8 max-w-xl mx-auto leading-relaxed">
            {dict.transformations.disclaimer}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
