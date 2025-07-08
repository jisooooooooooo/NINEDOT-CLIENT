import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

// ====== 공통 base 스타일 ======
const bigGoalBase = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '57.1rem',
  height: '8rem',
  borderRadius: '1.2rem',
  padding: '2rem 3rem',
  fontFamily: 'Pretendard',
  fontSize: fonts.title01.fontSize,
  fontWeight: fonts.title01.fontWeight,
  lineHeight: fonts.title01.lineHeight,
};
const subGoalBase = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '57.1rem',
  height: '5.6rem',
  borderRadius: '0.8rem',
  padding: '1.4rem 2rem',
  fontFamily: 'Pretendard',
  fontSize: fonts.subtitle03.fontSize,
  fontWeight: fonts.subtitle03.fontWeight,
  lineHeight: fonts.subtitle03.lineHeight,
};
const todoBase = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '43.6rem',
  height: '5.6rem',
  borderRadius: '0.8rem',
  padding: '1.4rem 2rem',
  fontFamily: 'Pretendard',
  fontSize: fonts.subtitle03.fontSize,
  fontWeight: fonts.subtitle03.fontWeight,
  lineHeight: fonts.subtitle03.lineHeight,
};

export const bigGoalBaseClass = style(bigGoalBase);
export const subGoalBaseClass = style(subGoalBase);
export const todoBaseClass = style(todoBase);

export const inputBase = style({
  display: 'block',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  color: 'inherit',
});

const makeInputStyle = (font: any) =>
  style({
    fontFamily: 'Pretendard',
    ...font,
    '::placeholder': {
      color: colors.grey6,
      fontFamily: 'Pretendard',
      ...font,
    },
  });
export const inputBigGoal = makeInputStyle(fonts.title01);
export const inputSubGoal = makeInputStyle(fonts.subtitle03);
export const inputTodo = makeInputStyle(fonts.subtitle03);

export const bigGoalVariants = styleVariants({
  default: {
    ...bigGoalBase,
    border: '0.3rem solid transparent',
    background: colors.grey4,
    color: colors.grey6,
    textAlign: 'left',
  },
  clicked: {
    ...bigGoalBase,
    border: `0.3rem solid ${colors.grey5}`,
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'left',
  },
  typing: {
    ...bigGoalBase,
    border: `0.3rem solid ${colors.grey5}`,
    background: colors.grey3,
    color: colors.grey10,
    textAlign: 'left',
    justifyContent: 'space-between',
  },
  filled: {
    ...bigGoalBase,
    border: '0.3rem solid transparent',
    background: colors.grey4,
    color: colors.grey10,
    textAlign: 'center',
  },
  hover: {
    ...bigGoalBase,
    border: '0.3rem solid transparent',
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'center',
  },
});

export const subGoalVariants = styleVariants({
  default: {
    ...subGoalBase,
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey6,
    textAlign: 'center',
  },
  clicked: {
    ...subGoalBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'center',
  },
  typing: {
    ...subGoalBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
    textAlign: 'left',
    justifyContent: 'space-between',
  },
  filled: {
    ...subGoalBase,
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey10,
    textAlign: 'center',
    fontWeight: 600,
  },
  hover: {
    ...subGoalBase,
    border: '0.2rem solid transparent',
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'center',
  },
});

export const todoVariants = styleVariants({
  default: {
    ...todoBase,
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey6,
    textAlign: 'center',
  },
  clicked: {
    ...todoBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'center',
  },
  typing: {
    ...todoBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
    textAlign: 'left',
    justifyContent: 'space-between',
  },
  filled: {
    ...todoBase,
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey10,
    textAlign: 'center',
    fontWeight: 600,
  },
  hover: {
    ...todoBase,
    border: '0.2rem solid transparent',
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'center',
  },
});

const CLEAR_BUTTON_SIZE = '3.2rem';
const CLEAR_BUTTON_SMALL_SIZE = '2.4rem';
export const clearButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: CLEAR_BUTTON_SIZE,
  height: CLEAR_BUTTON_SIZE,
  aspectRatio: '1/1',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});
export const clearButtonSmall = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: CLEAR_BUTTON_SMALL_SIZE,
  height: CLEAR_BUTTON_SMALL_SIZE,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});
