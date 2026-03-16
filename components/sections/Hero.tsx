'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Shield, Clock, Users, Phone, Star } from 'lucide-react';
import Image from 'next/image';
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
      className="relative min-h-screen flex items-center overflow-x-clip bg-background section-divider"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-transparent" />
        {/* Top-right primary glow — slightly intensified */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-0 w-[700px] h-[700px] bg-accent/12 rounded-full blur-[120px]"
        />
        {/* Bottom-left secondary glow */}
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]"
        />
        {/* Subtle horizontal accent line — cinematic atmosphere */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 pt-28 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-10 xl:gap-16 items-center w-full">

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
              className="font-display text-[2.6rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem] font-bold leading-[1.04] tracking-[-0.02em] mb-6"
            >
              {dict.hero.headline}
              <br />
              <span className="text-accent">{dict.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6, ease }}
              className="text-base md:text-lg text-zinc-300 mb-9 max-w-lg leading-[1.75]"
            >
              {dict.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5, ease }}
              className="flex flex-col sm:flex-row gap-3 mb-5"
            >
              <CTAButton size="lg" href="#contact">
                {dict.hero.primaryCTA}
              </CTAButton>
              <CTAButton size="lg" variant="secondary" href="#services">
                {dict.hero.secondaryCTA}
              </CTAButton>
            </motion.div>

            {/* Mobile phone CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.4, ease }}
              className="flex items-center gap-2 mb-8 sm:hidden"
            >
              <a
                href={`tel:${dict.hero.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
              >
                <Phone size={13} className="text-accent" />
                <span>{dict.hero.phoneLabel}:</span>
                <span className="text-white">{dict.hero.phone}</span>
              </a>
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
              {/* Primary credential — elevated with left accent border */}
              <div className="flex items-center gap-1.5 pl-3 pr-3 py-1.5 rounded-full bg-surface/80 border border-border/50 border-l-2 border-l-accent text-xs font-medium text-zinc-300 backdrop-blur-sm ring-1 ring-white/5">
                <Shield size={12} className="text-accent flex-shrink-0" />
                {dict.hero.trustBadges.certified}
              </div>

              {[
                { icon: Clock,  label: dict.hero.trustBadges.years },
                { icon: Users,  label: dict.hero.trustBadges.clients },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/80 border border-border/50 text-xs font-medium text-zinc-400 backdrop-blur-sm ring-1 ring-white/5"
                >
                  <Icon size={12} className="text-accent flex-shrink-0" />
                  {label}
                </div>
              ))}

              {/* Google Reviews badge */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/80 border border-border/50 text-xs font-medium text-zinc-400 backdrop-blur-sm ring-1 ring-white/5 hover:border-amber-400/40 hover:text-zinc-200 transition-all"
                aria-label="Google Reviews — 5.0 stars"
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <Star size={10} className="text-amber-400 fill-amber-400 flex-shrink-0" />
                {dict.hero.trustBadges.google}
              </a>
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
              <div className="absolute -inset-8 bg-accent/8 rounded-[2.5rem] blur-3xl pointer-events-none" />

              {/* Frame — taller aspect ratio 2/3 */}
              <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-gradient-to-b from-zinc-800/60 to-zinc-900/80 backdrop-blur-sm aspect-[2/3]">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
                <div className="absolute top-0 left-0 w-px h-8 bg-accent" />
                <div className="absolute bottom-0 right-0 w-8 h-px bg-accent/50" />
                <div className="absolute bottom-0 right-0 w-px h-8 bg-accent/50" />

                {/* Trainer photo */}
                <Image
                  src="/images/trainer-hero.jpg"
                  alt={dict.about.trainerName}
                  fill
                  priority
                  sizes="(min-width: 1280px) 500px, 460px"
                  className="object-cover object-top"
                />

                {/* Bottom nameplate */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pt-20 pb-7 px-7">
                  {/* Stat chip — sits above the name, inside the gradient */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                      {dict.hero.floatingStat ?? 'Avg. 12-week result'}
                    </span>
                    <span className="font-display text-xl font-bold text-accent leading-none">
                      {dict.hero.floatingStatValue ?? '−18 kg'}
                    </span>
                  </div>
                  <p className="font-display font-bold text-white text-lg leading-tight">
                    {dict.about.trainerName}
                  </p>
                  <p className="text-accent text-sm font-medium mt-0.5">
                    {dict.about.trainerTitle}
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
