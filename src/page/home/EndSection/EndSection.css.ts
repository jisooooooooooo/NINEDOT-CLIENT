import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const endContainer = style({
  height: '100vh',
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '9.4rem',
});

export const endText = style({
  color: colors.white01,
  ...fonts.display01,
  textAlign: 'center',
});
