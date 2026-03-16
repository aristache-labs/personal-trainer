import { MessageCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';

interface CTABannerProps {
  dict: any;
}

export default function CTABanner({ dict }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden section-divider bg-surface">
      {/* Accent tint panel — right third */}
      <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-accent/[0.04] pointer-events-none" />
      <div className="absolute top-0 right-1/3 bottom-0 w-px bg-border/30 pointer-events-none" />

      <div className="relative container mx-auto py-section-sm">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* Left: copy */}
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-accent" />
              Limited Availability
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Limited spots available<br className="hidden sm:block" /> each month.{' '}
              <span className="text-accent">Reserve yours.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
              Serious transformation requires a committed coach. Only a handful of spots open monthly — act before they&apos;re gone.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col gap-3 lg:min-w-[220px]">
            <CTAButton size="lg" href="#contact" className="w-full justify-center">
              Book Free Consultation
              <ArrowRight size={17} />
            </CTAButton>
            <CTAButton size="md" variant="secondary" href="https://wa.me/1234567890" className="w-full justify-center">
              <MessageCircle size={17} />
              Chat on WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
