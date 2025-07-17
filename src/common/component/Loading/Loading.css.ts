import { style } from '@vanilla-extract/css';

import { colors, fonts, zIndex } from '@/style/token';

export const loadingOverlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(18, 18, 18, 0.70)',
  backdropFilter: 'blur(2px)',
  zIndex: zIndex.modal,
});

export const loadingContainer = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  width: '63.6rem',
  height: '64.7rem',
  backgroundColor: colors.grey3,
  borderRadius: '16px',
});

export const loadingLottie = style({
  width: '10rem',
  height: '10rem',
});

export const loadingText = style({
  color: colors.grey11,
  ...fonts.title04,
  textAlign: 'center',
});
