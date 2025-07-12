import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const startContainer = style({
  height: '100vh',
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  padding: '0 25.2rem',
  paddingTop: '21.8rem',
  paddingBottom: '30rem',
});

export const titleText = style({
  marginBottom: '2.6rem',
  color: colors.grey10,
  ...fonts.display04,
});

export const contentText = style({
  marginBottom: '6.8rem',
  color: colors.grey10,
  ...fonts.title02,
});
