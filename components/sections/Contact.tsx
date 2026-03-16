'use client';

import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, Instagram, Send, Clock, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface ContactProps {
  dict: any;
}

const WA_URL = 'https://wa.me/1234567890';

export default function Contact({ dict }: ContactProps) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormState('idle'), 7000);
    }, 1400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputBase =
    'w-full bg-background border border-border/70 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 hover:border-border';

  return (
    <section id="contact" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 max-w-6xl mx-auto">

          {/* Left — form */}
          <AnimatedSection direction="left" delay={0.05}>
            <SectionHeading
              heading={dict.contact.heading}
              subheading={dict.contact.subheading}
              align="left"
              className="mb-8"
            />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    {dict.contact.form.name}
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    required className={inputBase} placeholder="Alex Ionescu"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    {dict.contact.form.email}
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    required className={inputBase} placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  {dict.contact.form.phone}
                </label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  className={inputBase} placeholder="+40 712 345 678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  {dict.contact.form.message}
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows={5} className={`${inputBase} resize-none`}
                  placeholder="I want to lose 15kg and build lean muscle..."
                />
              </div>

              <CTAButton type="submit" className="w-full" disabled={formState === 'sending'}>
                <Send size={16} className={formState === 'sending' ? 'animate-pulse' : ''} />
                {formState === 'sending' ? dict.contact.form.sending : dict.contact.form.submit}
              </CTAButton>

              {formState === 'success' && (
                <p className="text-accent text-sm text-center bg-accent/8 border border-accent/25 rounded-lg py-3 px-4">
                  {dict.contact.form.success}
                </p>
              )}
              {formState === 'error' && (
                <p className="text-red-400 text-sm text-center bg-red-500/8 border border-red-500/25 rounded-lg py-3 px-4">
                  {dict.contact.form.error}
                </p>
              )}
            </form>
          </AnimatedSection>

          {/* Right — trust + info */}
          <AnimatedSection direction="right" delay={0.12}>
            <div className="flex flex-col gap-5 h-full">

              {/* Primary WhatsApp */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#075E54]/10 border border-[#128C7E]/30 hover:border-[#25D366]/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-[#25D366]/12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/22 transition-colors">
                  <MessageCircle className="text-[#25D366]" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm">{dict.contact.whatsappPrimary}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">Most direct path to getting started</p>
                </div>
                <span className="text-zinc-700 group-hover:text-accent transition-colors text-lg leading-none">→</span>
              </a>

              {/* Reply time */}
              <div className="flex items-center gap-2 self-start px-3.5 py-2 rounded-full bg-background border border-border/50">
                <Clock size={13} className="text-accent flex-shrink-0" />
                <span className="text-zinc-500 text-xs">{dict.contact.replyTime}</span>
              </div>

              {/* Trust quote */}
              <div className="bg-background border border-border/40 rounded-2xl p-6 flex-grow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic leading-[1.8] mb-5">
                  &ldquo;{dict.contact.trustQuote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                    JL
                  </div>
                  <p className="text-zinc-600 text-xs">{dict.contact.trustName}</p>
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-2.5">
                <a
                  href="mailto:contact@elitetrainer.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-background border border-border/40 hover:border-accent/25 transition-colors group"
                >
                  <Mail size={16} className="text-zinc-600 group-hover:text-accent transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 text-xs font-semibold">{dict.contact.info.email}</p>
                    <p className="text-zinc-700 text-[11px] mt-0.5">contact@elitetrainer.com</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/elitetrainer"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-background border border-border/40 hover:border-accent/25 transition-colors group"
                >
                  <Instagram size={16} className="text-zinc-600 group-hover:text-accent transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 text-xs font-semibold">{dict.contact.info.instagram}</p>
                    <p className="text-zinc-700 text-[11px] mt-0.5">@elitetrainer</p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
