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

        {/* Open editorial rows — no card shells, divider-separated */}
        <div>
          {dict.benefits.items.map((benefit: any, index: number) => {
            const Icon = iconMap[index] || Target;
            const isEven = index % 2 === 0;
            const isLast = index === dict.benefits.items.length - 1;

            return (
              <AnimatedSection key={index} delay={index * 0.07} direction="up">
                <div
                  className={`flex items-center gap-8 md:gap-16 py-9 md:py-11 group ${
                    isEven ? '' : 'md:flex-row-reverse'
                  } ${!isLast ? 'border-b border-border/25' : ''}`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/8 rounded-full flex items-center justify-center ring-1 ring-accent/25 group-hover:bg-accent/15 group-hover:ring-accent/50 transition-all duration-300">
                      <Icon className="text-accent" size={26} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl">
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
