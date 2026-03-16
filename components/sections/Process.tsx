'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle,
  ClipboardCheck,
  FileText,
  Dumbbell,
  LineChart,
  RefreshCcw,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface ProcessProps {
  dict: any;
}

const ICONS = [
  MessageCircle,
  ClipboardCheck,
  FileText,
  Dumbbell,
  LineChart,
  RefreshCcw,
];

export default function Process({ dict }: ProcessProps) {
  const steps = dict.process.steps ?? [];

  return (
    <section id="process" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.process.heading}
            subheading={dict.process.subheading}
          />
        </AnimatedSection>

        {/* Animated progress line */}
        <AnimatedSection delay={0.05}>
          <div className="mt-6 mb-8 relative h-px bg-border/40 overflow-hidden rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-accent/70 via-accent/30 to-transparent"
              style={{ transformOrigin: 'left center' }}
            />
          </div>
        </AnimatedSection>

        {/* 3×2 premium card grid — shared across all breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {steps.map((step: any, index: number) => {
            const Icon = ICONS[index] ?? MessageCircle;
            const stepLabel = String(index + 1).padStart(2, '0');

            return (
              <AnimatedSection key={index} delay={0.06 * index} direction="up">
                <div className="relative h-full rounded-2xl bg-surface border border-border/60 hover:border-accent/40 hover:shadow-[0_0_32px_rgba(163,230,53,0.12)] transition-all duration-300 flex flex-col p-5 sm:p-6 overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

                  {/* Step number label */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-zinc-500 mb-4">
                    Step {stepLabel}
                  </p>

                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center">
                      <Icon className="text-accent" size={17} strokeWidth={1.7} />
                    </div>
                    <h3 className="font-display text-sm md:text-base font-semibold text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed flex-1">
                    {step.description}
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
