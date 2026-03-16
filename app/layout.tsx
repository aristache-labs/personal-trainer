import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://elitetrainer.com'),
  title: 'Elite Trainer - Elite Personal Training',
  description: 'Transform your body with elite personal training. Evidence-based programs, personalised nutrition, and expert guidance for real, sustainable results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
