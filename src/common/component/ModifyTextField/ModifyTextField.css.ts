import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

const subGoalBase = {
  display: 'flex',
  width: '62rem',
  height: '6.6rem',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '0.8rem',
  border: '0.3rem solid transparent',
  ...fonts.subtitle03,
};

const todoBase = {
  display: 'flex',
  width: '48.5rem',
  padding: '1.4rem 2rem',
  alignItems: 'center',
  borderRadius: '0.8rem',
  border: '0.2rem solid transparent',
  ...fonts.subtitle03,
};

export const subGoalBaseClass = style({ ...subGoalBase, textAlign: 'left' as const });
export const todoBaseClass = style({ ...todoBase, textAlign: 'left' as const });

export const inputBase = style({
  display: 'block',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  color: 'inherit',
  ...fonts.subtitle03,
  textAlign: 'inherit',
  '::placeholder': {
    color: colors.grey6,
    ...fonts.subtitle03,
  },
});

export const subGoalVariants = styleVariants({
  filled: {
    ...subGoalBase,
    border: `0.3rem solid ${colors.blue04}`,
    background: colors.grey2,
    color: colors.grey11,
    cursor: 'pointer',
    textAlign: 'left' as const,
  },
  empty: {
    ...subGoalBase,
    border: `0.3rem solid ${colors.blue04}`,
    background: colors.grey2,
    color: colors.grey6,
    cursor: 'pointer',
    textAlign: 'left' as const,
  },
});

export const todoVariants = styleVariants({
  modify_empty: {
    ...todoBase,
    background: colors.grey4,
    color: colors.grey6,
    cursor: 'pointer',
    textAlign: 'left' as const,
  },
  modify_hover: {
    ...todoBase,
    background: colors.grey3,
    color: colors.grey6,
    cursor: 'pointer',
    textAlign: 'left' as const,
  },
  modify_clicked: {
    ...todoBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
    cursor: 'pointer',
    textAlign: 'left' as const,
  },
  modify_typing: {
    ...todoBase,
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
    justifyContent: 'space-between',
    cursor: 'text',
    textAlign: 'left' as const,
  },
  modify_filled: {
    ...todoBase,
    background: colors.grey4,
    color: colors.grey10,
    fontWeight: fonts.subtitle02.fontWeight,
    cursor: 'pointer',
    textAlign: 'left' as const,
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
