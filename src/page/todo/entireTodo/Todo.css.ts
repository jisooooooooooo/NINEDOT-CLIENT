import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/style/token';

export const todoContainer = style({
  ...layout.columnCenter,
  height: '100vh',
  backgroundColor: colors.bg_black01,
  position: 'relative',
});

export const todoTitle = style({
  ...fonts.display01,
  color: colors.white01,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: '5.6rem',
  position: 'relative',
  height: '15.2rem',
});

export const todoInputContainer = style({
  ...layout.rowCenter,
  gap: '2rem',
  position: 'relative',
});
