import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { fonts } from '@/style/token/typography.css';

export const footerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '15.1rem',
  padding: '4rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `2px solid ${colors.grey1}`,
  background: colors.black01,
});

export const linkWrapper = style({
  display: 'flex',
  gap: '2.7rem',
  marginBottom: '2rem',
});

export const linkText = style({
  color: colors.grey11,
  ...fonts.caption01,
  cursor: 'pointer',
  textDecoration: 'none',
});

export const infoWrapper = style({
  textAlign: 'center',
});

export const infoText = style({
  color: colors.grey11,
  ...fonts.caption02,
});
