import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(11, 1fr)',
  gap: '3rem',
  padding: '4rem 6rem',
  backgroundColor: colors.grey2,
  borderRadius: '8px',
});

export const dotIcon = recipe({
  base: {
    width: '3.6rem',
    height: '3.6rem',
  },
  variants: {
    clickable: {
      true: {
        cursor: 'pointer',
      },
      false: {},
    },
  },
  defaultVariants: {
    clickable: false,
  },
});
