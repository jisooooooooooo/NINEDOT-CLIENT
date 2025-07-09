import { style } from '@vanilla-extract/css';

export const layoutContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'auto',
});

export const layoutMain = style({
  flex: 1,
  overflow: 'auto',
});
