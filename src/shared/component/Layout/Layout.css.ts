import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const layoutContainer = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors.black01,
});

export const layoutMain = style({
  flex: 1,
});
