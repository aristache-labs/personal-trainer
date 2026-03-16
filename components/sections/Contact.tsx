'use client';

import { useState, FormEvent } from 'react';
import { Mail, Instagram, Send, Clock, CalendarClock } from 'lucide-react';
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
              className="mb-4"
            />

            {/* Strong conversion sub-copy */}
            {dict.contact.subCopy && (
              <p className="text-zinc-300 text-base leading-relaxed mb-8 max-w-md">
                {dict.contact.subCopy}
              </p>
            )}

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
                    placeholder={dict.contact.form.messagePlaceholder ?? 'I want to lose 15kg and build lean muscle...'}
                  />
                </div>

              {/* Urgency note */}
              {dict.contact.urgencyNote && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/8 border border-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 animate-pulse" />
                  <span className="text-accent text-xs font-semibold">{dict.contact.urgencyNote}</span>
                </div>
              )}

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
                className="flex items-center gap-3 p-4 rounded-xl bg-[#075E54]/10 border border-[#128C7E]/30 hover:border-[#25D366]/50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-[#25D366]/12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                  {/* WhatsApp logo SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="#25D366"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm">{dict.contact.whatsappPrimary}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    {dict.contact.whatsappSecondary ?? 'Most direct path to getting started'}
                  </p>
                </div>
                <span className="text-zinc-600 group-hover:text-[#25D366] transition-colors text-base leading-none">→</span>
              </a>

              {/* Reply time */}
              <div className="flex items-center gap-2 self-start px-3.5 py-2 rounded-full bg-background border border-border/50">
                <Clock size={13} className="text-accent flex-shrink-0" />
                <span className="text-zinc-500 text-xs">{dict.contact.replyTime}</span>
              </div>

              {/* Availability block */}
              <div className="bg-background border border-border/40 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <CalendarClock size={14} className="text-accent flex-shrink-0" />
                  <p className="text-white text-xs font-bold uppercase tracking-[0.12em]">
                    {dict.contact.availability.label}
                  </p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { day: dict.contact.availability.weekdays,  hours: dict.contact.availability.weekdayHours,  closed: false },
                    { day: dict.contact.availability.saturday,  hours: dict.contact.availability.saturdayHours, closed: false },
                    { day: dict.contact.availability.sunday,    hours: dict.contact.availability.sundayHours,   closed: true  },
                  ].map(({ day, hours, closed }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-zinc-400 text-xs">{day}</span>
                      <span className={`text-xs font-medium ${closed ? 'text-zinc-400' : 'text-white'}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-2.5">
                <a
                  href="mailto:contact@elitetrainer.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-background border border-border/40 hover:border-accent/25 transition-colors group"
                >
                  <Mail size={16} className="text-zinc-400 group-hover:text-accent transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 text-xs font-semibold">{dict.contact.info.email}</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">contact@elitetrainer.com</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/elitetrainer"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-background border border-border/40 hover:border-accent/25 transition-colors group"
                >
                  <Instagram size={16} className="text-zinc-400 group-hover:text-accent transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 text-xs font-semibold">{dict.contact.info.instagram}</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">@elitetrainer</p>
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
