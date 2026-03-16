'use client';

import { Check, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface PricingProps {
  dict: any;
}

export default function Pricing({ dict }: PricingProps) {
  return (
    <section id="pricing" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.pricing.heading}
            subheading={dict.pricing.subheading}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {dict.pricing.plans.map((plan: any, index: number) => {
            const isPopular = plan.popular;
            return (
              <AnimatedSection key={index} delay={index * 0.09}>
                <div
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    isPopular
                      ? 'bg-background border-accent/70 shadow-2xl shadow-accent/12 ring-1 ring-accent/20 -mt-0 md:-mt-4 md:-mb-4'
                      : 'bg-background border-border/60 hover:border-accent/25'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-[1.125rem] left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 bg-accent text-black px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-accent/25">
                        <Sparkles size={11} />
                        {dict.pricing.mostPopular}
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`${isPopular ? 'pt-3' : ''} mb-7`}>
                    <h3 className={`font-display text-lg font-bold mb-1 ${isPopular ? 'text-accent' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed mb-5">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-[3.25rem] font-display font-bold leading-none ${isPopular ? 'text-accent' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className="text-zinc-600 text-sm ml-0.5">{plan.period}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border/50 mb-6" />

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className={`flex-shrink-0 mt-0.5 ${isPopular ? 'text-accent' : 'text-zinc-600'}`}
                        />
                        <span className="text-zinc-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <CTAButton
                    variant={isPopular ? 'primary' : 'outline'}
                    className="w-full"
                    href="#contact"
                  >
                    {dict.pricing.cta}
                  </CTAButton>

                  <p className="text-center text-zinc-700 text-[11px] mt-3.5">
                    {dict.pricing.noContract}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
