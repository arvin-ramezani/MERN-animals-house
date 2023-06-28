import { Variants } from 'framer-motion';

export const animalCardVariants: Variants = {
  open: {
    rotate: [0, 360, 360, 360],
    y: '-50%',
  },

  // closed: { scale: 1, rotate: [360, 0, 0, 0], y: 0 },
  closed: { scale: 1, rotate: 0, y: 0 },
};
