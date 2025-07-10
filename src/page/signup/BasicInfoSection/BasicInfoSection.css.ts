import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const TextFieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',
  maxWidth: '63rem',
});

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

export const jobContainer = style({
  gap: '0',
});
