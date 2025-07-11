import { style } from '@vanilla-extract/css';

export const entireContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  margin: '0 auto',
  width: 'fit-content',
});
