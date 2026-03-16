'use client';

import { Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface TransformationsProps {
  dict: any;
}

export default function Transformations({ dict }: TransformationsProps) {
  return (
    <section id="transformations" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.transformations.heading}
            subheading={dict.transformations.subheading}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.transformations.items.map((item: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/8">

                {/* Before / After visual split */}
                <div className="relative flex h-48">
                  {/* Before half */}
                  <div className="flex-1 bg-zinc-900 flex flex-col items-center justify-center relative">
                    <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.15em] text-zinc-600 uppercase">
                      {dict.transformations.beforeLabel}
                    </span>
                    <svg viewBox="0 0 80 120" className="w-14 h-20 opacity-20" aria-hidden="true">
                      <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-zinc-400" />
                      <path d="M14 50 C14 38 28 30 40 30 C52 30 66 38 66 50 L72 88 L54 88 L50 68 L50 118 L30 118 L30 68 L26 88 L8 88 Z"
                        fill="currentColor" className="text-zinc-400" />
                    </svg>
                  </div>

                  {/* Divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-center z-10">
                    <div className="w-px h-full bg-border/60" />
                    <span className="absolute bg-surface border border-border text-[10px] font-bold text-zinc-500 px-1.5 py-0.5 rounded tracking-widest">
                      →
                    </span>
                  </div>

                  {/* After half */}
                  <div className="flex-1 bg-accent/5 flex flex-col items-center justify-center relative">
                    <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.15em] text-accent/60 uppercase">
                      {dict.transformations.afterLabel}
                    </span>
                    <svg viewBox="0 0 80 120" className="w-14 h-20 opacity-40" aria-hidden="true">
                      <ellipse cx="40" cy="18" rx="14" ry="14" fill="currentColor" className="text-accent" />
                      <path d="M18 50 C18 38 30 30 40 30 C50 30 62 38 62 50 L67 88 L51 88 L48 68 L48 118 L32 118 L32 68 L29 88 L13 88 Z"
                        fill="currentColor" className="text-accent" />
                    </svg>
                  </div>
                </div>

                {/* Stats & content */}
                <div className="p-6">
                  {/* Metric */}
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-4xl font-display font-bold text-accent leading-none">
                      {item.metric}
                    </span>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.duration}</p>
                      <p className="text-xs text-zinc-600">{item.result}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex items-start gap-2 mb-3">
                    <Quote className="text-accent/40 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-zinc-400 text-sm italic leading-relaxed">{item.testimonial}</p>
                  </div>

                  <p className="text-white font-semibold text-sm">— {item.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-zinc-700 text-xs mt-10">
            {dict.transformations.disclaimer}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
