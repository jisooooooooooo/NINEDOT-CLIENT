import { style } from '@vanilla-extract/css';

export const layoutContainer = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const layoutMain = style({
  flex: 1,
});
