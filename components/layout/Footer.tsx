import Link from 'next/link';
import { Instagram, Facebook, Youtube, MessageCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { Locale } from '@/lib/getDictionary';

interface FooterProps {
  locale: Locale;
  dict: any;
}

export default function Footer({ locale, dict }: FooterProps) {
  const links = [
    { href: '#about',           label: dict.footer.links.about },
    { href: '#services',        label: dict.footer.links.services },
    { href: '#pricing',         label: dict.footer.links.pricing },
    { href: '#faq',             label: dict.footer.links.faq },
    { href: '#contact',         label: dict.footer.links.contact },
  ];

  return (
    <footer className="bg-surface border-t border-border/30 overflow-x-clip">

      {/* Conversion strip */}
      <div className="border-b border-border/30">
        <div className="container mx-auto py-8 md:py-10">
          <div className="relative rounded-3xl border border-border/40 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_60px_rgba(0,0,0,0.75)] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_top_left,rgba(190,242,100,0.12),transparent_58%),radial-gradient(circle_at_bottom_right,rgba(24,24,27,0.9),transparent_60%)]" />
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
              <div className="flex flex-col gap-2.5 md:gap-3 max-w-xl">
                <SectionEyebrow
                  label={locale === 'ro' ? 'Începe transformarea' : 'Start your transformation'}
                  align="left"
                />
                <p className="font-display text-2xl md:text-3xl lg:text-[2rem] font-bold text-white leading-tight tracking-tight">
                  {locale === 'ro' ? 'Pregătit să te transformi?' : 'Ready to transform?'}
                </p>
                <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed max-w-lg">
                  {locale === 'ro'
                    ? 'Programează o consultație gratuită și construim împreună un plan aliniat cu obiectivele tale, stilul tău de viață și rezultatele pe termen lung.'
                    : "Book your free consultation and let's build a plan around your goals, lifestyle, and long-term results."}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0 md:min-w-[220px]">
                <CTAButton size="md" href="#contact" className="w-full md:w-auto">
                  {locale === 'ro' ? 'Programează o consultație' : 'Book Free Call'}
                  <ArrowRight size={14} />
                </CTAButton>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  {locale === 'ro'
                    ? 'Fără presiune. Doar următorul pas clar.'
                    : 'No pressure. Just a clear next step.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.75fr)_minmax(0,0.95fr)] gap-y-6 md:gap-y-10 md:gap-x-10">

          {/* Brand / identity */}
          <div className="space-y-4 md:space-y-5">
            <Link href={`/${locale}`} className="text-2xl md:text-[26px] font-display font-bold block">
              <span className="text-white">Elite</span>
              <span className="text-accent">Trainer</span>
            </Link>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xs">
              {dict.footer.tagline}
            </p>
            <p className="text-[11px] text-zinc-600">
              {locale === 'ro'
                ? 'Antrenament • Nutriție • Consecvență'
                : 'Training • Nutrition • Accountability'}
            </p>

            <div className="flex gap-2 pt-1.5 md:pt-2">
              {[
                { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
                { href: 'https://facebook.com',  icon: Facebook,  label: 'Facebook' },
                { href: 'https://youtube.com',   icon: Youtube,   label: 'YouTube' },
                { href: 'https://wa.me/1234567890', icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-zinc-950/90 border border-zinc-800/70 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/60 hover:bg-zinc-900 transition-all duration-200 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] hover:shadow-[0_0_22px_rgba(190,242,100,0.25)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
              EXPLORE
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-300 text-sm leading-relaxed hover:text-accent/90 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + language */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
              LEGAL
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="#terms" className="text-zinc-400 text-sm leading-relaxed hover:text-accent/90 transition-colors duration-150">
                  {locale === 'ro' ? 'Termeni și condiții' : 'Terms & Conditions'}
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-zinc-400 text-sm leading-relaxed hover:text-accent/90 transition-colors duration-150">
                  {locale === 'ro' ? 'Politica de confidențialitate' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-zinc-400 text-sm leading-relaxed hover:text-accent/90 transition-colors duration-150">
                  {locale === 'ro' ? 'Politica de cookies' : 'Cookie Policy'}
                </a>
              </li>
            </ul>

            <div className="space-y-2 pt-2">
              <div className="flex gap-2">
                {(['en', 'ro'] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                      locale === l
                        ? 'bg-accent text-black border-accent'
                        : 'bg-transparent text-zinc-300 border-border/50 hover:border-accent/40 hover:text-white'
                    }`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed max-w-[220px]">
                {locale === 'ro'
                  ? 'Română și engleză disponibile.'
                  : 'English & Romanian available.'}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright / utility */}
        <div className="mt-8 md:mt-10 pt-4 md:pt-5 border-t border-border/25 flex flex-col items-center gap-1.5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-3">
          <p className="text-zinc-500 text-[11px] md:text-xs">
            © 2026 Elite Trainer. All rights reserved.
          </p>
          <p className="text-zinc-600 text-[11px] md:text-xs flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 sm:justify-end">
            <span className="text-zinc-500/90">Built with precision.</span>
            <span className="text-accent/80">EliteTrainer®</span>
            <span className="text-zinc-700">{'\u00a0•\u00a0'}</span>
            <a
              href="#anpc"
              className="text-zinc-500 hover:text-accent transition-colors duration-150"
            >
              ANPC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
