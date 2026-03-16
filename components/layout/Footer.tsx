import Link from 'next/link';
import { Instagram, Facebook, Youtube, Star, MessageCircle } from 'lucide-react';
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
    <footer className="bg-surface border-t border-border/40">

      {/* Conversion strip */}
      <div className="border-b border-border/40 bg-background/60">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xl md:text-2xl font-display font-bold text-white">
                {dict.footer.ctaBannerText}
              </p>
              <p className="text-zinc-500 text-sm mt-1">{dict.footer.ctaBannerSub}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Social proof row */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-zinc-500 text-xs">{dict.footer.socialProof}</span>
              </div>

              <CTAButton size="sm" href="#contact">
                {dict.footer.ctaButton}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-display font-bold block mb-3">
              <span className="text-white">Elite</span>
              <span className="text-accent">Trainer</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {dict.footer.tagline}
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background rounded-lg border border-border flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background rounded-lg border border-border flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background rounded-lg border border-border flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/40 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background rounded-lg border border-border flex items-center justify-center text-zinc-500 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-500 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language / contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Language
            </h3>
            <div className="flex gap-2">
              {(['en', 'ro'] as Locale[]).map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    locale === l
                      ? 'bg-accent text-black border-accent'
                      : 'bg-background text-zinc-500 border-border hover:border-accent/40 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/40">
          <p className="text-zinc-700 text-xs text-center">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
