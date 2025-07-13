import { recipe } from '@vanilla-extract/recipes';

export const fadeInUp = recipe({
  base: {
    opacity: 0,
    transform: 'translateY(4rem)',
    transition: 'opacity 1s ease, transform 1s ease',
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
