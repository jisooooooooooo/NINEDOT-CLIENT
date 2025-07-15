import { style } from '@vanilla-extract/css';

const baseGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.2rem',
  width: 'fit-content',
};

export const grid = {
  TODO_SUB: style({
    ...baseGrid,
    gap: '0.5rem',
  }),
  TODO_MAIN: style({
    ...baseGrid,
    gap: '1.6rem',
  }),
  TODO_EDIT: style({
    ...baseGrid,
    gap: '2rem',
  }),
  MY_MANDAL: style({
    ...baseGrid,
    gap: '2.5rem',
  }),
  MY_MANDAL_CENTER: style({
    ...baseGrid,
    gap: '1rem',
  }),
};
