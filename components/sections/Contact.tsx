'use client';

import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, Instagram, Send, Clock, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAButton from '@/components/ui/CTAButton';

interface ContactProps {
  dict: any;
}

export default function Contact({ dict }: ContactProps) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormState('idle'), 6000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder-zinc-600 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent';

  return (
    <section id="contact" className="bg-surface section-divider">
      <div className="container mx-auto py-section">
        <AnimatedSection>
          <SectionHeading
            heading={dict.contact.heading}
            subheading={dict.contact.subheading}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact form */}
          <AnimatedSection direction="left" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">
                  {dict.contact.form.name}
                </label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  required className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
                  {dict.contact.form.email}
                </label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1.5">
                  {dict.contact.form.phone}
                </label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  className={inputClass}
                  placeholder="+40 712 345 678"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1.5">
                  {dict.contact.form.message}
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required rows={5} className={`${inputClass} resize-none`}
                  placeholder="I want to lose 15kg and build lean muscle..."
                />
              </div>

              <CTAButton type="submit" className="w-full" disabled={formState === 'sending'}>
                <Send size={18} className={formState === 'sending' ? 'animate-pulse' : ''} />
                {formState === 'sending' ? dict.contact.form.sending : dict.contact.form.submit}
              </CTAButton>

              {formState === 'success' && (
                <div className="p-4 bg-accent/10 border border-accent/40 rounded-lg text-accent text-sm text-center">
                  {dict.contact.form.success}
                </div>
              )}
              {formState === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/40 rounded-lg text-red-400 text-sm text-center">
                  {dict.contact.form.error}
                </div>
              )}
            </form>
          </AnimatedSection>

          {/* Right column */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6 h-full flex flex-col">

              {/* Primary WhatsApp CTA */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#128C7E]/15 border border-[#128C7E]/40 hover:border-[#25D366]/60 transition-all group"
              >
                <div className="w-14 h-14 bg-[#25D366]/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                  <MessageCircle className="text-[#25D366]" size={26} />
                </div>
                <div>
                  <p className="text-white font-bold text-base">{dict.contact.whatsappPrimary}</p>
                  <p className="text-zinc-500 text-sm">Most direct way to reach me</p>
                </div>
                <span className="ml-auto text-zinc-600 text-xl group-hover:text-accent transition-colors">→</span>
              </a>

              {/* Reply time badge */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background border border-border/60 self-start">
                <Clock size={14} className="text-accent" />
                <span className="text-zinc-400 text-xs font-medium">{dict.contact.replyTime}</span>
              </div>

              {/* Trust block — client quote */}
              <div className="bg-background border border-border/50 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-4">
                  &ldquo;{dict.contact.trustQuote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
                    JL
                  </div>
                  <p className="text-zinc-500 text-xs">{dict.contact.trustName}</p>
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@elitetrainer.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors group"
                >
                  <Mail size={18} className="text-zinc-500 group-hover:text-accent transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{dict.contact.info.email}</p>
                    <p className="text-zinc-600 text-xs">contact@elitetrainer.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/elitetrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors group"
                >
                  <Instagram size={18} className="text-zinc-500 group-hover:text-accent transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{dict.contact.info.instagram}</p>
                    <p className="text-zinc-600 text-xs">@elitetrainer</p>
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
