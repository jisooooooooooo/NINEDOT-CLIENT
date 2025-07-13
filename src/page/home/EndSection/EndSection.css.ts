import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const endContainer = style({
  height: 'calc(100vh - 8rem)',
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  height: '100%',
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
