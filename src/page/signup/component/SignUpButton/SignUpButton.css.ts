import { recipe } from '@vanilla-extract/recipes';

import { colors, fonts } from '@/style/token';

export const signUpContainer = recipe({
  base: {
    width: '19.6rem',
    height: '5.6rem',
    padding: '1.4rem 2rem',
    borderRadius: '8px',
    ...fonts.subtitle05,
    textAlign: 'center',
  },
  variants: {
    state: {
      active: {
        backgroundColor: colors.blue06,
        color: colors.grey11,
        cursor: 'pointer',
      },
      disabled: {
        backgroundColor: colors.grey4,
        color: colors.grey6,
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    state: 'disabled',
  },
});
