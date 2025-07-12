import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const buttonContainer = style({
  width: '30.4rem',
  height: '4.1rem',
  padding: '0.8rem 1.6rem',
  backgroundColor: colors.blue07,
  border: 'none',
  borderRadius: '8px',
  color: colors.grey11,
  ...fonts.subtitle05,
  textAlign: 'center',
  cursor: 'pointer',
});
