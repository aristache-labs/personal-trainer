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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dict.pricing.plans.map((plan: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className={`relative h-full flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-background border-accent shadow-xl shadow-accent/15 animate-glow-pulse'
                    : 'bg-background border-border hover:border-accent/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 bg-accent text-black px-5 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-accent/30">
                      <Sparkles size={13} />
                      {dict.pricing.mostPopular}
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-8 mt-2">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-display font-bold ${plan.popular ? 'text-accent' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className="text-zinc-600 text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={17}
                        className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-accent' : 'text-zinc-500'}`}
                      />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  href="#contact"
                >
                  {dict.pricing.cta}
                </CTAButton>

                {/* No-contract note */}
                <p className="text-center text-zinc-700 text-xs mt-4">
                  {dict.pricing.noContract}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
