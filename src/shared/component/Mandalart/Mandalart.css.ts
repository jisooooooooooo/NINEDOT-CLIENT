import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.6rem',
  width: 'fit-content',
});
