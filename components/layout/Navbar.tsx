'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Youtube, Phone } from 'lucide-react';
import CTAButton from '@/components/ui/CTAButton';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/lib/getDictionary';

interface NavbarProps {
  locale: Locale;
  dict: any;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { href: `#about`,           label: dict.nav.about },
    { href: `#services`,        label: dict.nav.services },
    { href: `#transformations`, label: dict.nav.transformations },
    { href: `#pricing`,         label: dict.nav.pricing },
    { href: `#contact`,         label: dict.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-border/50 shadow-xl shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="text-xl md:text-2xl font-display font-bold tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-white">Elite</span>
              <span className="text-accent">Trainer</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${dict.nav.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 border border-border/60 text-xs text-zinc-300 hover:text-white hover:border-accent/40 transition-colors"
                aria-label={`${dict.nav.callNow} ${dict.nav.phone}`}
              >
                <Phone size={13} className="text-accent flex-shrink-0" />
                <span className="uppercase tracking-[0.16em] text-[10px] text-zinc-500">
                  {dict.nav.callNow}
                </span>
                <span className="font-medium text-xs text-white">
                  {dict.nav.phone}
                </span>
              </a>
              <LanguageSwitcher currentLocale={locale} />
              <CTAButton size="sm" href="#contact">
                {dict.nav.bookConsultation}
              </CTAButton>
            </div>

            {/* Mobile right */}
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher currentLocale={locale} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-300 hover:text-white p-2 rounded-md hover:bg-white/5 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[88vw] bg-surface border-l border-border flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
                <Link
                  href={`/${locale}`}
                  className="text-xl font-display font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-white">Elite</span>
                  <span className="text-accent">Trainer</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.06, duration: 0.3 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-3 py-4 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group border-b border-border/30 last:border-0"
                  >
                    {link.label}
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-5 pb-8 pt-4 space-y-4">
                {/* Phone row above divider */}
                <motion.a
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  href={`tel:${dict.nav.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-between rounded-xl bg-background px-3.5 py-2.5 border border-border/60 text-sm text-zinc-300"
                  aria-label={`Call ${dict.nav.phone}`}
                >
                  <span className="flex items-center gap-2">
                    <Phone size={14} className="text-accent flex-shrink-0" />
                      <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {dict.nav.callNow}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-white">
                    {dict.nav.phone}
                  </span>
                </motion.a>

                <div className="border-t border-border/60 pt-4 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <CTAButton
                      href="#contact"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {dict.nav.bookConsultation}
                    </CTAButton>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="flex items-center justify-center gap-4 pt-2"
                  >
                    <a
                      href="https://instagram.com/elitetrainer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://youtube.com/@elitetrainer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-accent transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={18} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
