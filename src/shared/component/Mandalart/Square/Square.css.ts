import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const squareContainer = style({
  display: 'grid',
  gap: '1rem',
  padding: '1rem',
  margin: '0 auto',
});

const baseCell = style({
  color: colors.white01,
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '19.6rem',
  height: '19.6rem',
  boxSizing: 'border-box',
});

export const mainCell = style([
  baseCell,
  fonts.title03,
  {
    backgroundImage: colors.gradient04,
  },
]);

export const subCell = style([
  baseCell,
  fonts.subtitle01,
  {
    background: colors.grey2,
    ':hover': {
      background: colors.grey3,
    },
    selectors: {
      '&[data-completed="true"]': {
        border: '0.4rem solid #305088',
        background: colors.grey2,
      },
    },
  },
]);
