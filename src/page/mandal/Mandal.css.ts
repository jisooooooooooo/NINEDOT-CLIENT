import { style } from '@vanilla-extract/css';

export const viewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8.7rem',
  marginBottom: '10.8rem',
  gap: '7.3rem',
});

export const entireContainer = style({
  display: 'grid',
  width: '95.4rem',
  height: '95.4rem',
  rowGap: '3rem',
  columnGap: '3rem',
  alignSelf: 'center',
  gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
});
