'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  RotateCcw,
  ArrowRight,
  Activity,
  HeartPulse,
  AlertTriangle,
  ShieldAlert,
} from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface BMICalculatorProps {
  dict: any;
}

type BMICategory = 'underweight' | 'healthy' | 'overweight' | 'obese';

interface CategoryConfig {
  key: BMICategory;
  min: number;
  max: number;
  color: string;
  bgColor: string;
  borderColor: string;
  barColor: string;
}

const CATEGORIES: CategoryConfig[] = [
  { key: 'underweight', min: 0,    max: 18.5, color: 'text-blue-400',  bgColor: 'bg-blue-400/10',  borderColor: 'border-blue-400/30',  barColor: 'bg-blue-400'  },
  { key: 'healthy',     min: 18.5, max: 25,   color: 'text-accent',    bgColor: 'bg-accent/10',    borderColor: 'border-accent/30',    barColor: 'bg-accent'    },
  { key: 'overweight',  min: 25,   max: 30,   color: 'text-amber-400', bgColor: 'bg-amber-400/10', borderColor: 'border-amber-400/30', barColor: 'bg-amber-400' },
  { key: 'obese',       min: 30,   max: 999,  color: 'text-rose-400',  bgColor: 'bg-rose-400/10',  borderColor: 'border-rose-400/30',  barColor: 'bg-rose-400'  },
];

const CATEGORY_ICONS: Record<BMICategory, typeof Activity> = {
  underweight: Activity,
  healthy:     HeartPulse,
  overweight:  AlertTriangle,
  obese:       ShieldAlert,
};

function getBMICategory(bmi: number): CategoryConfig {
  return CATEGORIES.find(c => bmi >= c.min && bmi < c.max) ?? CATEGORIES[CATEGORIES.length - 1];
}

function getBMIIndicatorPercent(bmi: number): number {
  const clamped = Math.min(Math.max(bmi, 10), 40);
  return ((clamped - 10) / 30) * 100;
}

