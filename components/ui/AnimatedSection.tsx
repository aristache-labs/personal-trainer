'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

const directionMap = {
  up:    { initial: { opacity: 0, y: 40 },    animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -40 },   animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 },    animate: { opacity: 1, x: 0 } },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { initial, animate } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
