import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

const makeBox = (width: string, height: string, padding: string, borderRadius: string) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width,
  height,
  padding,
  borderRadius,
});

const bigGoalBox = makeBox('57.1rem', '8rem', '2rem 3rem', '12px');
const subGoalBox = makeBox('57.1rem', '5.6rem', '1.4rem 2rem', '8px');
const todoBox = makeBox('43.6rem', '5.6rem', '1.4rem 2rem', '8px');

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

const makeInputFont = (font: Record<string, string | number>) =>
  style({
    ...font,
  });

export const inputFontVariants = styleVariants({
  bigGoal: [inputBase, makeInputFont(fonts.title01)],
  subGoal: [inputBase, makeInputFont(fonts.subtitle03)],
  todo: [inputBase, makeInputFont(fonts.subtitle03)],
});

const createInputStateVariants = () => {
  return styleVariants({
    default: {
      color: colors.grey6,
    },
    clicked: {
      color: colors.grey6,
    },
    typing: {
      color: colors.grey10,
    },
    filled: {
      color: colors.grey10,
    },
    hover: {
      color: colors.grey6,
    },
  });
};

const commonInputStateVariants = createInputStateVariants();

export const inputStateVariants = {
  bigGoal: commonInputStateVariants,
  subGoal: commonInputStateVariants,
  todo: commonInputStateVariants,
};

type VariantOptions = {
  borderWidth: string;
  activeBorderColor: string;
};

const createVariants = (box: object, opts: VariantOptions) => {
  const { borderWidth, activeBorderColor } = opts;
  return {
    default: {
      ...box,
      border: `${borderWidth} solid transparent`,
      background: colors.grey4,
    },
    clicked: {
      ...box,
      border: `${borderWidth} solid ${activeBorderColor}`,
      background: colors.grey3,
    },
    typing: {
      ...box,
      border: `${borderWidth} solid ${activeBorderColor}`,
      background: colors.grey3,
      justifyContent: 'space-between',
    },
    filled: {
      ...box,
      border: `${borderWidth} solid transparent`,
      background: colors.grey4,
    },
    hover: {
      ...box,
      border: `${borderWidth} solid transparent`,
      background: colors.grey3,
    },
  };
};

export const bigGoalVariants = styleVariants(
  createVariants(bigGoalBox, {
    borderWidth: '3px',
    activeBorderColor: colors.grey5,
  }),
);

export const subGoalVariants = styleVariants(
  createVariants(subGoalBox, {
    borderWidth: '2px',
    activeBorderColor: colors.blue06,
  }),
);

export const todoVariants = styleVariants(
  createVariants(todoBox, {
    borderWidth: '2px',
    activeBorderColor: colors.blue06,
  }),
);

const makeIconButton = (size: string) =>
  style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  });

export const clearButton = makeIconButton('3.2rem');
export const clearButtonSmall = makeIconButton('2.4rem');
