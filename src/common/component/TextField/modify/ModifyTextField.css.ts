import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const inputBase = style({
  display: 'block',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  color: 'inherit',
  textAlign: 'left',
});

const makeBox = (width: string, height: string, padding: string) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width,
  height,
  padding,
  borderRadius: '8px',
});

const subGoalBoxBase = makeBox('62rem', '6.6rem', '1.6rem 2rem');
const todoBoxBase = makeBox('48.5rem', '5.6rem', '1.4rem 2rem');

const subGoalBase = {
  ...subGoalBoxBase,
  border: `3px solid ${colors.gradient04}`,
  background: colors.grey2,
};

export const subGoalBox = style({
  ...subGoalBase,
  ':hover': {
    cursor: 'pointer',
  },
});

const createVariants = (box: object, opts: { borderWidth: string; activeBorderColor: string }) => {
  const { borderWidth, activeBorderColor } = opts;
  const baseDefault = {
    ...box,
    border: `${borderWidth} solid transparent`,
    background: colors.grey4,
  };
  const baseActive = {
    ...box,
    border: `${borderWidth} solid ${activeBorderColor}`,
    background: colors.grey3,
  };
  const baseHoverOrFilled = {
    ...box,
    border: `${borderWidth} solid transparent`,
    background: colors.grey4,
  };
  return {
    default: baseDefault,
    clicked: baseActive,
    typing: { ...baseActive, justifyContent: 'space-between' },
    filled: baseHoverOrFilled,
    hover: { ...baseHoverOrFilled, background: colors.grey3 },
  } as const;
};

export const todoBox = styleVariants(
  createVariants(todoBoxBase, { borderWidth: '2px', activeBorderColor: colors.blue06 }),
);

export const subGoalInput = styleVariants({
  default: [inputBase, fonts.subtitle03, { color: colors.grey6 }],
  hover: [inputBase, fonts.subtitle03, { color: colors.grey11 }],
  clicked: [inputBase, fonts.subtitle03, { color: colors.grey11 }],
  typing: [inputBase, fonts.subtitle03, { color: colors.grey11 }],
  filled: [inputBase, fonts.subtitle03, { color: colors.grey11 }],
});

export const todoInput = styleVariants({
  default: [inputBase, fonts.subtitle03, { color: colors.grey6 }],
  hover: [inputBase, fonts.subtitle03, { color: colors.grey6 }],
  clicked: [inputBase, fonts.subtitle03, { color: colors.grey6 }],
  typing: [inputBase, fonts.subtitle03, { color: colors.grey10 }],
  filled: [inputBase, fonts.subtitle02, { color: colors.grey10 }],
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
});
