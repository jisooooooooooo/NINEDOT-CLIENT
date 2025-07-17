import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const editBtnContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '7.4rem',
});

export const editBtnText = style([
  fonts.title05,
  {
    color: colors.grey11,
  },
]);

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '2.4rem',
  height: '2.4rem',
});
