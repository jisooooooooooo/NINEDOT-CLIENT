import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const introContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
  height: 'calc(100vh - 15rem - 8rem)',
  backgroundColor: colors.grey1,
});

export const introText = style({
  color: colors.grey11,
  ...fonts.display03,
  textAlign: 'center',
});

export const buttonContainer = style({
  width: '19.6rem',
  height: '5.4rem',
  padding: '1.4rem 2rem',
  backgroundColor: colors.blue06,
  borderRadius: '8px',
  color: colors.grey11,
  ...fonts.subtitle05,
  textAlign: 'center',
});
