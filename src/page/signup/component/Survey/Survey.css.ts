import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const surveyWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5.4rem',
});

export const surveyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const surveyTitle = style({
  marginBottom: '0.8rem',
  color: colors.grey11,
  ...fonts.body01,
});
