'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface TransformationsProps {
  dict: any;
}

export default function Transformations({ dict }: TransformationsProps) {
  const [featured, ...rest] = dict.transformations.items;

  return (
    <section id="transformations" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.transformations.heading}
            subheading={dict.transformations.subheading}
          />
        </AnimatedSection>

        {/* Featured result — wide card */}
        <AnimatedSection delay={0.05}>
          <div className="group rounded-2xl border border-border bg-surface overflow-hidden mb-5 hover:border-accent/40 transition-all duration-300">
            <div className="grid md:grid-cols-[260px_1fr] gap-0">
              {/* Before/After visual */}
              <div className="relative flex h-48 md:h-auto min-h-[200px]">
                {/* Before */}
                <div className="flex-1 bg-zinc-900/80 flex flex-col items-center justify-center">
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.15em] text-zinc-600 uppercase">
                    {dict.transformations.beforeLabel}
                  </span>
                  <svg viewBox="0 0 80 120" className="w-12 h-18 opacity-20" aria-hidden="true">
                    <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-zinc-300" />
                    <path d="M14 50 C14 38 28 30 40 30 C52 30 66 38 66 50 L72 88 L54 88 L50 68 L50 118 L30 118 L30 68 L26 88 L8 88 Z" fill="currentColor" className="text-zinc-300" />
                  </svg>
                </div>
                {/* Divider */}
                <div className="absolute left-1/2 inset-y-0 -translate-x-1/2 w-px bg-border/50 flex items-center justify-center z-10">
                  <div className="bg-zinc-900 border border-border/60 rounded px-1.5 py-0.5 text-[10px] text-zinc-500 font-bold">→</div>
                </div>
                {/* After */}
                <div className="flex-1 bg-accent/5 flex flex-col items-center justify-center">
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.15em] text-accent/60 uppercase">
                    {dict.transformations.afterLabel}
                  </span>
                  <svg viewBox="0 0 80 120" className="w-12 h-18 opacity-35" aria-hidden="true">
                    <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-accent" />
                    <path d="M18 50 C18 38 30 30 40 30 C50 30 62 38 62 50 L67 88 L51 88 L48 68 L48 118 L32 118 L32 68 L29 88 L13 88 Z" fill="currentColor" className="text-accent" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-9 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-display font-bold text-accent leading-none">
                    {featured.metric}
                  </span>
                  <div>
                    <p className="text-zinc-400 text-sm font-medium">{featured.duration}</p>
                    <p className="text-zinc-600 text-xs mt-0.5">{featured.result}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-base leading-relaxed italic mb-4 max-w-md">
                  &ldquo;{featured.testimonial}&rdquo;
                </p>
                <p className="text-zinc-500 text-sm font-semibold">— {featured.name}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Remaining cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((item: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1 + 0.1}>
              <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/35 transition-all duration-300">
                {/* Before/After split */}
                <div className="relative flex h-40">
                  <div className="flex-1 bg-zinc-900/70 flex items-center justify-center">
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold tracking-[0.12em] text-zinc-700 uppercase">
                      {dict.transformations.beforeLabel}
                    </span>
                    <svg viewBox="0 0 80 120" className="w-10 h-14 opacity-15" aria-hidden="true">
                      <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-zinc-300" />
                      <path d="M14 50 C14 38 28 30 40 30 C52 30 66 38 66 50 L72 88 L54 88 L50 68 L50 118 L30 118 L30 68 L26 88 L8 88 Z" fill="currentColor" className="text-zinc-300" />
                    </svg>
                  </div>
                  <div className="absolute left-1/2 inset-y-0 -translate-x-1/2 w-px bg-border/40 flex items-center justify-center z-10">
                    <div className="bg-zinc-900 border border-border/50 rounded px-1 py-0.5 text-[9px] text-zinc-600 font-bold">→</div>
                  </div>
                  <div className="flex-1 bg-accent/5 flex items-center justify-center">
                    <span className="absolute top-2.5 right-2.5 text-[9px] font-bold tracking-[0.12em] text-accent/50 uppercase">
                      {dict.transformations.afterLabel}
                    </span>
                    <svg viewBox="0 0 80 120" className="w-10 h-14 opacity-30" aria-hidden="true">
                      <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-accent" />
                      <path d="M18 50 C18 38 30 30 40 30 C50 30 62 38 62 50 L67 88 L51 88 L48 68 L48 118 L32 118 L32 68 L29 88 L13 88 Z" fill="currentColor" className="text-accent" />
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-5">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-display font-bold text-accent">{item.metric}</span>
                    <div>
                      <p className="text-xs text-zinc-500">{item.duration}</p>
                      <p className="text-[11px] text-zinc-700">{item.result}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs italic leading-relaxed mb-2">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                  <p className="text-zinc-600 text-xs font-semibold">— {item.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-zinc-700 text-[11px] mt-8 max-w-xl mx-auto leading-relaxed">
            {dict.transformations.disclaimer}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
