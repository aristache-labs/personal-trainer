'use client';

import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface AboutProps {
  dict: any;
}

export default function About({ dict }: AboutProps) {
  const certPills = ['NASM', 'PN1', 'FMS', '8 Yrs'];

  return (
    <section id="about" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* Portrait card */}
          <AnimatedSection direction="left">
            <div className="relative max-w-[360px] mx-auto lg:mx-0">
              {/* Ambient glow */}
              <div className="absolute -inset-6 bg-accent/6 rounded-[2rem] blur-3xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-b from-zinc-800/50 to-zinc-900/80 aspect-[3/4]">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-10 h-px bg-accent" />
                <div className="absolute top-0 left-0 w-px h-10 bg-accent" />

                {/* Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 160" className="w-24 h-40 opacity-[0.12]" aria-hidden="true">
                    <ellipse cx="50" cy="22" rx="18" ry="18" fill="currentColor" className="text-accent" />
                    <path d="M16 62 C16 46 34 36 50 36 C66 36 84 46 84 62 L90 108 L66 108 L62 82 L62 156 L38 156 L38 82 L34 108 L10 108 Z" fill="currentColor" className="text-accent" />
                  </svg>
                </div>

                {/* Nameplate */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pt-16 pb-6 px-6">
                  <p className="font-display font-bold text-white text-xl">
                    {dict.about.trainerName}
                  </p>
                  <p className="text-accent text-sm font-medium mt-0.5">
                    {dict.about.trainerTitle}
                  </p>
                  {/* Cert pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {certPills.map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-0.5 rounded bg-accent/15 border border-accent/25 text-accent text-[11px] font-bold tracking-wide"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Copy */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="pt-2 lg:pt-4">
              <SectionHeading
                heading={dict.about.heading}
                subheading={dict.about.subheading}
                align="left"
                className="mb-8"
              />

              <p className="text-base md:text-lg text-zinc-300 leading-[1.8] mb-5">
                {dict.about.story}
              </p>
              <p className="text-sm text-zinc-400 leading-[1.8] italic border-l-2 border-accent/50 pl-4 mb-8">
                {dict.about.mission}
              </p>

              {/* Values */}
              <div className="space-y-3 mb-8">
                {dict.about.values.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="flex gap-3.5 p-4 rounded-xl bg-background border-l-2 border-accent border border-border/30 hover:border-accent/50 transition-colors duration-200"
                  >
                    <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{value.title}</p>
                      <p className="text-sm text-zinc-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <p className="text-[11px] font-bold text-accent uppercase tracking-[0.18em] mb-3">
                  Certifications
                </p>
                <div className="space-y-1.5">
                  {dict.about.certifications.map((cert: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-400">
                      <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
