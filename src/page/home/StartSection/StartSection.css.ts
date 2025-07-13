import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const startContainer = style({
  height: 'calc(100vh - 8rem)',
  backgroundColor: colors.bg_black01,
  position: 'relative',
});

export const gradientBlue = style({
  position: 'absolute',
  top: '2.1rem',
  right: '3.3rem',
  width: '105.7rem',
  height: '105.7rem',
  borderRadius: '105.7px',
  background:
    'radial-gradient(50% 50% at 50% 50%, rgba(50, 95, 236, 0.30) 0%, rgba(50, 95, 236, 0.00) 100%)',
  filter: 'blur(4rem)',
});

export const gradientGreen = style({
  position: 'absolute',
  bottom: '1.7rem',
  right: '51.9rem',
  width: '70.1rem',
  height: '71.1rem',
  borderRadius: '71.1px',
  background:
    'radial-gradient(50% 50% at 50% 50%, rgba(59, 255, 160, 0.70) 0%, rgba(59, 255, 160, 0.00) 100%)',
  filter: 'blur(4rem)',
  opacity: 0.2,
});

export const vectorLine = style({
  position: 'absolute',
  top: '10rem',
  right: 0,
  width: '100%',
  height: '100%',
});

export const layoutContainer = style({
  maxWidth: '141.5rem',
  margin: '0 auto',
  paddingTop: '21.8rem',
  paddingBottom: '30rem',
});

export const titleText = style({
  marginBottom: '2.6rem',
  color: colors.grey10,
  ...fonts.display04,
});

export const contentText = style({
  marginBottom: '6.8rem',
  color: colors.grey10,
  ...fonts.title02,
});
