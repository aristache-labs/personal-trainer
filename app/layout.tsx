import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://elitetrainer.com'),
  title: 'Elite Trainer - Personal Training & Online Coaching',
  description: 'Transform your body with elite personal training and online coaching. Evidence-based programs, personalized nutrition, and expert guidance for sustainable results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
