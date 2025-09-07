import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const highlight = style({
  color: colors.white01,
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  marginTop: '3.9rem',
  marginBottom: '5rem',
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  color: colors.white01,
  ...fonts.body02,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const listItemDisabled = style({
  cursor: 'not-allowed',
});

export const checkboxIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
