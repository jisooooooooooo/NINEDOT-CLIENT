import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const highlight = style({
  color: colors.white01,
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  marginTop: '3.9rem',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
