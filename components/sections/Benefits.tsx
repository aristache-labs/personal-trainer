'use client';

import {
  Users,
  TrendingUp,
  Award,
  MessageCircle,
  Target,
  Heart,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface BenefitsProps {
  dict: any;
}

const iconMap = [Users, TrendingUp, Award, MessageCircle, Target, Heart];

// Default English micro-labels; prefer dict-provided labels when available
const defaultMicroLabels = [
  'CUSTOM STRATEGY',
  'LASTING CHANGE',
  'COACH EXPERTISE',
  'CONSISTENT CHECK-INS',
  'FORM & EXECUTION',
  'ONGOING SUPPORT',
];

export default function Benefits({ dict }: BenefitsProps) {
  const items = dict.benefits.items ?? [];
  const localizedMicroLabels: string[] = dict.benefits.microLabels ?? [];

  return (
    <section id="benefits" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.benefits.heading}
            subheading={dict.benefits.subheading}
          />
        </AnimatedSection>

        {/* Premium 2-column feature grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {items.map((benefit: any, index: number) => {
            const Icon = iconMap[index] || Target;
            const isFeatured = index === 0;
            const chipText =
              localizedMicroLabels[index] ?? defaultMicroLabels[index] ?? benefit.chip ?? benefit.title;

            return (
              <AnimatedSection
                key={index}
                delay={index * 0.06}
                direction="up"
              >
                <div
                  className={[
                    'relative h-full rounded-2xl border bg-background/80',
                    'border-border/70 hover:border-accent/60',
                    'shadow-[0_0_0_1px_rgba(24,24,27,1)] hover:shadow-[0_0_40px_rgba(163,230,53,0.12)]',
                    'transition-all duration-300',
                    isFeatured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-70" />

                  {/* Subtle radial glow for featured card */}
                  {isFeatured && (
                    <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
                  )}

                  <div className="relative z-10 p-6 sm:p-7 lg:p-8 flex flex-col gap-4">
                    {/* Icon + micro label */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/30">
                          <Icon
                            className="text-accent"
                            size={22}
                            strokeWidth={1.6}
                          />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                          {chipText}
                        </p>
                      </div>
                    </div>

                    {/* Title + description */}
                    <div className="space-y-2">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {benefit.description}
                      </p>
                      {benefit.micro && (
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent/90">
                          {benefit.micro}
                        </p>
                      )}
                    </div>

                    {/* Subtle divider + supporting line */}
                    {benefit.support && (
                      <div className="mt-2 border-t border-border/50 pt-3">
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {benefit.support}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
