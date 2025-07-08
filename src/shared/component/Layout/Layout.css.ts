import { style } from '@vanilla-extract/css';

export const layoutContainer = style({
  height: '100vh',
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
  minHeight: 'calc(100vh - 200px)',
});

export const footer = style({
  padding: '2rem',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
  borderTop: '1px solid #e0e0e0',
});
