'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface ProcessProps {
  dict: any;
}

export default function Process({ dict }: ProcessProps) {
  const steps = dict.process.steps;

  return (
    <section id="process" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.process.heading}
            subheading={dict.process.subheading}
          />
        </AnimatedSection>

        {/* Desktop: horizontal timeline */}
        {/* Outer wrapper is relative; the connector line is absolutely positioned
            so its vertical centre aligns with the centre of the badge circles.
            Badge height = 4.5rem (72px). Label above = ~1rem text + mb-2 (8px) ≈ 24px.
            So badge centre from top of grid row ≈ 24 + 36 = 60px → use top-[60px]. */}
        <div className="hidden lg:block relative mt-6">
          {/* Connector line — centred on the circles */}
          <div className="absolute left-[8.33%] right-[8.33%] top-[60px] h-px bg-border/50 pointer-events-none z-0" />
          <div className="absolute left-[8.33%] right-[8.33%] top-[60px] h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent pointer-events-none z-0" />

          <div className="grid grid-cols-6 gap-2">
            {steps.map((step: any, index: number) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex flex-col items-center text-center px-2">
                  {/* Step label above */}
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.15em] mb-2">
                    Step {index + 1}
                  </p>
                  {/* Number badge */}
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-background border border-accent/50 text-accent font-display font-bold text-xl flex items-center justify-center shadow-[0_0_16px_rgba(163,230,53,0.15)] mb-5 flex-shrink-0 ring-4 ring-background">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden">
          {steps.map((step: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.07}>
              <div className="flex gap-5">
                {/* Track */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-background border border-accent/50 text-accent font-display font-bold text-base flex items-center justify-center z-10 flex-shrink-0 ring-4 ring-background shadow-[0_0_12px_rgba(163,230,53,0.15)]">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 my-1 min-h-[2.5rem] bg-gradient-to-b from-accent/30 to-border/15" />
                  )}
                </div>

                {/* Content */}
                <div className={`pt-2 ${index < steps.length - 1 ? 'pb-8' : 'pb-0'}`}>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.15em] mb-1">
                    Step {index + 1}
                  </p>
                  <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
