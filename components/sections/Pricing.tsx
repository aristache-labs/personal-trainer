'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Award } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface PricingProps {
  dict: any;
}

interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  durationLabel?: string;
  price: string;
  currency: string;
  pricePerSession: string;
  description: string;
  badgeType?: 'none' | 'popular' | 'bestStart' | 'bestValue';
  features: string[];
}

export default function Pricing({ dict }: PricingProps) {
  const pricing = dict.pricing;
  const plans: PricingPlan[] = pricing.plans || [];

  const getPlan = (id: string) => plans.find((p) => p.id === id);
  const plan8 = getPlan('eight');
  const plan4 = getPlan('four');
  const plan1 = getPlan('single');
  const plan12 = getPlan('twelve');
  const plan20 = getPlan('twenty');

  return (
    <section id="pricing" className="bg-surface section-divider overflow-x-clip">
      <div className="container mx-auto py-14 md:py-section">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-14">
            <p className="text-[11px] font-semibold tracking-[0.26em] text-accent/70 uppercase mb-3">
              {pricing.eyebrow}
            </p>
            <SectionHeading heading={pricing.title} />
            <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed mt-3 max-w-2xl mx-auto">
              {pricing.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Mobile: stacked in logical order */}
        <div className="grid grid-cols-1 gap-3 md:hidden max-w-6xl mx-auto">
          {[plan8, plan4, plan1, plan12, plan20].map((plan, index) => {
            if (!plan) return null;
            const badge = plan.badgeType ?? 'none';
            const isPopular = badge === 'popular';
            const isBestStart = badge === 'bestStart';

            return (
              <AnimatedSection key={plan.id ?? index} delay={index * 0.06}>
                <PricingCard
                  plan={plan}
                  emphasis={isPopular ? 'primary' : isBestStart ? 'secondary' : 'standard'}
                  popularLabel={pricing.popularBadge}
                  bestStartLabel={pricing.bestStartBadge}
                  ctaLabel={pricing.cta}
                />
              </AnimatedSection>
            );
          })}
        </div>

        {/* Tablet / desktop: compact 5-card row */}
        <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto items-stretch">
          {[plan1, plan4, plan8, plan12, plan20].map((plan, index) => {
            if (!plan) return null;
            const badge = plan.badgeType ?? 'none';
            const isPopular = badge === 'popular'; // 8 sessions
            const isBestStart = badge === 'bestStart'; // 4 sessions

            return (
              <AnimatedSection key={plan.id ?? index} delay={index * 0.06}>
                <PricingCard
                  plan={plan}
                  emphasis={isPopular ? 'primary' : isBestStart ? 'secondary' : 'standard'}
                  popularLabel={pricing.popularBadge}
                  bestStartLabel={pricing.bestStartBadge}
                  ctaLabel={pricing.cta}
                />
              </AnimatedSection>
            );
          })}
        </div>

        {pricing.trustRow && Array.isArray(pricing.trustRow) && pricing.trustRow.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-4">
              {pricing.trustRow.map((item: string, i: number) => (
                <span
                  key={i}
                  className="text-zinc-500 text-[11px] md:text-xs font-medium"
                >
                  {item}
                  {i < pricing.trustRow.length - 1 && (
                    <span className="mx-1.5 text-zinc-600" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </AnimatedSection>
        )}

        {pricing.note && (
          <AnimatedSection delay={0.25}>
            <p className="text-center text-zinc-600 text-[11px] md:text-xs mt-6">
              {pricing.note}
            </p>
          </AnimatedSection>
        )}

        {pricing.trustText && (
          <AnimatedSection delay={0.3}>
            <p className="text-center text-zinc-600 text-[11px] md:text-xs mt-2">
              {pricing.trustText}
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: PricingPlan;
  emphasis: 'primary' | 'secondary' | 'standard';
  popularLabel: string;
  bestStartLabel: string;
  ctaLabel: string;
}

function PricingCard({
  plan,
  emphasis,
  popularLabel,
  bestStartLabel,
  ctaLabel,
}: PricingCardProps) {
  const isPrimary = emphasis === 'primary';
  const isSecondary = emphasis === 'secondary';
  const isHighlight = isPrimary || isSecondary;

  return (
    <motion.div
      className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        isPrimary
          ? 'bg-background/95 border-accent/70 shadow-[0_0_45px_rgba(190,242,100,0.18)] xl:-mt-1 xl:-mb-1'
          : isSecondary
          ? 'bg-background/90 border-accent/30 shadow-[0_0_28px_rgba(190,242,100,0.09)]'
          : 'bg-background/80 border-border/60 hover:border-accent/40 hover:bg-background/90'
      }`}
      whileHover={{
        y: isPrimary ? -5 : isSecondary ? -3 : -1,
        boxShadow: isPrimary
          ? '0 24px 60px rgba(190,242,100,0.15)'
          : isSecondary
          ? '0 20px 48px rgba(190,242,100,0.10)'
          : '0 18px 45px rgba(0,0,0,0.7)',
        transition: { duration: 0.2 },
      }}
    >
      {isHighlight && (
        <div className="absolute top-3 inset-x-0 flex justify-center z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] ${
              isPrimary
                ? 'bg-accent text-black shadow-lg shadow-accent/30'
                : 'bg-accent/10 text-accent border border-accent/30'
            }`}
          >
            {isPrimary ? (
              <Sparkles size={11} className="shrink-0" />
            ) : (
              <Award size={11} className="shrink-0" />
            )}
            {isPrimary ? popularLabel : bestStartLabel}
          </span>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-3.5 md:p-4 ${isHighlight ? 'pt-8 md:pt-9' : ''}`}>
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-display text-base md:text-lg font-bold text-white">
            {plan.name}
          </h3>
          <p className="text-zinc-500 text-[11px] mt-0.5">
            {plan.durationLabel || plan.duration}
          </p>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="font-display text-[1.9rem] md:text-[2.2rem] font-bold leading-none text-white">
            {plan.price}{' '}
            <span className="text-xs md:text-sm font-sans text-zinc-500">{plan.currency}</span>
          </p>
          <p className="text-zinc-600 text-[10px] mt-0.5">
            {plan.pricePerSession}
          </p>
        </div>

        <div className="h-px bg-border/50 mb-3" />

        {/* Description — 2 lines max for consistent card height */}
        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
          {plan.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {plan.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check
                size={14}
                className={`mt-0.5 flex-shrink-0 ${
                  isPrimary ? 'text-accent' : isSecondary ? 'text-accent/80' : 'text-zinc-500'
                }`}
              />
              <span className="text-zinc-300 text-[11px] md:text-xs">{feature}</span>
            </li>
          ))}
        </ul>

        <CTAButton
          variant={isPrimary ? 'primary' : 'outline'}
          href="#contact"
          className="w-full mt-auto py-1.5 md:py-2 text-sm"
          size="sm"
        >
          {ctaLabel}
        </CTAButton>
      </div>
    </motion.div>
  );
}
