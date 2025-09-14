import { style } from '@vanilla-extract/css';

import { colors, layout } from '@/style/token';

export const highlight = style({
  color: colors.white01,
});

export const listWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    gap: '2rem',
    marginTop: '3.9rem',
  },
]);

export const buttonWrapper = style([layout.flexCenter]);
