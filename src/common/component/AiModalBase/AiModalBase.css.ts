import { style } from '@vanilla-extract/css';

import { colors, fonts, zIndex } from '@/style/token';

export const container = style({
  display: 'inline-flex',
  padding: '4rem',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  background: colors.grey3,
  zIndex: zIndex.modal,
});

export const iconWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignSelf: 'flex-end',
});

export const closeIcon = style({
  width: '3.2rem',
  height: '3.2rem',
  cursor: 'pointer',
});

export const contentWrapper = style({
  width: '55.6rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 9.5rem',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  color: colors.grey11,
  textAlign: 'center',
  ...fonts.display02,
});

export const description = style({
  color: colors.grey7,
  textAlign: 'center',
  ...fonts.subtitle06,
  marginTop: '0.9rem',
});

export const failDescription = style({
  marginTop: '1.6rem',
});

export const footerWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5rem',
});
