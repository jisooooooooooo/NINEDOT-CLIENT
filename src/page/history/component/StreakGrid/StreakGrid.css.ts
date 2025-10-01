import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(3.6rem, 1fr))',
  columnGap: '3rem',
  rowGap: '1.5rem',
  width: '100%',
  maxWidth: '84.6rem',
  padding: '4rem 6rem',
  backgroundColor: colors.grey2,
  borderRadius: '12px',
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
    },
  },
  defaultVariants: {
    clickable: false,
  },
});
