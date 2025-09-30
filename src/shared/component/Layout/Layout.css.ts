import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const layoutContainer = style({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  overflowX: 'hidden',
  minHeight: '100vh',

  backgroundColor: colors.black01,
});

export const layoutMain = style({
  flex: 1,
});
