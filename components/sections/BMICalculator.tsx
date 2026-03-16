'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RotateCcw, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import SectionHeading from '@/components/ui/SectionHeading';
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
  percent: number;
}

const CATEGORIES: CategoryConfig[] = [
  { key: 'underweight', min: 0,    max: 18.5, color: 'text-blue-400',   bgColor: 'bg-blue-400/10',   borderColor: 'border-blue-400/30',   barColor: 'bg-blue-400',   percent: 18 },
  { key: 'healthy',     min: 18.5, max: 25,   color: 'text-accent',     bgColor: 'bg-accent/10',     borderColor: 'border-accent/30',     barColor: 'bg-accent',     percent: 42 },
  { key: 'overweight',  min: 25,   max: 30,   color: 'text-amber-400',  bgColor: 'bg-amber-400/10',  borderColor: 'border-amber-400/30',  barColor: 'bg-amber-400',  percent: 65 },
  { key: 'obese',       min: 30,   max: 999,  color: 'text-rose-400',   bgColor: 'bg-rose-400/10',   borderColor: 'border-rose-400/30',   barColor: 'bg-rose-400',   percent: 88 },
];

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
      setError('Please enter valid height (50–250 cm) and weight (20–300 kg).');
      return;
    }
    const result = w / Math.pow(h / 100, 2);
    setBmi(parseFloat(result.toFixed(1)));
  }

  function reset() {
    setHeight('');
    setWeight('');
    setAge('');
    setBmi(null);
    setError('');
  }

  const category = bmi !== null ? getBMICategory(bmi) : null;
  const indicatorPercent = bmi !== null ? getBMIIndicatorPercent(bmi) : 0;

  return (
    <section id="bmi" className="py-section bg-background section-divider">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionHeading
            subheading={d.subheading}
            heading={d.heading}
            align="center"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-zinc-400 text-sm max-w-xl mx-auto -mt-8 mb-14 leading-relaxed">
            {d.intro}
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {bmi === null ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface border border-border/60 rounded-3xl p-8 md:p-12"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent pointer-events-none" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Calculator size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">{d.heading}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{d.subheading}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5 mb-8">
                  {/* Height */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.12em] text-zinc-400 mb-2">
                      {d.heightLabel}
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={e => setHeight(e.target.value)}
                      placeholder={d.heightPlaceholder}
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      min={50}
                      max={250}
                    />
                  </div>

                  {/* Weight */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.12em] text-zinc-400 mb-2">
                      {d.weightLabel}
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                      placeholder={d.weightPlaceholder}
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      min={20}
                      max={300}
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.12em] text-zinc-400 mb-2">
                      {d.ageLabel}
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={e => setAge(e.target.value)}
                      placeholder={d.agePlaceholder}
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      min={10}
                      max={100}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-rose-400 text-sm mb-4">{error}</p>
                )}

                <button
                  onClick={calculate}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-black font-bold text-sm hover:bg-accent/90 active:scale-95 transition-all duration-150 shadow-lg shadow-accent/20"
                >
                  <Calculator size={16} />
                  {d.calculate}
                </button>

                {/* BMI scale reference */}
                <div className="mt-10 pt-8 border-t border-border/40">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 mb-4">BMI Scale</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {CATEGORIES.map(cat => (
                      <div
                        key={cat.key}
                        className={`flex items-start gap-2 p-3 rounded-xl ${cat.bgColor} border ${cat.borderColor}`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${cat.barColor}`} />
                        <div>
                          <p className={`text-xs font-bold ${cat.color}`}>{d.categories[cat.key]}</p>
                          <p className="text-zinc-600 text-[11px] mt-0.5">{d.ranges[cat.key]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface border border-border/60 rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Ambient glow behind result */}
                <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 ${category!.barColor}`} />

                <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-10 items-start">
                  {/* Left: result */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 mb-2">
                      {d.yourBMI}
                    </p>

                    <div className="flex items-end gap-4 mb-2">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`font-display text-[4.5rem] font-bold leading-none ${category!.color}`}
                      >
                        {bmi}
                      </motion.span>
                      <span
                        className={`mb-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${category!.bgColor} ${category!.color} border ${category!.borderColor}`}
                      >
                        {d.categories[category!.key]}
                      </span>
                    </div>

                    {/* Indicator bar */}
                    <div className="mt-6 mb-2">
                      <div className="relative h-3 rounded-full overflow-hidden bg-background">
                        {/* Gradient track — multi-stop requires inline style */}
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to right, rgba(96,165,250,0.4), rgba(163,230,53,0.4), rgba(251,191,36,0.4), rgba(248,113,113,0.4))' }}
                        />
                        {/* Indicator */}
                        <motion.div
                          initial={{ left: 0 }}
                          animate={{ left: `${indicatorPercent}%` }}
                          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-background shadow-lg"
                          style={{ position: 'absolute' }}
                        />
                      </div>
                      <div className="flex justify-between mt-1.5">
                        <span className="text-blue-400 text-[10px]">10</span>
                        <span className="text-accent text-[10px]">18.5</span>
                        <span className="text-amber-400 text-[10px]">25</span>
                        <span className="text-rose-400 text-[10px]">30+</span>
                        <span className="text-zinc-600 text-[10px]">40</span>
                      </div>
                    </div>

                    {/* Category breakdown */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
                      {CATEGORIES.map(cat => (
                        <div
                          key={cat.key}
                          className={`p-2.5 rounded-xl border transition-all ${
                            cat.key === category!.key
                              ? `${cat.bgColor} ${cat.borderColor}`
                              : 'bg-background/50 border-border/30 opacity-40'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mb-1.5 ${cat.barColor}`} />
                          <p className={`text-[11px] font-bold ${cat.key === category!.key ? cat.color : 'text-zinc-500'}`}>
                            {d.categories[cat.key]}
                          </p>
                          <p className="text-zinc-600 text-[10px] mt-0.5">{d.ranges[cat.key]}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: reset */}
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border/50 text-zinc-400 hover:text-white hover:border-border text-xs font-medium transition-all"
                  >
                    <RotateCcw size={13} />
                    {d.reset}
                  </button>
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-10 pt-8 border-t border-border/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <p className="text-zinc-300 text-sm max-w-md leading-relaxed">{d.cta}</p>
                    <CTAButton href="#contact" size="sm">
                      <span className="flex items-center gap-2">
                        {d.ctaButton}
                        <ArrowRight size={14} />
                      </span>
                    </CTAButton>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="relative z-10 mt-6 text-zinc-600 text-[11px] leading-relaxed">
                  * {d.disclaimer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
