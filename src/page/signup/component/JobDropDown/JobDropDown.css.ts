import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { fonts, colors } from '@/style/token';

export const dropdownContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const jobContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '52.2rem',
  height: '5rem',
  padding: '1.4rem 2rem',
  border: `1px solid ${colors.grey4}`,
  borderRadius: '8px',
  backgroundColor: colors.grey4,
  cursor: 'pointer',
});

export const jobText = recipe({
  base: {
    ...fonts.body03,
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

export const etcContainer = style({
  position: 'absolute',
  top: '6.6rem',
});
