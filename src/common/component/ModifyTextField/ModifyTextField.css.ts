import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

// ====== 공통 base 스타일 ======
const subGoalBase = {
  display: 'flex',
  width: '62rem',
  height: '6.6rem',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '0.8rem',
  border: '0.3rem solid transparent',
  fontFamily: 'Pretendard',
  fontSize: '2.2rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '140%',
};

const todoBase = {
  display: 'flex',
  width: '48.5rem',
  padding: '1.4rem 2rem',
  alignItems: 'center',
  borderRadius: '0.8rem',
  border: '0.2rem solid transparent',
  fontFamily: 'Pretendard',
  fontSize: '2rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '140%',
};

export const subGoalBaseClass = style(subGoalBase);
export const todoBaseClass = style(todoBase);

// ====== 입력 필드 스타일 ======
export const inputBase = style({
  display: 'block',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  textAlign: 'inherit',
  '::placeholder': {
    color: colors.grey6,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  },
});

// ====== 하위 목표 변형 스타일 ======
export const subGoalVariants = styleVariants({
  filled: {
    ...subGoalBase,
    border: `0.3rem solid ${colors.blue04}`,
    background: colors.grey2,
    color: colors.grey11,
    textAlign: 'left',
    cursor: 'pointer',
  },
  empty: {
    ...subGoalBase,
    border: `0.3rem solid ${colors.blue04}`,
    background: colors.grey2,
    color: colors.grey6,
    textAlign: 'left',
    cursor: 'pointer',
  },
});

// ====== 할 일 변형 스타일 ======
export const todoVariants = styleVariants({
  modify_empty: {
    ...todoBase,
    background: colors.grey4,
    color: colors.grey6,
    textAlign: 'left',
    cursor: 'pointer',
  },
  modify_hover: {
    ...todoBase,
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'left',
    cursor: 'pointer',
  },
  modify_clicked: {
    ...todoBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
    textAlign: 'left',
    cursor: 'pointer',
  },
  modify_typing: {
    ...todoBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
    textAlign: 'left',
    justifyContent: 'space-between',
    cursor: 'text',
  },
  modify_filled: {
    ...todoBase,
    background: colors.grey4,
    color: colors.grey10,
    textAlign: 'left',
    fontWeight: 600,
    cursor: 'pointer',
  },
});

// ====== 삭제 버튼 스타일 ======
export const clearButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '2.4rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  flexShrink: 0,
});

// ====== 입력 컨테이너 스타일 ======
export const inputContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '1 0 0',
}); 