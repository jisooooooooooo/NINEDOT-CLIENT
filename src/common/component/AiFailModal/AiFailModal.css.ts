import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const modalContainer = style({
  display: 'inline-flex',
  padding: '4rem',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  background: colors.grey3,
});

export const contentWrapper = style({
  width: '55.6rem',
  display: 'flex',
  flexDirection: 'column',
});

export const iconWrapper = style({
  marginLeft: 'auto',
});

export const closeIcon = style({
  width: '3.2rem',
  height: '3.2rem',
  cursor: 'pointer',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
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
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5rem',
});
