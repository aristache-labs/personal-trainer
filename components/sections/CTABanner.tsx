import { MessageCircle } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';

interface CTABannerProps {
  dict: any;
}

export default function CTABanner({ dict }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden section-divider">
      {/* Two-tone split background */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-surface" />
        <div className="flex-1 bg-accent/5" />
      </div>
      {/* Vertical divider blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-accent/5 pointer-events-none" />

      <div className="relative container mx-auto py-section-sm">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Limited Availability
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Limited spots available each month.{' '}
            <span className="text-accent">Reserve yours.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Serious transformation requires a committed coach. Only a handful of spots open monthly — don&apos;t miss yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton size="lg" href="#contact">
              Book Free Consultation
            </CTAButton>

            <CTAButton
              size="lg"
              variant="secondary"
              href="https://wa.me/1234567890"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
