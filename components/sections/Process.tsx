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
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative flex gap-0">
            {/* The running line */}
            <div className="absolute top-8 left-[3.5rem] right-[3.5rem] h-px bg-border" />
            <div
              className="absolute top-8 left-[3.5rem] h-px bg-gradient-to-r from-accent to-accent/0"
              style={{ width: 'calc(100% - 7rem)' }}
            />

            {steps.map((step: any, index: number) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="flex-1 px-4"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-accent text-black font-display font-bold text-xl flex items-center justify-center shadow-lg shadow-accent/30 mb-6 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden space-y-0">
          {steps.map((step: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <div className="flex gap-5 relative">
                {/* Left stepper track */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full bg-accent text-black font-display font-bold text-lg flex items-center justify-center shadow-md shadow-accent/30 z-10 flex-shrink-0">
                    {index + 1}
                  </div>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-accent/60 to-border/30 my-1 min-h-8" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 pt-2 ${index === steps.length - 1 ? 'pb-0' : ''}`}>
                  <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
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
