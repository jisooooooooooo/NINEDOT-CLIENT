import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

// 상위목표 기본 스타일
export const textFieldBase = style({
  display: 'flex',
  width: '57.1rem',
  height: '8rem',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '1.2rem',
  ...fonts.title01,
});

// 하위목표 기본 스타일
export const subGoalBase = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0.8rem',
  ...fonts.subtitle03,
  width: '57.1rem',
  height: '5.6rem',
});

// 할 일 기본 스타일
export const todoBase = style([subGoalBase, { width: '43.6rem' }]);

// 상위목표 상태별 스타일
export const bigGoalVariants = styleVariants({
  default: [
    textFieldBase,
    {
      background: colors.grey4,
      color: colors.grey6,
      padding: '2rem 3rem',
    },
  ],
  clicked: [
    textFieldBase,
    {
      border: `0.3rem solid ${colors.grey5}`,
      background: colors.grey3,
      color: colors.grey6,
      padding: '2rem 3rem',
    },
  ],
  typing: [
    textFieldBase,
    {
      border: `0.3rem solid ${colors.grey5}`,
      background: colors.grey3,
      color: colors.grey10,
      justifyContent: 'space-between',
      padding: '2rem 3rem',
    },
  ],
  filled: [
    textFieldBase,
    {
      background: colors.grey4,
      color: colors.grey10,
      padding: '2rem 3rem',
    },
  ],
  hover: [
    textFieldBase,
    {
      background: colors.grey3,
      color: colors.grey6,
      padding: '2rem 3rem',
    },
  ],
});

// 하위목표 상태별 스타일
export const subGoalVariants = styleVariants({
  default: [
    subGoalBase,
    {
      background: colors.grey4,
      color: colors.grey6,
      textAlign: 'left',
      padding: '1.4rem 2rem',
    },
  ],
  clicked: [
    subGoalBase,
    {
      border: `0.2rem solid ${colors.blue06}`,
      background: colors.grey3,
      color: colors.grey6,
      textAlign: 'left',
      padding: '1.4rem 2rem',
    },
  ],
  typing: [
    subGoalBase,
    {
      border: `0.2rem solid ${colors.blue06}`,
      background: colors.grey3,
      color: colors.grey10,
      justifyContent: 'space-between',
      textAlign: 'left',
      padding: '1.4rem 2rem',
    },
  ],
  filled: [
    subGoalBase,
    {
      background: colors.grey4,
      color: colors.grey10,
      textAlign: 'left',
      ...fonts.subtitle02,
      padding: '1.4rem 2rem',
    },
  ],
  hover: [
    subGoalBase,
    {
      background: colors.grey3,
      color: colors.grey6,
      textAlign: 'left',
      padding: '1.4rem 2rem',
    },
  ],
});

// 할 일 상태별 스타일
export const todoVariants = styleVariants({
  default: [todoBase, subGoalVariants.default],
  clicked: [todoBase, subGoalVariants.clicked],
  typing: [todoBase, subGoalVariants.typing],
  filled: [todoBase, subGoalVariants.filled],
  hover: [todoBase, subGoalVariants.hover],
});

// 입력 필드 기본 스타일
export const inputBase = style({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
  width: '100%',
  height: '100%',
  '::placeholder': {
    color: 'inherit',
  },
});

// 삭제 버튼 스타일
export const clearButton = style({
  width: '3.2rem',
  height: '3.2rem',
  aspectRatio: '1/1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const clearButtonSmall = style({
  width: '2.4rem',
  height: '2.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});
