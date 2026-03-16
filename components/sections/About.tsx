'use client';

import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface AboutProps {
  dict: any;
}

export default function About({ dict }: AboutProps) {
  const certPills = ['NASM', 'PN1', 'FMS', '8 Years'];

  return (
    <section id="about" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection className="mb-16">
          <SectionHeading
            heading={dict.about.heading}
            subheading={dict.about.subheading}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Portrait card */}
          <AnimatedSection direction="left">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Glow */}
              <div className="absolute -inset-4 bg-accent/8 rounded-3xl blur-2xl pointer-events-none" />

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-b from-surface-light to-background aspect-[3/4]">
                {/* Top-left accent corner mark */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-accent rounded-br" />
                <div className="absolute top-0 left-0 w-1 h-12 bg-accent rounded-br" />

                {/* Silhouette */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <svg
                    viewBox="0 0 120 180"
                    fill="none"
                    className="w-36 h-52 opacity-15"
                    aria-hidden="true"
                  >
                    <ellipse cx="60" cy="28" rx="22" ry="22" fill="currentColor" className="text-accent" />
                    <path
                      d="M20 75 C20 55 40 45 60 45 C80 45 100 55 100 75 L108 130 L80 130 L75 100 L75 175 L45 175 L45 100 L40 130 L12 130 Z"
                      fill="currentColor"
                      className="text-accent"
                    />
                  </svg>
                  <p className="text-zinc-600 text-xs mt-4 tracking-widest uppercase">
                    Photo Coming Soon
                  </p>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                  <p className="text-white font-display font-bold text-xl">
                    {dict.about.trainerName}
                  </p>
                  <p className="text-accent text-sm font-medium mt-0.5">
                    {dict.about.trainerTitle}
                  </p>
                  {/* Certification pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {certPills.map((cert) => (
                      <span
                        key={cert}
                        className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                {dict.about.story}
              </p>
              <p className="text-base text-zinc-400 leading-relaxed italic border-l-2 border-accent/50 pl-4">
                {dict.about.mission}
              </p>

              {/* Values */}
              <div className="grid gap-4 pt-4">
                {dict.about.values.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-background border-l-2 border-accent border border-border/40 hover:border-accent/40 transition-colors"
                  >
                    <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{value.title}</h3>
                      <p className="text-sm text-zinc-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications list */}
              <div className="pt-4 space-y-2">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  Certifications
                </p>
                {dict.about.certifications.map((cert: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
