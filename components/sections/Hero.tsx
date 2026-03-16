'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Clock, Users } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import StatsCounter from '@/components/ui/StatsCounter';

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background section-divider"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-background pointer-events-none" />

      {/* Animated ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/3 right-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left column — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pre-headline accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-12 h-1 bg-accent rounded-full mb-6 origin-left"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[2.75rem] md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] tracking-tight mb-6"
            >
              {dict.hero.headline}
              <br />
              <span className="text-accent">{dict.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed"
            >
              {dict.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <CTAButton size="lg" href="#contact">
                {dict.hero.primaryCTA}
              </CTAButton>
              <CTAButton size="lg" variant="secondary" href="#services">
                {dict.hero.secondaryCTA}
              </CTAButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 md:gap-8 mb-10 py-6 border-y border-border/40"
            >
              <StatsCounter end={300} suffix="+" label={dict.hero.stats.clientsLabel} />
              <StatsCounter end={95}  suffix="%" label={dict.hero.stats.transformationsLabel} />
              <StatsCounter end={8}   suffix="+" label={dict.hero.stats.experienceLabel} />
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Shield, label: dict.hero.trustBadges.certified },
                { icon: Clock,  label: dict.hero.trustBadges.years },
                { icon: Users,  label: dict.hero.trustBadges.clients },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border/60 text-xs font-medium text-zinc-400"
                >
                  <Icon size={13} className="text-accent flex-shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — premium photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow halo */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-3xl blur-3xl scale-110 pointer-events-none" />

              {/* Photo frame card */}
              <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-gradient-to-b from-surface-light to-surface aspect-[3/4]">
                {/* Subtle top gradient accent strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />

                {/* Silhouette SVG placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <svg
                    viewBox="0 0 120 180"
                    fill="none"
                    className="w-40 h-56 opacity-20"
                    aria-hidden="true"
                  >
                    <ellipse cx="60" cy="28" rx="22" ry="22" fill="currentColor" className="text-accent" />
                    <path
                      d="M20 75 C20 55 40 45 60 45 C80 45 100 55 100 75 L108 130 L80 130 L75 100 L75 175 L45 175 L45 100 L40 130 L12 130 Z"
                      fill="currentColor"
                      className="text-accent"
                    />
                  </svg>
                  <p className="text-zinc-600 text-xs mt-6 tracking-wider uppercase">
                    Photo Coming Soon
                  </p>
                </div>

                {/* Bottom name badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                  <p className="text-white font-display font-bold text-lg leading-tight">Alex Ionescu</p>
                  <p className="text-accent text-sm font-medium mt-0.5">Head Coach · NASM-CPT</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent cursor-pointer"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
