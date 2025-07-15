import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const modalContainer = style({
  position: 'fixed',
  top: '44.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5rem',
  width: '63rem',
  height: '34.2rem',
  padding: '3rem',
  backgroundColor: colors.grey1,
  borderRadius: '16px',
});

export const iconWrapper = style({
  marginLeft: 'auto',
});

export const closeIcon = style({
  width: '3.2rem',
  height: '3.2rem',
  cursor: 'pointer',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

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
