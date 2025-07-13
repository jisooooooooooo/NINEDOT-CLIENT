import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const layoutContainer = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  backgroundColor: colors.black01,
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const layoutMain = style({
  flex: 1,
});
