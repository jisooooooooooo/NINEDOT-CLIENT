// fadeTransition.css.ts
import { recipe } from '@vanilla-extract/recipes';

export const fadeSlide = recipe({
  base: {
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  },
  variants: {
    state: {
      in: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      out: {
        opacity: 0,
        transform: 'translateY(4rem)',
      },
    },
  },
});
