'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BadgeCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface TestimonialsProps {
  dict: any;
}

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

const avatarColors = [
  'bg-accent/20 text-accent',
  'bg-sky-500/20 text-sky-400',
  'bg-violet-500/20 text-violet-400',
  'bg-amber-500/20 text-amber-400',
  'bg-rose-500/20 text-rose-400',
  'bg-teal-500/20 text-teal-400',
];

export default function Testimonials({ dict }: TestimonialsProps) {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const items = dict.testimonials.items;
  const featured = items.find((i: any) => i.featured) ?? items[0];
  const rest = items.filter((i: any) => i !== featured);

  return (
    <section id="testimonials" className="bg-surface section-divider overflow-x-clip">
      <div className="container mx-auto py-10 md:py-section">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-7 md:mb-12">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-accent/70 uppercase mb-3">
              {dict.testimonials.eyebrow}
            </p>
            <SectionHeading heading={dict.testimonials.title} />
            <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed mt-4">
              {dict.testimonials.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Mobile: compact snap carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x scrollbar-hide pb-3 -mx-4 px-5"
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardWidth = el.scrollWidth / items.length;
              setActiveDot(Math.round(el.scrollLeft / cardWidth));
            }}
          >
            {items.map((item: any, index: number) => (
              <div key={index} className="snap-start flex-shrink-0 w-[86vw] max-w-sm">
                <TestimonialCard item={item} index={index} compact />
              </div>
            ))}
          </div>
          {/* Polished pagination dots */}
          <div className="flex justify-center gap-1.5 mt-3.5">
            {items.map((_: any, i: number) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot
                    ? 'w-4 h-1.5 bg-accent'
                    : 'w-2 h-1 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: featured + compact proof grid */}
        <div className="hidden md:block">
          {/* Featured compact card */}
          <AnimatedSection delay={0.05}>
            <div className="relative bg-background/80 border border-border/60 rounded-3xl p-6 md:p-7 mb-5 hover:border-accent/40 hover:bg-background/90 transition-colors group overflow-hidden max-w-4xl mx-auto">
              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5">
                    <BadgeCheck size={12} className="text-accent" />
                    <span className="text-[11px] uppercase tracking-[0.16em] text-accent/80">
                      Verified Client
                    </span>
                  </span>
                </div>

                <p className="text-zinc-100 text-[15px] md:text-[16px] leading-relaxed md:leading-[1.6] max-w-3xl line-clamp-4">
                  “{featured.quote}”
                </p>

                {/* Result chips */}
                {featured.chips && (
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {featured.chips.slice(0, 3).map((chip: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full border border-border/60 bg-background/80 text-[11px] text-zinc-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 pt-0.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs ${avatarColors[0]}`}
                  >
                    {getInitials(featured.name)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-white font-semibold text-sm">{featured.name}</p>
                      <BadgeCheck
                        size={13}
                        className="text-accent"
                        aria-label={dict.testimonials.verified}
                      />
                    </div>
                    <p className="text-zinc-400 text-xs mt-0.5">{featured.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Compact proof cards */}
          <div className="grid grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {rest.slice(0, 3).map((item: any, index: number) => (
              <AnimatedSection key={index} delay={index * 0.06 + 0.1}>
                <TestimonialCard item={item} index={index + 1} compact />
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Trust metrics row */}
        {dict.testimonials.trustPills && (
          <div className="mt-8 md:mt-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 max-w-xl mx-auto">
              {dict.testimonials.trustPills.map((label: string, idx: number) => (
                <div
                  key={idx}
                  className="px-2.5 py-1 rounded-full border border-border/60 bg-background/70 text-[10px] uppercase tracking-[0.16em] text-zinc-400"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  item: { name: string; role: string; quote: string; chips?: string[] };
  index: number;
  compact?: boolean;
}

function TestimonialCard({ item, index, compact = false }: TestimonialCardProps) {
  const colorClass = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-background/90 md:bg-background/80 border border-border/60 rounded-2xl ${
        compact ? 'p-5' : 'p-6'
      } hover:border-accent/35 hover:bg-background/95 md:hover:bg-background/90 transition-colors h-full flex flex-col group cursor-default`}
    >
      <div className="flex gap-0.5 mb-3 opacity-90">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={11} className="text-accent fill-accent" />
        ))}
      </div>

      <p
        className={`text-zinc-100 text-sm leading-relaxed flex-grow mb-3 ${
          compact ? 'line-clamp-3' : 'line-clamp-4'
        }`}
      >
        “{item.quote}”
      </p>

      {/* Result chips */}
      {item.chips && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.chips.slice(0, compact ? 2 : 3).map((chip, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-full border border-border/60 bg-background/80 text-[10px] text-zinc-300"
            >
              {chip}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 pt-2.5 border-t border-border/40">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-[11px] flex-shrink-0 ${colorClass}`}
        >
          {getInitials(item.name)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-white font-semibold text-xs leading-tight truncate">
              {item.name}
            </p>
            <BadgeCheck size={12} className="text-accent flex-shrink-0" aria-label="Verified Client" />
          </div>
          <p className="text-zinc-400 text-[11px] mt-0.5">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
