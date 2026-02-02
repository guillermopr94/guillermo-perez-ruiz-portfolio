import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'fadeIn'
    | 'slideUp'
    | 'slideLeft'
    | 'slideRight'
    | 'scale'
    | 'stagger';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for premium feel
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Elastic-like easing
      },
    },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  variant = 'slideUp',
  delay = 0,
  duration,
  once = true,
}) => {
  const variants = animationVariants[variant];

  // Apply custom delay and duration if provided
  const customVariants =
    duration || delay
      ? {
          ...variants,
          visible: {
            ...variants.visible,
            transition: {
              ...((variants.visible as { transition?: object }).transition ||
                {}),
              delay,
              ...(duration && { duration }),
            },
          },
        }
      : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: '-100px' }}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
