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
  const [featured, ...rest] = items;

  return (
    <section id="testimonials" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.testimonials.heading}
            subheading={dict.testimonials.subheading}
          />
        </AnimatedSection>

        {/* Mobile: snap carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x scrollbar-hide pb-4 -mx-4 px-4"
            onScroll={(e) => {
              const el = e.currentTarget;
              const cardWidth = el.scrollWidth / items.length;
              setActiveDot(Math.round(el.scrollLeft / cardWidth));
            }}
          >
            {items.map((item: any, index: number) => (
              <div key={index} className="snap-start flex-shrink-0 w-[82vw] max-w-xs">
                <TestimonialCard item={item} index={index} verified={dict.testimonials.verified} />
              </div>
            ))}
          </div>
          {/* Polished pagination dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {items.map((_: any, i: number) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot ? 'w-6 h-1.5 bg-accent' : 'w-1.5 h-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: editorial asymmetric layout */}
        <div className="hidden md:block">
          {/* Featured large card with decorative quote mark */}
          <AnimatedSection delay={0.05}>
            <div className="relative bg-background border border-border rounded-2xl p-8 md:p-10 mb-4 hover:border-accent/25 transition-colors group overflow-hidden">
              {/* Large decorative quotation mark — editorial detail */}
              <span
                className="absolute -top-4 -left-2 font-display text-[10rem] font-bold text-accent/[0.07] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative z-10">
                <div className="flex gap-1 mb-5">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-zinc-200 text-lg md:text-xl leading-[1.8] mb-8 max-w-3xl font-light">
                  &ldquo;{featured.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${avatarColors[0]}`}>
                    {getInitials(featured.name)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-white font-semibold text-sm">{featured.name}</p>
                      <BadgeCheck size={14} className="text-accent" aria-label={dict.testimonials.verified} />
                    </div>
                    <p className="text-zinc-400 text-xs mt-0.5">{featured.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Rest in 2-col then 3-col grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((item: any, index: number) => (
              <AnimatedSection key={index} delay={index * 0.07 + 0.1}>
                <TestimonialCard item={item} index={index + 1} verified={dict.testimonials.verified} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  item: { name: string; role: string; rating: number; text: string };
  index: number;
  verified: string;
}

function TestimonialCard({ item, index, verified }: TestimonialCardProps) {
  const colorClass = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background border border-border rounded-2xl p-6 hover:border-accent/25 transition-colors h-full flex flex-col group cursor-default"
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={13} className="text-accent fill-accent" />
        ))}
      </div>

      <p className="text-zinc-300 text-base leading-[1.8] flex-grow mb-5">
        &ldquo;{item.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border/40">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0 ${colorClass}`}>
          {getInitials(item.name)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-white font-semibold text-xs leading-tight truncate">{item.name}</p>
            <BadgeCheck size={12} className="text-accent flex-shrink-0" aria-label={verified} />
          </div>
          <p className="text-zinc-400 text-[11px] mt-0.5">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
