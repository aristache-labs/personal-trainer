import Link from 'next/link';
import { Instagram, Facebook, Youtube, Star, MessageCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
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
        <div className="container mx-auto py-10">
          <div className="relative rounded-3xl border border-border/40 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black px-5 py-7 md:px-8 md:py-8 shadow-[0_24px_60px_rgba(0,0,0,0.75)] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_top_left,rgba(190,242,100,0.12),transparent_58%),radial-gradient(circle_at_bottom_right,rgba(24,24,27,0.9),transparent_60%)]" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              <div className="space-y-2 md:space-y-3 max-w-xl">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-accent/70 uppercase">
                  {locale === 'ro' ? 'Începe transformarea' : 'Start your transformation'}
                </p>
                <p className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  {locale === 'ro' ? 'Pregătit să te transformi?' : 'Ready to transform?'}
                </p>
                <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed max-w-lg">
                  {locale === 'ro'
                    ? 'Programează o consultație gratuită și construim împreună un plan aliniat cu obiectivele tale, stilul tău de viață și rezultatele pe termen lung.'
                    : "Book your free consultation and let's build a plan around your goals, lifestyle, and long-term results."}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3 md:gap-3.5 flex-shrink-0 md:min-w-[260px]">
                <div className="flex flex-col items-start md:items-end gap-1.5 w-full">
                  <CTAButton size="md" href="#contact">
                    {locale === 'ro' ? 'Programează o consultație' : 'Book Free Call'}
                    <ArrowRight size={14} />
                  </CTAButton>
                  <p className="text-[11px] text-zinc-500 md:text-zinc-400">
                    {locale === 'ro'
                      ? 'Fără presiune. Doar următorul pas clar.'
                      : 'No pressure. Just a clear next step.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-display font-bold block mb-3">
              <span className="text-white">Elite</span>
              <span className="text-accent">Trainer</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[220px]">
              {dict.footer.tagline}
            </p>

            <div className="flex gap-2.5 mt-6">
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
                  className="w-9 h-9 bg-background rounded-lg border border-border/50 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/35 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.16em] mb-5">
              {locale === 'ro' ? 'Navigare' : 'Navigate'}
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-300 text-sm hover:text-accent transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div>
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.16em] mb-5">
              {locale === 'ro' ? 'Limbă' : 'Language'}
            </p>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-5 border-t border-border/25 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-400 text-xs">{dict.footer.copyright}</p>
          <p className="text-zinc-500 text-xs">
            {dict.footer.builtWithPrecision}{' '}
            <span className="text-accent/80">EliteTrainer®</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
