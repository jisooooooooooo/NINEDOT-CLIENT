import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const inputContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const labelContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.4rem',
  paddingTop: '1.5rem',
  color: colors.grey11,
  ...fonts.body04,
});
