import { style } from '@vanilla-extract/css';

import { layout } from '@/style/token';

export const TextFieldContainer = style([
  layout.flexColumn,
  {
    gap: '2.8rem',
    maxWidth: '63rem',
  },
]);
