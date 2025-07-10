import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const signUpContainer = style({
  width: '19.6rem',
  height: '5.6rem',
  padding: '1.4rem 2rem',
  color: colors.grey6,
  ...fonts.subtitle05,
});
