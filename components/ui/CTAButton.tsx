'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary:
    'bg-accent text-black hover:bg-accent/90',
  secondary:
    'bg-surface-light border border-border text-white hover:bg-surface hover:border-accent/40',
  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-black',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const hoverAnimations = {
  primary: {
    scale: 1.03,
    boxShadow: '0 4px 24px rgba(163, 230, 53, 0.45)',
  },
  secondary: {
    scale: 1.02,
    boxShadow: '0 4px 16px rgba(255,255,255,0.05)',
  },
  outline: {
    scale: 1.03,
    boxShadow: '0 4px 20px rgba(163, 230, 53, 0.3)',
  },
};

export default function CTAButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  size = 'md',
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? {} : hoverAnimations[variant]}
        whileTap={disabled ? {} : { scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : hoverAnimations[variant]}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
}
