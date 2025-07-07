import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const tooltipContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  position: 'relative',
  width: '24.5rem',
  padding: '1rem 1.6rem',
  borderRadius: '8px',
  whiteSpace: 'nowrap',
  backgroundColor: colors.blue07,
  boxShadow: `0px 0px 16px 0px ${colors.blue07}`,
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
  bottom: '0.1rem',
  left: '50%',
  transform: 'translate(-50%, 100%)',
});
