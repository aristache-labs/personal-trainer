'use client';

import { Users, TrendingUp, Award, MessageCircle, Target, Heart } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface BenefitsProps {
  dict: any;
}

const iconMap = [Users, TrendingUp, Award, MessageCircle, Target, Heart];

export default function Benefits({ dict }: BenefitsProps) {
  return (
    <section id="benefits" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.benefits.heading}
            subheading={dict.benefits.subheading}
          />
        </AnimatedSection>

        <div className="space-y-4">
          {dict.benefits.items.map((benefit: any, index: number) => {
            const Icon = iconMap[index] || Target;
            const isEven = index % 2 === 0;
            const num = String(index + 1).padStart(2, '0');

            return (
              <AnimatedSection
                key={index}
                delay={index * 0.06}
                direction="up"
              >
                <div
                  className={`flex items-center gap-6 md:gap-10 p-6 md:p-8 rounded-2xl bg-background border border-border/40 hover:border-accent/25 transition-colors duration-250 group ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon + watermark */}
                  <div className="relative flex-shrink-0">
                    <span
                      className="absolute -top-4 -left-2 text-[3.5rem] font-display font-bold text-accent/[0.07] leading-none select-none pointer-events-none tabular-nums"
                      aria-hidden="true"
                    >
                      {num}
                    </span>
                    <div className="relative w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/18 transition-colors">
                      <Icon className="text-accent" size={26} />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-1.5 group-hover:text-accent transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
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
