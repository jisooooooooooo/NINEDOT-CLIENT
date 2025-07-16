import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const modalContainer = style({
  position: 'absolute',
  top: '8rem',
  right: '8rem',
  width: '32.4rem',
  height: '14.6rem',
  padding: '2rem',
  backgroundColor: colors.grey3,
  borderRadius: '12px',
  color: colors.grey11,
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const profileImage = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '25%',
  objectFit: 'cover',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});
export const nameText = style({
  ...fonts.body01,
});

export const emailText = style({
  ...fonts.body05,
});

export const dividerIcon = style({
  width: '100%',
  padding: '1.8rem 0',
});

export const logoutButton = style({
  ...fonts.body05,
});
