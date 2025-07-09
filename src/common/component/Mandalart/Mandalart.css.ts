import { style } from '@vanilla-extract/css';

export const gridDefault = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.6rem',
  width: 'fit-content',
  margin: '0 auto',
});

export const gridSmall = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  width: 'fit-content',
  margin: '0 auto',
});
