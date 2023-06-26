import { Variants } from 'framer-motion';

export const animalCardSkeletonVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const AnimalsListShimmerVariants: Variants = {
  initial: {
    x: -100,
    rotate: 12,
  },
  animate: {
    x: 700,
    rotate: 12,

    transition: { duration: 1.5, repeat: Infinity, repeatDelay: 1 },
  },
};
