import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const itemContainer = style({
  display: 'flex',
  gap: '1.2rem',
  cursor: 'pointer',
});

export const itemText = style({
  color: colors.grey11,
  ...fonts.body03,
});

export const defaultIcon = style({
  width: '2rem',
  height: '2rem',
});

export const checkedIcon = style({
  width: '2rem',
  height: '2rem',
});
