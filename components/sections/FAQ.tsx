'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface FAQProps {
  dict: any;
}

export default function FAQ({ dict }: FAQProps) {
  return (
    <section id="faq" className="bg-background section-divider overflow-x-clip">
      <div className="container mx-auto py-12 md:py-section">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="mb-6 md:mb-9">
              <p className="text-[11px] font-semibold tracking-[0.26em] text-accent/70 uppercase mb-3">
                {dict.faq.eyebrow}
              </p>
              <SectionHeading heading={dict.faq.title} align="left" className="mb-2" />
              <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed max-w-2xl">
                {dict.faq.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-1.5 md:space-y-2">
            {dict.faq.items.map((item: any, index: number) => (
              <AnimatedSection key={index} delay={index * 0.045}>
                <FAQItem question={item.question} answer={item.answer} />
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.18}>
            <div className="mt-7 md:mt-9 pt-5 border-t border-border/40">
              <div className="rounded-2xl border border-border/60 bg-surface/80 px-5 py-4 md:px-6 md:py-5 flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-3 md:gap-4">
                <div className="md:flex-1">
                  <p className="text-white font-semibold text-sm md:text-[15px]">
                    {dict.faq.support.title}
                  </p>
                  <p className="text-zinc-500 text-xs md:text-[13px] mt-1 max-w-md">
                    {dict.faq.support.text}
                  </p>
                </div>
                <div className="w-full md:w-auto md:flex-shrink-0">
                  <CTAButton
                    variant="secondary"
                    href="https://wa.me/1234567890"
                    className="w-full justify-center"
                  >
                    <MessageCircle size={16} />
                    {dict.faq.support.cta}
                  </CTAButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'bg-surface/95 border-accent/55 shadow-[0_18px_45px_rgba(0,0,0,0.7)]'
          : 'bg-surface/80 border-border/55 hover:border-border/90'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm md:text-[15px] font-semibold leading-snug transition-colors ${
            isOpen ? 'text-white' : 'text-zinc-200'
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <div
            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
              isOpen
                ? 'border-accent/60 bg-accent/10 text-accent'
                : 'border-border/70 bg-background/80 text-zinc-500'
            }`}
          >
            <ChevronDown size={16} />
          </div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/45 bg-background/40"
          >
            <p className="px-5 pb-4 pt-4 text-zinc-300 text-sm md:text-[15px] leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
