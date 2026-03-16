'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Locale } from '@/lib/getDictionary';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  const getLocalizedPath = (newLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = newLocale;
    return `/${segments.join('/')}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-zinc-400" />
      <div className="flex items-center gap-1">
        <Link
          href={getLocalizedPath('en')}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            currentLocale === 'en'
              ? 'text-accent bg-accent/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          EN
        </Link>
        <span className="text-zinc-600">/</span>
        <Link
          href={getLocalizedPath('ro')}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            currentLocale === 'ro'
              ? 'text-accent bg-accent/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          RO
        </Link>
      </div>
    </div>
  );
}
