'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Laptop, Apple, TrendingUp, Flame, Target, FileText, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface ServicesProps {
  dict: any;
}

const iconMap = [Dumbbell, Laptop, Apple, TrendingUp, Flame, Target, FileText];

export default function Services({ dict }: ServicesProps) {
  const [featured, ...rest] = dict.services.items;
  const FeaturedIcon = iconMap[0];

  return (
    <section id="services" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.services.heading}
            subheading={dict.services.subheading}
          />
        </AnimatedSection>

        {/* Featured first service — full-width editorial card */}
        <AnimatedSection delay={0.05}>
          <div className="group relative rounded-2xl border border-border bg-surface overflow-hidden mb-5 hover:border-accent/40 transition-colors duration-300">
            <span className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="grid md:grid-cols-[1fr_1fr] gap-0">
              {/* Left: icon + title + description */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/50">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                  <FeaturedIcon className="text-accent" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-sm max-w-sm">
                  {featured.description}
                </p>
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold mt-6"
                >
                  {dict.services.learnMore}
                  <ArrowRight size={15} />
                </motion.span>
              </div>

              {/* Right: benefits list */}
              <div className="p-8 md:p-10">
                <p className="text-[11px] font-bold text-accent uppercase tracking-[0.18em] mb-5">
                  What&apos;s Included
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featured.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-accent/80 rounded-full mt-[6px] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Remaining 6 in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((service: any, index: number) => {
            const Icon = iconMap[index + 1] || Dumbbell;
            return (
              <AnimatedSection key={index} delay={index * 0.06 + 0.1}>
                <ServiceCard service={service} Icon={Icon} learnMore={dict.services.learnMore} />
              </AnimatedSection>
            );
          })}
        </div>

        {/* Conversion row */}
        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 rounded-2xl border border-border/40 bg-surface">
            <p className="text-zinc-400 text-sm md:text-base text-center sm:text-left">
              {dict.services.notSure}
            </p>
            <CTAButton href="#contact" variant="outline" size="md" className="flex-shrink-0 whitespace-nowrap">
              {dict.services.notSureCTA}
            </CTAButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: { title: string; description: string; benefits: string[] };
  Icon: any;
  learnMore: string;
}

function ServiceCard({ service, Icon, learnMore }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      className="group bg-surface border border-border rounded-2xl p-6 hover:border-accent/35 transition-all duration-300 hover:shadow-lg hover:shadow-accent/6 h-full flex flex-col relative overflow-hidden"
    >
      <span className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors flex-shrink-0">
        <Icon className="text-accent" size={20} />
      </div>

      <h3 className="text-sm font-bold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
        {service.title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
        {service.description}
      </p>

      <motion.span
        whileHover={{ x: 3 }}
        transition={{ duration: 0.15 }}
        className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold mt-auto"
      >
        {learnMore}
        <ArrowRight size={13} />
      </motion.span>
    </motion.div>
  );
}
