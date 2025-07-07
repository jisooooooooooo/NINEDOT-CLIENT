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
      backgroundColor: colors.grey3, // hover 효과가 있으려면 색상을 바꿔주세요
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
      clicked: {
        color: colors.grey6,
      },
      default: {
        color: colors.grey10,
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
      clicked: {
        color: colors.grey6,
        transform: 'rotate(180deg)',
      },
      default: {
        color: colors.grey10,
        transform: 'rotate(0deg)',
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
