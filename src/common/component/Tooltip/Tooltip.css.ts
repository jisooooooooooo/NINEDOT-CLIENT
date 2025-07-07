import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const tooltipContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.4rem',
  width: '24.5rem',
  height: '4.5rem',
  padding: '1rem 1.6rem',
  backgroundColor: colors.blue07,
  borderRadius: '8px',
  position: 'relative',
});

export const tooltipText = style({
  color: colors.grey11,
  ...fonts.subtitle06,
});

export const closeIcon = style({
  width: '2rem',
  height: '2rem',
});

export const triangleIcon = style({
  width: '1.4rem',
  height: '1.3rem',
  position: 'absolute',
  bottom: '1%',
  left: '50%',
  transform: 'translate(-50%, 100%)',
});