export default function BMICalculator({ dict }: BMICalculatorProps) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge]       = useState('');
  const [bmi, setBmi]       = useState<number | null>(null);
  const [error, setError]   = useState('');

  const d = dict?.bmi;
  if (!d) return null;

  function calculate() {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    setError('');
    if (!h || !w || h < 50 || h > 250 || w < 20 || w > 300) {
      setError(d.inputError ?? 'Please enter valid height (50–250 cm) and weight (20–300 kg).');
      return;
    }
    setBmi(parseFloat((w / Math.pow(h / 100, 2)).toFixed(1)));
  }

  function reset() {
    setHeight(''); setWeight(''); setAge(''); setBmi(null); setError('');
  }

  const category = bmi !== null ? getBMICategory(bmi) : null;
  const indicatorPercent = bmi !== null ? getBMIIndicatorPercent(bmi) : 0;

  const inputCls = 'w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all';
  const labelCls = 'block text-xs font-bold uppercase tracking-[0.12em] text-zinc-400 mb-1.5';

  return (
    <section id="bmi" className="py-section-sm bg-background section-divider">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {bmi === null ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-surface border border-border/60 rounded-3xl overflow-hidden"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-7">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/30">
                          <Calculator size={17} className="text-accent" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent mb-0.5">
                            {d.freeAssessmentLabel ?? 'Free Assessment Tool'}
                          </p>
                          <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-tight leading-tight">
                            {d.heading}
                          </h2>
                        </div>
                      </div>
                      <p className="text-zinc-500 text-xs max-w-[240px] leading-relaxed sm:text-right">
                        {d.estimateNote ?? "Results are an estimate and don't replace a full professional assessment."}
                      </p>
                    </div>

                    {/* Single-column: inputs + button */}
                    <div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                        {d.intro ?? d.subheading}
                      </p>
                      <div className="grid sm:grid-cols-3 gap-3 mb-4">
                        <div>
                          <label className={labelCls}>{d.heightLabel}</label>
                          <input
                            type="number"
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                            placeholder={d.heightPlaceholder}
                            className={inputCls}
                            min={50} max={250}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>{d.weightLabel}</label>
                          <input
                            type="number"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            placeholder={d.weightPlaceholder}
                            className={inputCls}
                            min={20} max={300}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>{d.ageLabel}</label>
                          <input
                            type="number"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            placeholder={d.agePlaceholder}
                            className={inputCls}
                            min={10} max={100}
                          />
                        </div>
                      </div>
                      {error && <p className="text-rose-400 text-xs mb-3">{error}</p>}
                      <button
                        onClick={calculate}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-accent text-black font-bold text-sm hover:bg-accent/90 active:scale-95 transition-all duration-150 shadow-md shadow-accent/20"
                      >
                        <Calculator size={15} />
                        {d.calculate}
                      </button>
                    </div>

                    {/* Horizontal category strip */}
                    <div className="mt-6 pt-5 border-t border-border/40">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-3">
                        {d.categoriesLabel ?? 'BMI Categories'}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {CATEGORIES.map(cat => {
                          const Icon = CATEGORY_ICONS[cat.key];
                          return (
                            <div
                              key={cat.key}
                              className={[
                                'flex flex-col items-center gap-1.5 rounded-xl px-3 py-3 border text-center',
                                cat.bgColor,
                                cat.borderColor,
                              ].join(' ')}
                            >
                              <Icon className={`${cat.color} w-4 h-4`} strokeWidth={1.7} />
                              <p className={`text-xs font-bold leading-tight ${cat.color}`}>
                                {d.categories[cat.key]}
                              </p>
                              <p className="text-xs text-zinc-400 leading-tight">
                                {d.ranges[cat.key]}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-surface border border-border/60 rounded-3xl overflow-hidden relative"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                  {/* Ambient glow */}
                  <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-10 ${category!.barColor}`} />

                  <div className="relative z-10 p-6 md:p-8">
                    <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start mb-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-2">{d.yourBMI}</p>

                        {/* Primary metric */}
                        <div className="flex items-end gap-4 mb-4">
                          <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`font-display text-[4.5rem] font-bold leading-none ${category!.color}`}
                          >
                            {bmi}
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`mb-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${category!.bgColor} ${category!.color} border ${category!.borderColor}`}
                          >
                            {d.categories[category!.key]}
                          </motion.span>
                        </div>

                        {/* Indicator bar */}
                        <div className="max-w-sm">
                          <div className="relative h-2 rounded-full overflow-hidden bg-background/80">
                            <div
                              className="absolute inset-0"
                              style={{ background: 'linear-gradient(to right, rgba(96,165,250,0.5), rgba(163,230,53,0.5), rgba(251,191,36,0.5), rgba(248,113,113,0.5))' }}
                            />
                            <motion.div
                              initial={{ left: 0 }}
                              animate={{ left: `${indicatorPercent}%` }}
                              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-background shadow-md"
                              style={{ position: 'absolute' }}
                            />
                          </div>
                          <div className="flex justify-between mt-1.5">
                            <span className="text-blue-400 text-[9px] font-medium">10</span>
                            <span className="text-accent text-[9px] font-medium">18.5</span>
                            <span className="text-amber-400 text-[9px] font-medium">25</span>
                            <span className="text-rose-400 text-[9px] font-medium">30+</span>
                            <span className="text-zinc-600 text-[9px]">40</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={reset}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-background border border-border/50 text-zinc-400 hover:text-white hover:border-border text-xs font-medium transition-all"
                      >
                        <RotateCcw size={12} />
                        {d.reset}
                      </button>
                    </div>

                    {/* CTA */}
                    <div className="pt-5 border-t border-border/40">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">{d.cta}</p>
                        <CTAButton href="#contact" size="sm" className="flex-shrink-0">
                          <span className="flex items-center gap-1.5">
                            {d.ctaButton}
                            <ArrowRight size={13} />
                          </span>
                        </CTAButton>
                      </div>
                    </div>

                    <p className="mt-4 text-zinc-500 text-xs leading-relaxed italic">* {d.disclaimer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
