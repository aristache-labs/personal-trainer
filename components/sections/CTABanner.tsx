import { MessageCircle, ArrowRight, Star, Users, Clock, Zap } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

interface CTABannerProps {
  dict: any;
}

export default function CTABanner({ dict }: CTABannerProps) {
  const t = dict.ctaLimited ?? {};
  const trustItems = [
    { icon: Star, label: t.trustRated ?? '5.0 Rated' },
    { icon: Users, label: t.trustClients ?? '300+ Clients' },
    { icon: Clock, label: t.trustReply ?? '< 2h Reply' },
    { icon: Zap, label: t.trustLimited ?? 'Limited Spots' },
  ];
  return (
    <section className="relative overflow-hidden section-divider bg-surface">
      {/* Subtle radial glow — accent hint without hard panels */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[300px] bg-accent/[0.06] rounded-full blur-[80px]" />
      </div>

      <div className="relative container mx-auto py-10 md:py-section-sm">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* Left: copy */}
          <div className="max-w-2xl">
            <SectionEyebrow
              label={t.eyebrow ?? 'Limited Availability'}
              align="left"
              className="mb-5"
            />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
              {(t.headlineLine1 ?? 'Limited spots available')}
              <br className="hidden sm:block" /> {t.headlineLine2 ?? 'each month.'}{' '}
              <span className="text-accent">{t.headlineHighlight ?? 'Reserve yours.'}</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-lg mb-6">
              {t.body ?? "Serious transformation requires a committed coach. Only a handful of spots open monthly — act before they're gone."}
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/60 border border-border/50 text-xs font-medium text-zinc-400"
                >
                  <Icon size={11} className="text-accent flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTAs */}
            <div className="flex flex-col gap-3 lg:min-w-[220px]">
            <div className="shadow-lg shadow-accent/20 rounded-xl">
              <CTAButton size="lg" href="#contact" className="w-full justify-center">
                {t.primaryCta ?? 'Book Free Consultation'}
                <ArrowRight size={17} />
              </CTAButton>
            </div>
            <CTAButton size="md" variant="secondary" href="https://wa.me/1234567890" className="w-full justify-center">
              <MessageCircle size={17} />
                {t.secondaryCta ?? 'Chat on WhatsApp'}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
