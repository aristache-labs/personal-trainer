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

        <div className="space-y-6">
          {dict.benefits.items.map((benefit: any, index: number) => {
            const Icon = iconMap[index] || Target;
            const isEven = index % 2 === 0;
            const num = String(index + 1).padStart(2, '0');

            return (
              <AnimatedSection
                key={index}
                delay={index * 0.07}
                direction={isEven ? 'left' : 'right'}
              >
                <div
                  className={`flex gap-6 md:gap-10 items-center p-6 md:p-8 rounded-2xl bg-background border border-border/50 hover:border-accent/30 transition-colors group ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Icon block with watermark number */}
                  <div className="relative flex-shrink-0">
                    {/* Decorative watermark number */}
                    <span
                      className="absolute -top-3 -left-3 text-5xl font-display font-bold text-accent/8 leading-none select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      {num}
                    </span>
                    <div className="relative w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={28} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={isEven ? 'text-left' : 'text-right md:text-right'}>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed max-w-xl">
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
