import { recipe } from '@vanilla-extract/recipes';

import { colors } from '@/style/token';

export const goButtonContainer = recipe({
  base: {
    width: '8rem',
    height: '8rem',
    padding: '2rem',
    border: 'none',
    borderRadius: '1.2rem',
    margin: '2rem',
  },
  variants: {
    state: {
      active: {
        backgroundImage: colors.gradient04,
      },
      disabled: {
        backgroundColor: colors.grey4,
      },
    },
  },
  defaultVariants: {
    state: 'disabled',
  },
});

export const goIcon = recipe({
  variants: {
    state: {
      active: {
        color: colors.grey10,
      },
      disabled: {
        color: colors.grey6,
      },
    },
    defaultVariants: {
      state: 'disabled',
    },
  },
});
