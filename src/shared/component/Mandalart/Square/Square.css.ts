import { style } from '@vanilla-extract/css';
import { colors, fonts } from '@/style/token';

export const squareContainer = style({
  display: 'grid',
  gap: '1rem',
  padding: '1rem',
  margin: '0 auto',
});

const baseCell = style([
  fonts.title03,
  {
    color: colors.white01,
    borderRadius: '0.8rem',
    padding: '1.6rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '19.6rem',
    height: '19.6rem',
    boxSizing: 'border-box',
  },
]);

export const mainCell = style([
  baseCell,
  {
    backgroundImage: colors.gradient04,
  },
]);

export const subCell = style([
  baseCell,
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

export const wrapper = style({
  display: 'flex',
  gap: '1.6rem',
});
