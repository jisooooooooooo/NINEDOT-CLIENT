import { keyframes, style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';
import { createRadialGradient } from '@/page/home/util/createRadialGradient';

export const startContainer = style({
  height: 'calc(100vh - 8rem)',
  backgroundColor: colors.bg_black01,
  position: 'relative',
});

export const gradientBlue = style({
  position: 'absolute',
  top: '-7rem',
  right: '-10rem',
  width: '105.7rem',
  height: '105.7rem',
  borderRadius: '105.7px',
  background: createRadialGradient('50, 95, 236', 0.3),
});

export const gradientGreen = style({
  position: 'absolute',
  bottom: '-5rem',
  right: '47rem',
  width: '70.1rem',
  height: '71.1rem',
  borderRadius: '71.1px',
  background: createRadialGradient('59, 255, 160', 0.7),
  opacity: 0.2,
});

export const vectorLine = style({
  position: 'absolute',
  top: '3rem',
  right: '-12rem',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
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

const scrollBounce = keyframes({
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(8px)' },
  '100%': { transform: 'translateY(0)' },
});

export const scrollContainer = style({
  position: 'absolute',
  bottom: '4.2rem',
  right: '50%',
  transform: 'translate(50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  animation: `${scrollBounce} 1.8s ease-in-out infinite`,
});

export const scrollIcon = style({
  width: '2rem',
  height: '2rem',
});

export const scrollText = style({
  color: colors.grey9,
  ...fonts.body03,
});
