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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((benefit: any, index: number) => {
            const Icon = iconMap[index] || Target;
            const isFeatured = index === 0;
            const chipText =
              localizedMicroLabels[index] ??
              defaultMicroLabels[index] ??
              benefit.title;

            return (
              <AnimatedSection key={index} delay={index * 0.055} direction="up">
                <div
                  className={[
                    'relative h-full rounded-2xl border transition-all duration-300',
                    isFeatured
                      ? 'bg-background border-accent/30 hover:border-accent/55 hover:shadow-[0_0_48px_rgba(163,230,53,0.14)]'
                      : 'bg-background/70 border-border/60 hover:border-accent/35 hover:shadow-[0_0_32px_rgba(163,230,53,0.08)]',
                  ].join(' ')}
                >
                  {/* Top accent bar — bolder on featured */}
                  <div
                    className={[
                      'absolute inset-x-0 top-0 h-px',
                      isFeatured
                        ? 'bg-gradient-to-r from-transparent via-accent/80 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-accent/30 to-transparent',
                    ].join(' ')}
                  />

                  {/* Ambient glow — only on featured */}
                  {isFeatured && (
                    <div className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-accent/8 blur-3xl" />
                  )}

                  <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-4 h-full">
                    {/* Icon + title inline */}
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          'inline-flex h-10 w-10 items-center justify-center rounded-xl border flex-shrink-0',
                          isFeatured
                            ? 'bg-accent/15 border-accent/40'
                            : 'bg-accent/8 border-accent/20',
                        ].join(' ')}
                      >
                        <Icon
                          className="text-accent"
                          size={19}
                          strokeWidth={1.6}
                        />
                      </div>
                      <h3
                        className={[
                          'font-display text-base sm:text-lg font-semibold tracking-tight leading-snug',
                          isFeatured ? 'text-white' : 'text-zinc-100',
                        ].join(' ')}
                      >
                        {benefit.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-sm text-zinc-400 leading-relaxed flex-1">
                      {benefit.description}
                    </p>
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
