import { style } from '@vanilla-extract/css';

export const layoutContainer = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const layoutMain = style({
  flex: 1,
});
