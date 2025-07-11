import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const chipBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  textAlign: 'center',
  ...fonts.subtitle02,
});

export const selectorChip = styleVariants({
  selected: {
    width: '17rem',
    height: '5.6rem',
    padding: '1.4rem 2rem',
    background: colors.gradient04,
    color: colors.grey11,
  },
  deselected: {
    width: '17rem',
    height: '5.6rem',
    padding: '1.4rem 2rem',
    background: colors.grey3,
    color: colors.grey8,
    selectors: {
      '&:hover': {
        background: colors.grey2,
        color: colors.grey8,
      },
    },
  },
});

export const displayChip = style({
  width: '10.6rem',
  padding: '1.4rem 2rem',
  background: colors.grey4,
  color: colors.grey10,
});
