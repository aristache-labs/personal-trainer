'use client';

import { motion } from 'framer-motion';
import {
  Dumbbell, Laptop, Apple, TrendingUp, Flame, Target, FileText, ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface ServicesProps {
  dict: any;
}

const iconMap = [Dumbbell, Laptop, Apple, TrendingUp, Flame, Target, FileText];

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="bg-background section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.services.heading}
            subheading={dict.services.subheading}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {dict.services.items.map((service: any, index: number) => {
            const Icon = iconMap[index] || Dumbbell;
            return (
              <AnimatedSection key={index} delay={index * 0.07}>
                <ServiceCard service={service} Icon={Icon} learnMore={dict.services.learnMore} />
              </AnimatedSection>
            );
          })}
        </div>

        {/* Conversion row */}
        <AnimatedSection delay={0.2}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 p-8 rounded-2xl bg-surface border border-border/50">
            <p className="text-zinc-300 text-base text-center sm:text-left">
              {dict.services.notSure}
            </p>
            <CTAButton href="#contact" variant="outline" size="md" className="flex-shrink-0">
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300 hover:shadow-lg hover:shadow-accent/8 h-full flex flex-col relative overflow-hidden"
    >
      {/* Top accent line on hover */}
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

      <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors flex-shrink-0">
        <Icon className="text-accent" size={22} />
      </div>

      <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
        {service.title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      <ul className="space-y-1.5 mb-5 flex-grow">
        {service.benefits.map((benefit: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
            <div className="w-1.5 h-1.5 bg-accent/70 rounded-full mt-[5px] flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>

      <motion.span
        whileHover={{ x: 4 }}
        transition={{ duration: 0.15 }}
        className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-auto"
      >
        {learnMore}
        <ArrowRight size={14} />
      </motion.span>
    </motion.div>
  );
}
