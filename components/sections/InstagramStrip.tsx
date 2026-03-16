'use client';

import { motion, useInView } from 'framer-motion';
import { Instagram, Flame, Trophy, Apple, Brain, Dumbbell, Utensils, Moon } from 'lucide-react';
import { useRef } from 'react';
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

const PILLARS = [
  {
    Icon: Dumbbell,
    labelEn: 'Training',
    labelRo: 'Antrenament',
    subEn: 'Progressive overload',
    subRo: 'Supraîncărcare progresivă',
    color: 'text-accent/90',
    border: 'border-accent/35',
    bg: 'bg-zinc-950/80',
    glow: 'shadow-[0_0_18px_rgba(190,242,100,0.12)]',
    iconColor: 'text-accent/90',
  },
  {
    Icon: Utensils,
    labelEn: 'Nutrition',
    labelRo: 'Nutriție',
    subEn: 'Structure & adherence',
    subRo: 'Structură & consecvență',
    color: 'text-emerald-200',
    border: 'border-emerald-300/35',
    bg: 'bg-zinc-950/80',
    glow: 'shadow-[0_0_18px_rgba(52,211,153,0.10)]',
    iconColor: 'text-emerald-200',
  },
  {
    Icon: Moon,
    labelEn: 'Recovery',
    labelRo: 'Recuperare',
    subEn: 'Sleep, stress & habits',
    subRo: 'Somn, stres & obiceiuri',
    color: 'text-sky-200',
    border: 'border-sky-300/35',
    bg: 'bg-zinc-950/80',
    glow: 'shadow-[0_0_18px_rgba(56,189,248,0.10)]',
    iconColor: 'text-sky-200',
  },
];

const pillarsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const pillarItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};
const spineVariant = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1, transition: { duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] } },
};
const resultVariant = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.68, ease: [0.22, 1, 0.36, 1] } },
};

function MethodDiagram({ isRo }: { isRo: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-5 gap-2"
    >
      {/* Subtle central editorial glow tying the system together */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.14),transparent_60%)] opacity-70 blur-3xl" />
      </div>

      {/* Top 3 pillar blocks */}
      <motion.div
        className="flex items-stretch justify-center gap-2 w-full max-w-sm md:max-w-lg"
        variants={pillarsVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {PILLARS.map((p) => (
          <motion.div
            key={p.labelEn}
            variants={pillarItem}
            className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border ${p.border} ${p.bg} ${p.glow} backdrop-blur-sm basis-20 sm:basis-24 md:basis-32 py-3.5 md:py-4 px-2.5 md:px-3`}
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(circle at 100% 100%, rgba(15,23,42,0.85), rgba(9,9,11,0.95))',
              boxShadow:
                '0 16px 30px rgba(0,0,0,0.70), 0 0 0 1px rgba(148,163,184,0.16), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <p.Icon size={14} className={p.iconColor} strokeWidth={1.5} />
            <span
              className={`text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.18em] leading-none ${p.color}`}
            >
              {isRo ? p.labelRo : p.labelEn}
            </span>
            <span className="text-[8px] md:text-[10px] text-zinc-500 md:text-zinc-400 tracking-[0.06em] leading-tight text-center hidden sm:block">
              {isRo ? p.subRo : p.subEn}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle vertical axis / light column implying convergence */}
      <motion.div
        className="relative flex flex-col items-center gap-0 origin-top"
        variants={spineVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <span className="w-[1.5px] h-6 bg-gradient-to-b from-accent/30 via-accent/15 to-accent/0 rounded-full" />
        <span className="absolute top-0 w-5 h-10 bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.16),transparent_65%)] opacity-80 blur-[14px]" />
      </motion.div>

      {/* Bottom result module */}
      <motion.div
        variants={resultVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col items-center gap-1.5 rounded-2xl py-4 md:py-4.5 px-7 md:px-9 border border-accent/45 min-w-[190px] md:min-w-[250px]"
        style={{
          background:
            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.06), transparent 55%), linear-gradient(130deg,rgba(190,242,100,0.13) 0%,rgba(9,9,11,0.94) 55%,rgba(15,23,42,0.96) 100%)',
          boxShadow:
            '0 18px 40px rgba(0,0,0,0.75), 0 0 0 1px rgba(190,242,100,0.16), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <span className="text-[9px] md:text-[11px] text-accent/80 uppercase tracking-[0.2em] font-semibold">
          {isRo ? 'Rezultate Sustenabile' : 'Sustainable Results'}
        </span>
        <span className="text-[8px] md:text-[10px] text-zinc-500 md:text-zinc-400 tracking-[0.08em] hidden sm:block">
          {isRo ? 'Construit să dureze' : 'Built to last'}
        </span>
      </motion.div>
    </div>
  );
}

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
              <div className="relative z-10 px-5 pt-5 md:px-6 md:pt-6">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-zinc-900/85 via-zinc-900 to-black/95">
                  <div className="aspect-[16/9] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-zinc-900/80 mix-blend-screen" />
                    <div className="absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_20%_0,rgba(190,242,100,0.12),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(24,24,27,0.85),transparent_60%)]" />
                    <div className="absolute inset-[14px] rounded-[18px] border border-white/7" />
                    {/* Premium method visualization */}
                    <MethodDiagram isRo={isRo} />
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-5 pb-6 md:p-6 md:pb-7 bg-gradient-to-t from-zinc-950 via-zinc-950/92 to-transparent mt-1.5 md:mt-2">
                <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-3 ${FEATURED_POST.accent}`}>
                  {isRo ? FEATURED_POST.categoryRo : FEATURED_POST.category}
                </p>
                <p className="text-zinc-100 font-semibold text-base leading-snug mb-4 max-w-sm">
                  {isRo ? FEATURED_POST.titleRo : FEATURED_POST.title}
                </p>
                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-accent transition-colors">
                  <Instagram size={12} />
                  <span className="text-[11px] font-medium">
                    {isRo ? 'Citește analiza' : 'Read breakdown'}
                  </span>
                  <span className="text-[11px] translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
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
                      {isRo ? 'Vezi analiza' : 'View breakdown'}
                    </span>
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform text-sm">
                      →
                    </span>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
            {/* Slim supporting strip to finish the column on desktop */}
            <div className="hidden lg:flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-3 mt-1 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/80" />
                <span>{isRo ? 'Antrenament • Nutriție • Recuperare' : 'Training • Nutrition • Recovery'}</span>
              </span>
              <a
                href="https://instagram.com/elitetrainer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-accent transition-colors"
              >
                <span className="uppercase tracking-[0.16em]">
                  {isRo ? 'Mai multe insight-uri' : 'More insights'}
                </span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom handle */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-2 mt-10 text-[12px] text-zinc-500">
            <Instagram size={14} className="text-accent" />
            <span className="text-zinc-400">
              {d.handle}
              {d.handleMeta && ` · ${d.handleMeta}`}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
