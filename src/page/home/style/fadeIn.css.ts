import { recipe } from '@vanilla-extract/recipes';

export const fadeInUp = recipe({
  base: {
    opacity: 0,
    transform: 'translateY(4rem)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  },
  variants: {
    visible: {
      true: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
});
