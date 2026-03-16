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
      <div className="container mx-auto py-section">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              heading={dict.faq.heading}
              subheading={dict.faq.subheading}
              align="left"
            />
          </AnimatedSection>

          <div className="space-y-2">
            {dict.faq.items.map((item: any, index: number) => (
              <AnimatedSection key={index} delay={index * 0.045}>
                <FAQItem question={item.question} answer={item.answer} />
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.18}>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-7 border-t border-border/30">
              <div>
                <p className="text-white font-semibold text-sm">{dict.faq.stillHaveQuestions}</p>
                <p className="text-zinc-600 text-xs mt-0.5">
                  {dict.faq.replyNote ?? 'We usually reply in under 2 hours.'}
                </p>
              </div>
              <CTAButton variant="secondary" href="https://wa.me/1234567890" className="flex-shrink-0">
                <MessageCircle size={16} />
                {dict.faq.contactWhatsApp}
              </CTAButton>
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
      className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
        isOpen
          ? 'bg-surface border-border/60 border-l-[3px] border-l-accent'
          : 'bg-surface/60 border-border/40 hover:border-border/70'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold leading-snug transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className={isOpen ? 'text-accent' : 'text-zinc-600'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-zinc-300 text-base leading-[1.75]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
