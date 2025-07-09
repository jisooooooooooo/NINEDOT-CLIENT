import { style } from '@vanilla-extract/css';

const baseGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.2rem',
  margin: '0 auto',
};

export const grid = {
  TODO_SUB: style({
    ...baseGrid,
    width: 'fit-content',
    gap: '1rem',
  }),
  TODO_MAIN: style({
    ...baseGrid,
    width: 'fit-content',
    gap: '1.6rem',
  }),
  TODO_EDIT: style({
    ...baseGrid,
    width: 'fit-content',
    gap: '2rem',
  }),
  MY_MANDAL: style({
    ...baseGrid,
    width: 'fit-content',
    gap: '3rem',
  }),
};
