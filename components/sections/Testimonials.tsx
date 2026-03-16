'use client';

import { useState } from 'react';
import { Star, BadgeCheck, Quote } from 'lucide-react';
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
  'bg-blue-500/20 text-blue-400',
  'bg-purple-500/20 text-purple-400',
  'bg-orange-500/20 text-orange-400',
  'bg-pink-500/20 text-pink-400',
  'bg-teal-500/20 text-teal-400',
];

export default function Testimonials({ dict }: TestimonialsProps) {
  const [activeDot, setActiveDot] = useState(0);
  const items = dict.testimonials.items;

  return (
    <section id="testimonials" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.testimonials.heading}
            subheading={dict.testimonials.subheading}
          />
        </AnimatedSection>

        {/* Mobile: snap-scroll carousel */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x pb-4 -mx-6 px-6 scrollbar-hide"
            onScroll={(e) => {
              const el = e.currentTarget;
              const index = Math.round(el.scrollLeft / (el.scrollWidth / items.length));
              setActiveDot(index);
            }}
          >
            {items.map((item: any, index: number) => (
              <div key={index} className="snap-start flex-shrink-0 w-[85vw] max-w-sm">
                <TestimonialCard item={item} index={index} verified={dict.testimonials.verified} />
              </div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-2 mt-5">
            {items.map((_: any, i: number) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot
                    ? 'w-6 h-2 bg-accent'
                    : 'w-2 h-2 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <TestimonialCard item={item} index={index} verified={dict.testimonials.verified} />
            </AnimatedSection>
          ))}
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
    <div className="bg-background border border-border rounded-2xl p-7 hover:border-accent/30 transition-colors h-full flex flex-col group">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={15} className="text-accent fill-accent" />
        ))}
      </div>

      <Quote className="text-accent/20 mb-3" size={28} />

      <p className="text-zinc-300 text-sm leading-relaxed flex-grow mb-6">
        {item.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        {/* Avatar circle with initials */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${colorClass}`}>
          {getInitials(item.name)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
            <BadgeCheck size={14} className="text-accent flex-shrink-0" aria-label={verified} />
          </div>
          <p className="text-zinc-600 text-xs mt-0.5">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
