import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { fonts, colors } from '@/style/token';

export const cycleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '10.6rem',
  height: '5.6rem',
  padding: '1.4rem 2rem',
  borderRadius: '8px',
  backgroundColor: colors.grey4,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: colors.grey3,
    },
  },
});

export const cycleText = recipe({
  base: {
    ...fonts.subtitle02,
    textAlign: 'center',
  },
  variants: {
    state: {
      default: {
        color: colors.grey10,
      },
      clicked: {
        color: colors.grey6,
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export const dropdownIcon = recipe({
  base: {
    width: '2rem',
    height: '2rem',
  },
  variants: {
    state: {
      default: {
        color: colors.grey10,
        transform: 'rotate(0deg)',
      },
      clicked: {
        color: colors.grey6,
        transform: 'rotate(180deg)',
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export const cycleListContainer = style({
  position: 'relative',
});
