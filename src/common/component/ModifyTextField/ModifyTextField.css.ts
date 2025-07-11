import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

const leftAligned = { textAlign: 'left' as const };

const subGoalBase = {
  display: 'flex',
  width: '62rem',
  height: '6.6rem',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '8px',
  border: '3px solid transparent',
  fontSize: '2.2rem',
  fontWeight: 600,
  lineHeight: '140%',
  fontFamily: 'Pretendard',
  ...leftAligned,
};

const todoBase = {
  display: 'flex',
  width: '48.5rem',
  padding: '1.4rem 2rem',
  alignItems: 'center',
  borderRadius: '8px',
  border: '2px solid transparent',
  ...fonts.subtitle03,
  ...leftAligned,
};

export const subGoalBaseClass = style({ ...subGoalBase });
export const todoBaseClass = style({ ...todoBase });

export const inputBase = style({
  display: 'block',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  color: 'inherit',
  textAlign: 'inherit',
  '::placeholder': {
    color: colors.grey6,
  },
});

export const subGoalVariants = styleVariants({
  filled: {
    ...subGoalBase,
    border: `3px solid ${colors.blue04}`,
    background: colors.grey2,
    color: colors.grey11,
    cursor: 'pointer',
  },
  empty: {
    ...subGoalBase,
    border: `3px solid ${colors.blue04}`,
    background: colors.grey2,
    color: colors.grey6,
    cursor: 'pointer',
  },
});

export const todoVariants = styleVariants({
  modify_empty: {
    ...todoBase,
    background: colors.grey4,
    color: colors.grey6,
    cursor: 'pointer',
  },
  modify_hover: {
    ...todoBase,
    background: colors.grey3,
    color: colors.grey6,
    cursor: 'pointer',
  },
  modify_clicked: {
    ...todoBase,
    border: `2px solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
    cursor: 'pointer',
  },
  modify_typing: {
    ...todoBase,
    border: `2px solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
    justifyContent: 'space-between',
  },
  modify_filled: {
    ...todoBase,
    background: colors.grey4,
    color: colors.grey10,
    fontWeight: 600,
    cursor: 'pointer',
  },
});

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

export const inputContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '1 0 0',
});
