import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const startContainer = style({
  height: '100vh',
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  padding: '0 25.2rem',
  paddingTop: '21.8rem',
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

export const startButton = style({
  padding: '1.6rem 6.4rem',
  backgroundColor: colors.grey2,
  border: `2px solid ${colors.blue08}`,
  borderRadius: '8px',
  color: colors.grey10,
  ...fonts.display02,

  selectors: {
    '&:hover': {
      backgroundColor: colors.grey1,
    },
  },
});
