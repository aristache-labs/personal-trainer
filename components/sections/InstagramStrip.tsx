'use client';

import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Dumbbell, Flame, Trophy, Camera, Zap, Apple } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface InstagramStripProps {
  dict: any;
}

const POSTS = [
  {
    id: 1,
    icon: Dumbbell,
    label: 'Training',
    caption: 'Morning pull day — consistency is the only shortcut.',
    likes: '1.2k',
    comments: '48',
    bg: 'from-zinc-800 to-zinc-900',
    accent: 'text-accent',
  },
  {
    id: 2,
    icon: Flame,
    label: 'Transformation',
    caption: '12-week client result. Hard work pays off every time.',
    likes: '3.4k',
    comments: '127',
    bg: 'from-zinc-800 to-zinc-950',
    accent: 'text-amber-400',
  },
  {
    id: 3,
    icon: Apple,
    label: 'Nutrition',
    caption: 'Meal prep Sunday — 5 days of fuel in 90 minutes.',
    likes: '987',
    comments: '34',
    bg: 'from-zinc-900 to-zinc-800',
    accent: 'text-lime-400',
  },
  {
    id: 4,
    icon: Trophy,
    label: 'Results',
    caption: 'Another goal unlocked. 6 months of dedication.',
    likes: '2.1k',
    comments: '89',
    bg: 'from-zinc-800 to-zinc-900',
    accent: 'text-accent',
  },
  {
    id: 5,
    icon: Zap,
    label: 'Mindset',
    caption: 'Your only competition is yesterday&apos;s version of you.',
    likes: '4.7k',
    comments: '203',
    bg: 'from-zinc-900 to-zinc-950',
    accent: 'text-amber-400',
  },
  {
    id: 6,
    icon: Camera,
    label: 'Behind the Scenes',
    caption: 'Every session, every rep — this is what real coaching looks like.',
    likes: '1.8k',
    comments: '66',
    bg: 'from-zinc-800 to-zinc-900',
    accent: 'text-sky-400',
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

        {/* Horizontal scroll row */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {POSTS.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.07}>
                <motion.a
                  href="https://instagram.com/elitetrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, borderColor: 'rgba(163,230,53,0.35)' }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex-shrink-0 w-56 sm:w-60 aspect-square rounded-2xl bg-background border border-border/50 overflow-hidden cursor-pointer flex flex-col"
                  aria-label={`Instagram post: ${post.caption}`}
                >
                  {/* Inner gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.bg} opacity-80`} />

                  {/* Icon / image placeholder */}
                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${post.accent}`}>
                      <post.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Caption overlay */}
                  <div className="relative z-10 p-4 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-transparent">
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${post.accent}`}>
                      {post.label}
                    </p>
                    <p className="text-zinc-300 text-xs leading-snug line-clamp-2">{post.caption}</p>

                    <div className="flex items-center gap-3 mt-2.5">
                      <span className="flex items-center gap-1 text-zinc-500 text-[10px]">
                        <Heart size={10} />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-zinc-500 text-[10px]">
                        <MessageCircle size={10} />
                        {post.comments}
                      </span>
                    </div>
                  </div>

                  {/* Instagram icon top-right */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Instagram size={13} className="text-accent" />
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3}>
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
