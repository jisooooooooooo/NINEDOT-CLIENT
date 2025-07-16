import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';
import { createRadialGradient } from '@/page/home/util/createRadialGradient';

export const endContainer = style({
  height: 'calc(100vh - 8rem)',
  backgroundColor: colors.bg_black01,
  position: 'relative',
});

export const gradientBackground = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '97.8rem',
  height: '97.8rem',
  borderRadius: '97.8rem',
  filter: 'blur(4rem)',
  background: createRadialGradient('50, 95, 236', 0.3),
});

export const fadeContainer = style({
  height: '100%',
});

export const layoutContainer = style({
  position: 'relative',
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
