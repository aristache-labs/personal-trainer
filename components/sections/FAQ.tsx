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
    <section id="faq" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.faq.heading}
            subheading={dict.faq.subheading}
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {dict.faq.items.map((item: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <FAQItem question={item.question} answer={item.answer} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom WhatsApp CTA */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-surface border border-border/50">
            <p className="text-zinc-400 text-base text-center sm:text-left">
              {dict.faq.stillHaveQuestions}
            </p>
            <CTAButton
              variant="secondary"
              href="https://wa.me/1234567890"
              className="flex-shrink-0"
            >
              <MessageCircle size={18} />
              {dict.faq.contactWhatsApp}
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-surface border-accent/40 border-l-2 border-l-accent'
          : 'bg-surface border-border hover:border-border/80'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className={isOpen ? 'text-accent' : 'text-zinc-500'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
