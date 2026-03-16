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
    <footer className="bg-surface border-t border-border/30">

      {/* Conversion strip */}
      <div className="border-b border-border/30">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                {dict.footer.ctaBannerText}
              </p>
              <p className="text-zinc-500 text-sm mt-2 max-w-sm leading-relaxed">
                {dict.footer.ctaBannerSub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-zinc-600 text-xs">{dict.footer.socialProof}</span>
              </div>
              <CTAButton size="sm" href="#contact">
                {dict.footer.ctaButton}
                <ArrowRight size={14} />
              </CTAButton>
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
            <p className="text-zinc-600 text-sm leading-relaxed max-w-[220px]">
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
                  className="w-9 h-9 bg-background rounded-lg border border-border/50 flex items-center justify-center text-zinc-600 hover:text-accent hover:border-accent/35 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-[0.16em] mb-5">
              {locale === 'ro' ? 'Navigare' : 'Navigate'}
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-500 text-sm hover:text-accent transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div>
            <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-[0.16em] mb-5">
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
                      : 'bg-transparent text-zinc-600 border-border/50 hover:border-accent/40 hover:text-zinc-300'
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
          <p className="text-zinc-700 text-xs">{dict.footer.copyright}</p>
          <p className="text-zinc-800 text-xs">
            Built with precision. <span className="text-accent/60">EliteTrainer®</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
