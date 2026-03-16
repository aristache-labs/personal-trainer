'use client';

import { motion } from 'framer-motion';
import { Instagram, Flame, Trophy, Apple, Brain } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface InstagramStripProps {
  dict: any;
}

const FEATURED_POST = {
  icon: Flame,
  category: 'Training Tips',
  categoryRo: 'Sfaturi Antrenament',
  title: 'Why most people never see real fat loss results — and the 3 shifts that actually work',
  titleRo: 'De ce majoritatea nu obțin rezultate reale — și cele 3 schimbări care funcționează cu adevărat',
  accent: 'text-accent',
  accentBg: 'bg-accent/10',
  accentBorder: 'border-accent/25',
};

const SUPPORTING_POSTS = [
  {
    icon: Trophy,
    category: 'Client Results',
    categoryRo: 'Rezultate Clienți',
    title: 'What 12 weeks of structured, consistent training actually looks like',
    titleRo: 'Cum arată cu adevărat 12 săptămâni de antrenament structurat și consecvent',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    accentBorder: 'border-amber-400/25',
  },
  {
    icon: Apple,
    category: 'Nutrition Guide',
    categoryRo: 'Ghid Nutrițional',
    title: 'The only 3 nutrition principles you need to build a leaner, stronger body',
    titleRo: 'Cele 3 principii de nutriție de care ai nevoie pentru un corp mai slab și mai puternic',
    accent: 'text-accent',
    accentBg: 'bg-accent/10',
    accentBorder: 'border-accent/25',
  },
  {
    icon: Brain,
    category: 'Mindset',
    categoryRo: 'Mentalitate',
    title: 'Why motivation is the wrong goal — and what to build instead',
    titleRo: 'De ce motivația este obiectivul greșit — și ce să construiești în schimb',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-400/10',
    accentBorder: 'border-violet-400/25',
  },
];

export default function InstagramStrip({ dict }: InstagramStripProps) {
  const d = dict.instagram;
  const viewPost = d.viewPost ?? 'View post';
  const isRo = viewPost !== 'View post';

  return (
    <section className="py-section bg-surface section-divider overflow-hidden">
      <div className="container mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 md:mb-12">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.18em] mb-3 flex items-center gap-2">
                <span className="inline-block w-6 h-px bg-accent opacity-60" aria-hidden="true" />
                {d.subheading}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                {d.heading}
              </h2>
            </div>

            <a
              href="https://instagram.com/elitetrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-background border border-border/60 text-zinc-300 hover:text-white hover:border-accent/40 text-sm font-medium transition-all group flex-shrink-0"
            >
              <Instagram size={15} className="text-accent group-hover:scale-110 transition-transform" />
              {d.follow}
            </a>
          </div>
        </AnimatedSection>

        {/* 1 + 3 editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-4 items-start">
          {/* Featured card */}
          <AnimatedSection delay={0.04}>
            <motion.a
              href="https://instagram.com/elitetrainer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col bg-background border border-border/50 rounded-2xl overflow-hidden cursor-pointer hover:border-accent/35 transition-colors duration-300 h-full min-h-[320px] lg:min-h-[380px]"
              aria-label={`${FEATURED_POST.category}: ${FEATURED_POST.title}`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/90 to-zinc-950" />
              {/* Accent glow */}
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/6 blur-[60px] pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              {/* Icon */}
              <div className="relative z-10 flex-1 flex items-center justify-center pt-8 pb-4">
                <div className={`w-16 h-16 rounded-2xl ${FEATURED_POST.accentBg} border ${FEATURED_POST.accentBorder} flex items-center justify-center`}>
                  <FEATURED_POST.icon size={28} className={FEATURED_POST.accent} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent">
                <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 ${FEATURED_POST.accent}`}>
                  {isRo ? FEATURED_POST.categoryRo : FEATURED_POST.category}
                </p>
                <p className="text-zinc-100 font-semibold text-base leading-snug mb-4 max-w-sm">
                  {isRo ? FEATURED_POST.titleRo : FEATURED_POST.title}
                </p>
                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-accent transition-colors">
                  <Instagram size={12} />
                  <span className="text-[11px] font-medium">{viewPost}</span>
                  <span className="text-[11px] translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>

              {/* Instagram hover badge */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/40">
                  <Instagram size={14} className="text-accent" />
                </div>
              </div>
            </motion.a>
          </AnimatedSection>

          {/* 3 supporting cards */}
          <div className="flex flex-col gap-4">
            {SUPPORTING_POSTS.map((post, index) => (
              <AnimatedSection key={post.category} delay={0.08 + index * 0.07}>
                <motion.a
                  href="https://instagram.com/elitetrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex items-center gap-4 bg-background border border-border/50 rounded-2xl overflow-hidden cursor-pointer hover:border-accent/30 transition-colors duration-300 p-4"
                  aria-label={`${post.category}: ${post.title}`}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${post.accentBg} border ${post.accentBorder} flex items-center justify-center`}>
                    <post.icon size={20} className={post.accent} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold uppercase tracking-[0.14em] mb-1 ${post.accent}`}>
                      {isRo ? post.categoryRo : post.category}
                    </p>
                    <p className="text-zinc-200 text-base sm:text-sm font-medium leading-snug line-clamp-2">
                      {isRo ? post.titleRo : post.title}
                    </p>
                  </div>

                  {/* View arrow */}
                  <div className="flex-shrink-0 text-zinc-600 group-hover:text-accent transition-colors text-sm">
                    →
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom handle */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-3 mt-10">
            <a
              href="https://instagram.com/elitetrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors group"
            >
              <Instagram size={15} className="text-accent" />
              {d.handle}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xs">→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
