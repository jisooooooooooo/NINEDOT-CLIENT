import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const historyContainer = style({
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  maxWidth: '128rem',
  margin: '0 auto',
});

export const streakTrackerWrapper = style({
  paddingTop: '8rem',
  paddingBottom: '9.8rem',
});

export const streakTitle = style({
  marginBottom: '0.4rem',
  color: colors.white01,
  ...fonts.title01,
});

export const streakDescription = style({
  marginBottom: '2.8rem',
  color: colors.grey6,
  ...fonts.subtitle04,
});
