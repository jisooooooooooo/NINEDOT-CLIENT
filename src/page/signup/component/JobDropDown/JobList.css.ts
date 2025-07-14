import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colors, fonts, zIndex } from '@/style/token';

export const listContainer = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '52.2rem',
  height: '24rem',
  backgroundColor: colors.grey2,
  borderRadius: '8px',
  overflowY: 'auto',
  overflowX: 'hidden',
  cursor: 'pointer',
  zIndex: zIndex.dropdown,
  top: '5rem',
});

export const listItem = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '5rem',
  padding: '1.4rem 2rem',
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
        ...fonts.body01,
        color: colors.grey10,
      },
      default: {
        ...fonts.body03,
        color: colors.grey6,
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
