'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Shield, Clock, Users } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import StatsCounter from '@/components/ui/StatsCounter';

interface HeroProps {
  dict: any;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background section-divider"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-0 w-[700px] h-[700px] bg-accent/12 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto relative z-10 pt-28 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 xl:gap-20 items-center w-full">

          {/* Copy column */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
                Elite Personal Training
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.65, ease }}
              className="font-display text-[2.6rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem] font-bold leading-[1.06] tracking-tight mb-6"
            >
              {dict.hero.headline}
              <br />
              <span className="text-accent">{dict.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6, ease }}
              className="text-base md:text-lg text-zinc-400 mb-9 max-w-lg leading-[1.75]"
            >
              {dict.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5, ease }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <CTAButton size="lg" href="#contact">
                {dict.hero.primaryCTA}
              </CTAButton>
              <CTAButton size="lg" variant="secondary" href="#services">
                {dict.hero.secondaryCTA}
              </CTAButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.5, ease }}
              className="grid grid-cols-3 gap-4 md:gap-6 py-7 border-y border-border/40 mb-8"
            >
              <StatsCounter end={300} suffix="+" label={dict.hero.stats.clientsLabel} />
              <StatsCounter end={95}  suffix="%" label={dict.hero.stats.transformationsLabel} />
              <StatsCounter end={8}   suffix="+" label={dict.hero.stats.experienceLabel} />
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { icon: Shield, label: dict.hero.trustBadges.certified },
                { icon: Clock,  label: dict.hero.trustBadges.years },
                { icon: Users,  label: dict.hero.trustBadges.clients },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/80 border border-border/50 text-xs font-medium text-zinc-400 backdrop-blur-sm"
                >
                  <Icon size={12} className="text-accent flex-shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo card — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Soft halo */}
              <div className="absolute -inset-6 bg-accent/10 rounded-[2rem] blur-3xl pointer-events-none" />

              {/* Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-gradient-to-b from-zinc-800/60 to-zinc-900/80 backdrop-blur-sm aspect-[3/4]">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
                <div className="absolute top-0 left-0 w-px h-8 bg-accent" />
                <div className="absolute bottom-0 right-0 w-8 h-px bg-accent/50" />
                <div className="absolute bottom-0 right-0 w-px h-8 bg-accent/50" />

                {/* Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 160" className="w-28 h-44 opacity-[0.13]" aria-hidden="true">
                    <ellipse cx="50" cy="22" rx="18" ry="18" fill="currentColor" className="text-accent" />
                    <path d="M16 62 C16 46 34 36 50 36 C66 36 84 46 84 62 L90 108 L66 108 L62 82 L62 156 L38 156 L38 82 L34 108 L10 108 Z" fill="currentColor" className="text-accent" />
                  </svg>
                </div>

                {/* Bottom nameplate */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pt-12 pb-7 px-7">
                  <p className="font-display font-bold text-white text-lg leading-tight">
                    {dict.about.trainerName}
                  </p>
                  <p className="text-accent text-sm font-medium mt-0.5">
                    {dict.about.trainerTitle}
                  </p>
                  <p className="text-zinc-600 text-[11px] mt-3 tracking-widest uppercase">
                    Photo Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
