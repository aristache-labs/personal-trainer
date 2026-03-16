'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import {
  MessageCircle,
  ClipboardCheck,
  FileText,
  Dumbbell,
  LineChart,
  RefreshCcw,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

interface ProcessProps {
  dict: any;
}

const ICONS = [
  MessageCircle,
  ClipboardCheck,
  FileText,
  Dumbbell,
  LineChart,
  RefreshCcw,
];

const MICRO_TAGS = [
  'Strategy',
  'Evaluation',
  'Programming',
  'Execution',
  'Tracking',
  'Optimization',
];

/* ─── Custom icon badge ─────────────────────────────────────────────────── */
function IconBadge({
  Icon,
  active,
  featured,
}: {
  Icon: React.ElementType;
  active: boolean;
  featured?: boolean;
}) {
  const size = featured ? 'w-14 h-14' : 'w-12 h-12';
  const iconSize = featured ? 22 : 20;

  return (
    <div
      className={[
        `relative ${size} rounded-xl flex-shrink-0 transition-shadow duration-500`,
        active
          ? featured
            ? 'shadow-[0_0_28px_rgba(163,230,53,0.45)]'
            : 'shadow-[0_0_20px_rgba(163,230,53,0.32)]'
          : '',
      ].join(' ')}
    >
      {/* glass base */}
      <div className="absolute inset-0 rounded-xl bg-accent/[0.09] border border-accent/[0.28]" />
      {/* inner glow ring */}
      <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(163,230,53,0.10)]" />
      {/* corner notch */}
      <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-lg bg-accent/[0.22]" />
      {/* bottom-left micro-dot */}
      <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-accent/35" />
      {/* icon */}
      <Icon
        size={iconSize}
        strokeWidth={1.8}
        className="absolute inset-0 m-auto text-accent"
      />
    </div>
  );
}

/* ─── Milestone node ────────────────────────────────────────────────────── */
function Node({ active }: { active: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      animate={active ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center flex-shrink-0"
    >
      {/* outer ring */}
      <div
        className={[
          'w-6 h-6 rounded-full border-2 transition-all duration-500',
          active
            ? 'bg-accent/15 border-accent/65 shadow-[0_0_20px_rgba(163,230,53,0.65)]'
            : 'bg-surface border-border/50',
        ].join(' ')}
      />
      {/* middle ring */}
      <div
        className={[
          'absolute w-3.5 h-3.5 rounded-full border transition-all duration-500',
          active ? 'border-accent/40' : 'border-transparent',
        ].join(' ')}
      />
      {/* inner dot */}
      <div
        className={[
          'absolute w-2.5 h-2.5 rounded-full transition-all duration-500',
          active ? 'bg-accent' : 'bg-border/35',
        ].join(' ')}
      />
    </motion.div>
  );
}

/* ─── Shared card inner content ─────────────────────────────────────────── */
function StepCardContent({
  step,
  index,
  active,
  isLeft,
  featured,
}: {
  step: any;
  index: number;
  active: boolean;
  isLeft: boolean;
  featured?: boolean;
}) {
  const Icon = ICONS[index] ?? MessageCircle;
  const tag = MICRO_TAGS[index];
  const stepLabel = String(index + 1).padStart(2, '0');

  return (
    <>
      {/* radial corner tint */}
      <div
        className={[
          'absolute inset-0 pointer-events-none',
          featured
            ? isLeft
              ? 'bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.08),transparent_50%)]'
              : 'bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.08),transparent_50%)]'
            : isLeft
              ? 'bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.04),transparent_55%)]'
              : 'bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.04),transparent_55%)]',
        ].join(' ')}
      />
      {/* top inset shimmer */}
      <div
        className={[
          'absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent',
          featured ? 'via-accent/40' : 'via-white/[0.08]',
        ].join(' ')}
      />

      <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
        Step {stepLabel}
      </p>

      <div className="relative flex items-center gap-4">
        <IconBadge Icon={Icon} active={active} featured={featured} />
        <h3 className="font-display text-base sm:text-lg font-semibold text-white leading-snug">
          {step.title}
        </h3>
      </div>

      <p className="relative text-sm text-zinc-400 leading-relaxed">
        {step.description}
      </p>

      <span
        className={[
          'relative self-start mt-0.5 inline-block text-[10px] uppercase font-semibold tracking-[0.16em] rounded-full px-2.5 py-1',
          featured
            ? 'text-accent/80 border border-accent/25 bg-accent/5'
            : 'text-zinc-500 border border-zinc-700/60',
        ].join(' ')}
      >
        {tag}
      </span>
    </>
  );
}

/* ─── Desktop card — driven by parent useInView active state ─────────────── */
function DesktopStepCard({
  step,
  index,
  active,
  isLeft,
  featured,
}: {
  step: any;
  index: number;
  active: boolean;
  isLeft: boolean;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28, y: 10, scale: 0.96 }}
      animate={
        active
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x: isLeft ? -28 : 28, y: 10, scale: 0.96 }
      }
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'group relative rounded-2xl overflow-hidden',
        'p-5 sm:p-6 lg:p-8 flex flex-col gap-4',
        'hover:-translate-y-0.5 transition-all duration-300 cursor-default w-full',
        featured
          ? 'bg-surface border border-accent/30 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(163,230,53,0.14)]'
          : 'bg-surface border border-border/50 hover:border-accent/30 hover:shadow-[0_0_28px_rgba(163,230,53,0.09)]',
      ].join(' ')}
    >
      <StepCardContent step={step} index={index} active={active} isLeft={isLeft} featured={featured} />
    </motion.div>
  );
}

