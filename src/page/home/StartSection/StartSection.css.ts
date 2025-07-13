import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const startContainer = style({
  height: 'calc(100vh - 8rem)',
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  maxWidth: '141.5rem',
  margin: '0 auto',
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
