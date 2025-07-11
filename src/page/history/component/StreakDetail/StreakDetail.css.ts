import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const detailContainer = recipe({
  base: {
    width: '41.4rem',
    backgroundColor: colors.grey2,
    borderRadius: '12px',
  },
  variants: {
    state: {
      empty: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      filled: {
        padding: '3rem',
      },
    },
  },
  defaultVariants: {
    state: 'empty',
  },
});

export const defaultText = style({
  color: colors.grey8,
  ...fonts.subtitle04,
  textAlign: 'center',
});

export const dayText = style({
  marginRight: '1.2rem',
  color: colors.grey11,
  ...fonts.subtitle01,
});

export const todoCount = style({
  color: colors.blue04,
  ...fonts.subtitle01,
});

export const todoList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginTop: '2.4rem',
  color: colors.grey11,
  ...fonts.body03,
});
