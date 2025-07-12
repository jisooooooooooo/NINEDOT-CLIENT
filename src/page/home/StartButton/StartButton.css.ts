import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

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
