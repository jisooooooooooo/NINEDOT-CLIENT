import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '3.6rem',
  width: '30rem',
  height: '6rem',
  borderRadius: '8px',
  backgroundColor: colors.grey3,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: colors.grey4,
    },
  },
});

export const googleIcon = style({
  width: '2rem',
  height: '2rem',
});

export const loginText = style({
  color: colors.white01,
  ...fonts.subtitle06,
});
