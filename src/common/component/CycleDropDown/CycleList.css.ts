import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colors, fonts, zIndex } from '@/style/token';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '13.2rem',
  backgroundColor: colors.grey2,
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'pointer',
  zIndex: zIndex.dropdown,
});

export const listItem = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '5.6rem',
  padding: '1.4em 2rem',
  borderBottom: `solid 1px ${colors.grey3}`,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: colors.grey1,
    },
  },
});

export const listText = recipe({
  variants: {
    state: {
      selected: {
        ...fonts.subtitle01,
        color: colors.grey10,
      },
      default: {
        ...fonts.subtitle03,
        color: colors.grey6,
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
