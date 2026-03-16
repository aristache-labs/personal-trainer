'use client';

import { motion } from 'framer-motion';
import { Instagram, Flame, Trophy, Apple, Brain } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface InstagramStripProps {
  dict: any;
}

const FEATURED_POST = {
  icon: Flame,
  category: 'Coaching Breakdown',
  categoryRo: 'Analiză Coaching',
  title: 'The layered method behind visible fat loss — training, nutrition, and lifestyle working together',
  titleRo: 'Metoda stratificată din spatele pierderii vizibile de grăsime — antrenament, nutriție și stil de viață lucrând împreună',
  accent: 'text-accent',
  accentBg: 'bg-accent/10',
  accentBorder: 'border-accent/25',
};

const SUPPORTING_POSTS = [
  {
    icon: Trophy,
    category: 'Client Results',
    categoryRo: 'Rezultate Clienți',
    title: 'What 12 weeks of structured coaching actually look like in real life',
    titleRo: 'Cum arată în realitate 12 săptămâni de coaching structurat',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
    accentBorder: 'border-amber-400/25',
  },
  {
    icon: Apple,
    category: 'Nutrition Strategy',
    categoryRo: 'Strategie Nutrițională',
    title: 'The 3 nutrition levers that move the needle for fat loss and energy',
    titleRo: 'Cele 3 pârghii nutriționale care schimbă jocul pentru slăbit și energie',
    accent: 'text-accent',
    accentBg: 'bg-accent/10',
    accentBorder: 'border-accent/25',
  },
  {
    icon: Brain,
    category: 'Recovery & Lifestyle',
    categoryRo: 'Recuperare & Stil de Viață',
    title: 'Sleep, stress, and daily habits — the unseen drivers of your results',
    titleRo: 'Somn, stres și obiceiuri zilnice — motoarele invizibile ale rezultatelor tale',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-400/10',
    accentBorder: 'border-violet-400/25',
  },
];

export default function InstagramStrip({ dict }: InstagramStripProps) {
  const d = dict.instagram;
  const viewInsight = d.viewPost ?? 'View insight';
  const isRo = viewInsight !== 'View insight';

  return (
    <section className="py-section bg-surface section-divider overflow-hidden">
      <div className="container mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <p className="text-accent text-xs font-bold uppercase tracking-[0.18em] mb-3 flex items-center gap-2">
                <span className="inline-block w-6 h-px bg-accent opacity-60" aria-hidden="true" />
                {d.subheading}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                {d.heading}
              </h2>
              {d.subtitle && (
                <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-xl">
                  {d.subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 text-xs text-zinc-500">
              <a
                href="https://instagram.com/elitetrainer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background/70 border border-border/60 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 hover:text-white hover:border-accent/40 transition-all group"
              >
                <Instagram size={13} className="text-accent group-hover:scale-110 transition-transform" />
                <span>{d.follow}</span>
              </a>
              <p className="flex items-center gap-1 text-[11px] text-zinc-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/80" />
                <span className="text-zinc-400">{d.handle}</span>
                {d.handleMeta && (
                  <>
                    <span className="text-zinc-600">•</span>
                    <span>{d.handleMeta}</span>
                  </>
                )}
              </p>
            </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
              {/* Accent glow */}
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/8 blur-[70px] pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              {/* Media-style focal area */}
              <div className="relative z-10 px-6 pt-6">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-zinc-900/80 via-zinc-900 to-black/90">
                  <div className="aspect-[16/9] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-zinc-900/80 mix-blend-screen" />
                    <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_0,rgba(190,242,100,0.18),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(24,24,27,0.9),transparent_60%)]" />
                    <div className="absolute inset-4 rounded-xl border border-white/5" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/70 border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-200">
                      <FEATURED_POST.icon size={13} className={FEATURED_POST.accent} strokeWidth={1.6} />
                      <span className="hidden xs:inline">{isRo ? FEATURED_POST.categoryRo : FEATURED_POST.category}</span>
                      <span className="xs:hidden">{isRo ? 'Coaching' : 'Coaching'}</span>
                    </div>
                    <div className="absolute top-3 right-3 h-7 px-2 rounded-full bg-black/70 border border-white/10 flex items-center gap-1.5 text-[10px] text-zinc-300">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{isRo ? 'Metodă în detaliu' : 'Method breakdown'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-6 pb-7 bg-gradient-to-t from-zinc-950 via-zinc-950/92 to-transparent mt-2">
                <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 ${FEATURED_POST.accent}`}>
                  {isRo ? FEATURED_POST.categoryRo : FEATURED_POST.category}
                </p>
                <p className="text-zinc-100 font-semibold text-base leading-snug mb-4 max-w-sm">
                  {isRo ? FEATURED_POST.titleRo : FEATURED_POST.title}
                </p>
                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-accent transition-colors">
                  <Instagram size={12} />
                  <span className="text-[11px] font-medium">{viewInsight}</span>
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
                  className="group relative flex items-center gap-4 bg-background/95 border border-border/60 rounded-2xl overflow-hidden cursor-pointer hover:border-accent/35 hover:bg-background transition-colors duration-300 p-4"
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
                    <p className="text-zinc-200 text-sm md:text-[15px] font-medium leading-snug line-clamp-2">
                      {isRo ? post.titleRo : post.title}
                    </p>
                  </div>

                  {/* View arrow */}
                  <div className="flex-shrink-0 flex items-center gap-1.5 text-[11px] text-zinc-500 group-hover:text-accent transition-colors">
                    <span className="hidden sm:inline font-medium uppercase tracking-[0.16em]">
                      {viewInsight}
                    </span>
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform text-sm">
                      →
                    </span>
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
