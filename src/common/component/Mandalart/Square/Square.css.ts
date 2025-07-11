import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const squareContainer = style({
  display: 'grid',
  margin: '0 auto',
});

const SQUARE_TYPES = {
  TODO_SUB: {
    width: '9.6rem',
    height: '9.6rem',
    padding: '0.6rem',
    mainFont: fonts.body04,
    subFont: fonts.caption01,
  },
  TODO_MAIN: {
    width: '19.6rem',
    height: '19.6rem',
    padding: '1.4rem',
    mainFont: fonts.title03,
    subFont: fonts.subtitle01,
  },
  TODO_EDIT: {
    width: '16rem',
    height: '16rem',
    padding: '1.2rem',
    mainFont: fonts.subtitle01,
    subFont: fonts.subtitle05,
  },
  MY_MANDAL: {
    width: '29.8rem',
    height: '29.8rem',
    padding: '4.4rem',
    mainFont: fonts.display02,
    subFont: fonts.title01,
  },
} as const;

const createBaseCell = (type: keyof typeof SQUARE_TYPES) =>
  style({
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: SQUARE_TYPES[type].width,
    height: SQUARE_TYPES[type].height,
    padding: SQUARE_TYPES[type].padding,
    boxSizing: 'border-box',
  });

export const mainCell = {
  TODO_SUB: style([
    createBaseCell('TODO_SUB'),
    SQUARE_TYPES.TODO_SUB.mainFont,
    {
      color: colors.white01,
      backgroundImage: colors.gradient04,
    },
  ]),
  TODO_MAIN: style([
    createBaseCell('TODO_MAIN'),
    SQUARE_TYPES.TODO_MAIN.mainFont,
    {
      color: colors.white01,
      backgroundImage: colors.gradient04,
    },
  ]),
  TODO_EDIT: style([
    createBaseCell('TODO_EDIT'),
    SQUARE_TYPES.TODO_EDIT.mainFont,
    {
      color: colors.white01,
      backgroundImage: colors.gradient04,
    },
  ]),
  MY_MANDAL: style([
    createBaseCell('MY_MANDAL'),
    SQUARE_TYPES.MY_MANDAL.mainFont,
    {
      color: colors.white01,
      backgroundImage: colors.gradient05,
    },
  ]),
};

export const subCell = {
  TODO_SUB: style([
    createBaseCell('TODO_SUB'),
    SQUARE_TYPES.TODO_SUB.subFont,
    {
      color: colors.grey8,
      background: colors.grey3,
      ':hover': {
        background: colors.grey2,
      },
    },
  ]),
  TODO_MAIN: style([
    createBaseCell('TODO_MAIN'),
    SQUARE_TYPES.TODO_MAIN.subFont,
    {
      color: colors.grey8,
      background: colors.grey3,
      ':hover': {
        background: colors.grey2,
      },
      selectors: {
        '&[data-completed="true"]': {
          border: '0.4rem solid #305088',
          background: colors.grey2,
        },
      },
    },
  ]),
  TODO_EDIT: style([
    createBaseCell('TODO_EDIT'),
    SQUARE_TYPES.TODO_EDIT.subFont,
    {
      color: colors.grey8,
      background: colors.grey3,
      ':hover': {
        background: colors.grey2,
      },
      selectors: {
        '&[data-completed="true"]': {
          border: '0.3rem solid #305088',
          background: colors.grey2,
        },
      },
    },
  ]),
  MY_MANDAL: style([
    createBaseCell('MY_MANDAL'),
    SQUARE_TYPES.MY_MANDAL.subFont,
    {
      color: colors.white01,
      backgroundImage: colors.gradient04,
    },
  ]),
};
