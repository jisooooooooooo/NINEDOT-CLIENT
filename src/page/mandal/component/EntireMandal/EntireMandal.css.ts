import { style } from '@vanilla-extract/css';

export const entireContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2.5rem',
  margin: '0 auto',
  width: 'fit-content',
  pointerEvents: 'none',
});
