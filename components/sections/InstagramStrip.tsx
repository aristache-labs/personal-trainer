'use client';

import { motion } from 'framer-motion';
import { Instagram, Dumbbell, Flame, Trophy, Brain, Zap, Apple } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface InstagramStripProps {
  dict: any;
}

const POSTS = [
  {
    id: 1,
    icon: Flame,
    category: 'Training Tips',
    title: '5 reasons your fat loss has stalled — and how to fix it',
    bg: 'from-zinc-800/90 to-zinc-950',
    accent: 'text-accent',
    featured: true,
  },
  {
    id: 2,
    icon: Trophy,
    category: 'Client Results',
    title: 'What 12 weeks of real consistency actually looks like',
    bg: 'from-zinc-800/80 to-zinc-900',
    accent: 'text-amber-400',
    featured: false,
  },
  {
    id: 3,
    icon: Apple,
    category: 'Nutrition Guide',
    title: 'The only 3 nutrition rules you actually need to follow',
    bg: 'from-zinc-900/90 to-zinc-800',
    accent: 'text-accent',
    featured: false,
  },
  {
    id: 4,
    icon: Brain,
    category: 'Client Mindset',
    title: 'Why motivation fades — and what to build instead',
    bg: 'from-zinc-800/80 to-zinc-950',
    accent: 'text-violet-400',
    featured: false,
  },
  {
    id: 5,
    icon: Dumbbell,
    category: 'Recovery Strategy',
    title: 'How to train harder by recovering smarter',
    bg: 'from-zinc-900 to-zinc-800/80',
    accent: 'text-sky-400',
    featured: false,
  },
  {
    id: 6,
    icon: Zap,
    category: 'Fat Loss Basics',
    title: 'The truth about fasted cardio for fat loss',
    bg: 'from-zinc-800/90 to-zinc-900',
    accent: 'text-amber-400',
    featured: false,
  },
];

export default function InstagramStrip({ dict }: InstagramStripProps) {
  const d = dict.instagram;

  return (
    <section className="py-section bg-surface section-divider overflow-hidden">
      <div className="container mx-auto">
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

        {/* Horizontal scroll row — whole row fades in as one unit */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:mx-0 md:px-0 items-start">
            {POSTS.map((post) => {
              const isFeatured = post.featured;
              return (
                <motion.a
                  key={post.id}
                  href="https://instagram.com/elitetrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: 'rgba(163,230,53,0.35)' }}
                  transition={{ duration: 0.2 }}
                  className={`group relative flex-shrink-0 rounded-2xl bg-background border border-border/50 overflow-hidden cursor-pointer flex flex-col ${
                    isFeatured
                      ? 'w-72 sm:w-80 aspect-[4/5]'
                      : 'w-52 sm:w-56 aspect-square'
                  }`}
                  aria-label={`${post.category}: ${post.title}`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.bg} opacity-90`} />

                  {/* Icon */}
                  <div className="flex-1 flex items-center justify-center relative z-10 pt-4">
                    <div className={`${isFeatured ? 'w-16 h-16' : 'w-12 h-12'} rounded-2xl bg-white/5 flex items-center justify-center ${post.accent}`}>
                      <post.icon size={isFeatured ? 30 : 24} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 p-4 bg-gradient-to-t from-zinc-950/98 via-zinc-950/80 to-transparent">
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${post.accent}`}>
                      {post.category}
                    </p>
                    <p className={`text-zinc-200 font-medium leading-snug mb-3 ${isFeatured ? 'text-sm' : 'text-xs line-clamp-2'}`}>
                      {post.title}
                    </p>

                    {/* "View post" hint — appears on hover */}
                    <div className="flex items-center gap-1 text-zinc-500 group-hover:text-accent transition-colors">
                      <span className="text-[10px] font-medium">View post</span>
                      <span className="text-[10px] translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>

                  {/* Instagram icon top-right */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Instagram size={13} className="text-accent" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.25}>
          <div className="flex items-center justify-center gap-3 mt-10">
            <a
              href="https://instagram.com/elitetrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors group"
            >
              <Instagram size={16} className="text-accent" />
              {d.handle}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
