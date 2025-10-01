import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/style/token';

export const surveyWrapper = style([
  layout.flexColumn,
  {
    gap: '5.4rem',
  },
]);

export const surveyContainer = style([
  layout.flexColumn,
  {
    gap: '1.6rem',
  },
]);

export const surveyTitle = style({
  marginBottom: '0.8rem',
  color: colors.grey11,
  ...fonts.body01,
});