/* ─── Mobile card — self-contained whileInView, slides in from right ──────── */
function MobileStepCard({
  step,
  index,
  featured,
}: {
  step: any;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -48px 0px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'group relative rounded-2xl overflow-hidden',
        'p-5 sm:p-6 flex flex-col gap-4',
        'cursor-default w-full',
        featured
          ? 'bg-surface border border-accent/30'
          : 'bg-surface border border-border/50',
      ].join(' ')}
    >
      {/* Always treat mobile cards as right-side for gradient direction */}
      <StepCardContent step={step} index={index} active={true} isLeft={false} featured={featured} />
    </motion.div>
  );
}

/* ─── Single step row (one ref for desktop, mobile is self-animated) ──────── */
function StepRow({
  step,
  index,
  totalSteps,
}: {
  step: any;
  index: number;
  totalSteps: number;
}) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const desktopActive = useInView(desktopRef, { once: true, margin: '-60px' });
  const isLeft = index % 2 === 0;
  const featured = index === 1 || index === 3;

  return (
    <div>
      {/* ── Desktop: left card | node | right card ───────── */}
      <div ref={desktopRef} className="hidden lg:grid grid-cols-[1fr_4rem_1fr] items-center py-7">
        {/* left slot */}
        <div className="flex justify-end pr-12">
          {isLeft ? (
            <div className="max-w-md w-full">
              <DesktopStepCard step={step} index={index} active={desktopActive} isLeft={true} featured={featured} />
            </div>
          ) : null}
        </div>

        {/* node slot */}
        <div className="flex justify-center">
          <Node active={desktopActive} />
        </div>

        {/* right slot */}
        <div className="flex justify-start pl-12">
          {!isLeft ? (
            <div className="max-w-md w-full">
              <DesktopStepCard step={step} index={index} active={desktopActive} isLeft={false} featured={featured} />
            </div>
          ) : null}
        </div>
      </div>

      {/* ── Mobile: node column + self-animating card ────── */}
      {/* Node column is w-7 (28px), rail at left-[13px] centers under it */}
      <div className="lg:hidden flex items-stretch gap-3 pb-8">
        <MobileNodeColumn index={index} totalSteps={totalSteps} />
        <div className="flex-1 min-w-0">
          <MobileStepCard step={step} index={index} featured={featured} />
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile node + connector (self-animating via whileInView) ────────────── */
function MobileNodeColumn({ index, totalSteps }: { index: number; totalSteps: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: '0px 0px -48px 0px' });

  return (
    <div ref={ref} className="flex flex-col items-center w-7 flex-shrink-0 pt-1">
      <Node active={active} />
      {index < totalSteps - 1 && (
        <div className="w-px flex-1 min-h-12 mt-2 bg-gradient-to-b from-border/50 to-transparent" />
      )}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function Process({ dict }: ProcessProps) {
  const steps = dict.process.steps ?? [];
  const stepsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="bg-background section-divider overflow-x-clip">
      <div className="container mx-auto py-section">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            heading={dict.process.heading}
            subheading={dict.process.subheading}
          />
        </motion.div>

        {/* Steps area */}
        <div ref={stepsRef} className="relative mt-14">

          {/* ── Desktop center track ── */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border/20 pointer-events-none" />
          <motion.div
            className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/25 to-transparent pointer-events-none origin-top"
            style={{ scaleY: lineScaleY }}
          />
          <motion.div
            className="hidden lg:block absolute left-1/2 -translate-x-[3px] top-0 bottom-0 w-[7px] bg-gradient-to-b from-accent/12 via-accent/5 to-transparent pointer-events-none origin-top blur-[3px]"
            style={{ scaleY: lineScaleY }}
          />

          {/* ── Mobile left rail — centered under the w-7 node column ── */}
          {/* Node column is w-7 (28px), so center is at 14px = left-[13px] is ~correct */}
          <div className="lg:hidden absolute left-[13px] top-0 bottom-0 w-px bg-border/25 pointer-events-none" />
          <motion.div
            className="lg:hidden absolute left-[13px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/55 via-accent/20 to-transparent pointer-events-none origin-top"
            style={{ scaleY: lineScaleY }}
          />
          <motion.div
            className="lg:hidden absolute left-[10px] top-0 bottom-0 w-[7px] bg-gradient-to-b from-accent/10 via-accent/4 to-transparent pointer-events-none origin-top blur-[2px]"
            style={{ scaleY: lineScaleY }}
          />

          {/* Mobile stack — no extra padding, node column handles alignment */}
          <div className="lg:hidden">
            {steps.map((step: any, i: number) => (
              <StepRow key={i} step={step} index={i} totalSteps={steps.length} />
            ))}
          </div>

          {/* Desktop alternating rows */}
          <div className="hidden lg:block">
            {steps.map((step: any, i: number) => (
              <StepRow key={i} step={step} index={i} totalSteps={steps.length} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
