import { Syne, DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/getDictionary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const locale: Locale = params.locale === 'ro' ? 'ro' : 'en';
  const dict = getDictionary(locale);
  
  return {
    title: params.locale === 'en'
      ? 'Elite Trainer - Elite Personal Training'
      : 'Elite Trainer - Antrenament Personal de Elită',
    description: params.locale === 'en'
      ? 'Transform your body with elite personal training. Evidence-based programs, personalised nutrition, and expert guidance for real, sustainable results.'
      : 'Transformă-ți corpul cu antrenament personal de elită. Programe bazate pe știință, nutriție personalizată și ghidare expertă pentru rezultate reale și sustenabile.',
    openGraph: {
      type: 'website',
      locale: params.locale === 'en' ? 'en_US' : 'ro_RO',
      url: `https://elitetrainer.com/${params.locale}`,
      siteName: 'Elite Trainer',
      title: params.locale === 'en'
        ? 'Elite Trainer - Elite Personal Training'
        : 'Elite Trainer - Antrenament Personal de Elită',
      description: params.locale === 'en'
        ? 'Transform your body with elite personal training. Science-backed, personalised, results-driven.'
        : 'Transformă-ți corpul cu antrenament personal de elită. Bazat pe știință, personalizat, orientat spre rezultate.',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale: Locale = params.locale === 'ro' ? 'ro' : 'en';
  const dict = getDictionary(locale);

  return (
    <html lang={params.locale} className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar locale={params.locale} dict={dict} />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer locale={params.locale} dict={dict} />
      </body>
    </html>
  );
}
