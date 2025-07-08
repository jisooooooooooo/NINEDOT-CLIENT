import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const squareContainer = style({
  display: 'grid',
  margin: '0 auto',
});

const baseCellDefault = style({
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

const baseCellSmall = style({
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '16rem',
  height: '16rem',
  boxSizing: 'border-box',
});

export const mainCellDefault = style([
  baseCellDefault,
  fonts.title03,
  {
    color: colors.white01,
    backgroundImage: colors.gradient04,
  },
]);

export const mainCellSmall = style([
  baseCellSmall,
  fonts.subtitle01,
  {
    color: colors.white01,
    backgroundImage: colors.gradient04,
    padding: '1.4rem',
  },
]);

export const subCellDefault = style([
  baseCellDefault,
  fonts.subtitle01,
  {
    color: colors.grey8,
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

export const subCellSmall = style([
  baseCellSmall,
  fonts.subtitle05,
  {
    color: colors.grey8,
    background: colors.grey2,
    ':hover': {
      background: colors.grey3,
    },
    selectors: {
      '&[data-completed="true"]': {
        border: '0.3rem solid #305088',
        background: colors.grey2,
      },
    },
  },
]);
