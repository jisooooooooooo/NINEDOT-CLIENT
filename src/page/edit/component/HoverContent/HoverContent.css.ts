import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const hoverContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  width: '66.4rem',
  height: '66.4rem',
  backgroundColor: colors.grey05_32,
  borderRadius: '12px',
  alignItems: 'center',
  paddingTop: '2.35rem',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});
