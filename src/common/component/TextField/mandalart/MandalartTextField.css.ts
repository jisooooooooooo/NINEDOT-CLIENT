import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

const bigGoalBox = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '57.1rem',
  height: '8rem',
  padding: '2rem 3rem',
  borderRadius: '12px',
};

const subGoalBox = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '57.1rem',
  height: '5.6rem',
  padding: '1.4rem 2rem',
  borderRadius: '8px',
};

const todoBox = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '43.6rem',
  height: '5.6rem',
  padding: '1.4rem 2rem',
  borderRadius: '8px',
};

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

const makeInputFont = (font: Record<string, string | number>) =>
  style({
    ...font,
  });

export const inputFontVariants = styleVariants({
  bigGoal: [inputBase, makeInputFont(fonts.title01)],
  subGoal: [inputBase, makeInputFont(fonts.subtitle03)],
  todo: [inputBase, makeInputFont(fonts.subtitle03)],
});

type InputStateOptions = {};

const createInputStateVariants = (_opts?: InputStateOptions) => {
  return styleVariants({
    default: {
      color: colors.grey6,
      textAlign: 'left',
    },
    clicked: {
      color: colors.grey6,
      textAlign: 'left',
    },
    typing: {
      color: colors.grey10,
      textAlign: 'left',
    },
    filled: {
      color: colors.grey10,
      textAlign: 'left',
    },
    hover: {
      color: colors.grey6,
      textAlign: 'left',
    },
  });
};

export const inputStateVariants = {
  bigGoal: createInputStateVariants(),
  subGoal: createInputStateVariants(),
  todo: createInputStateVariants(),
};

type VariantOptions = {
  borderWidth: string;
  activeBorderColor: string;
};

const createVariants = (box: object, opts: VariantOptions) => {
  const { borderWidth, activeBorderColor } = opts;
  const baseDefault: Record<string, unknown> = {
    ...box,
    border: `${borderWidth} solid transparent`,
    background: colors.grey4,
    color: colors.grey6,
  };
  const baseActive: Record<string, unknown> = {
    ...box,
    border: `${borderWidth} solid ${activeBorderColor}`,
    background: colors.grey3,
  };
  const baseHoverOrFilled: Record<string, unknown> = {
    ...box,
    border: `${borderWidth} solid transparent`,
    background: colors.grey4,
  };

  return {
    default: {
      ...baseDefault,
      textAlign: 'left' as const,
    },
    clicked: {
      ...baseActive,
      color: colors.grey6,
      textAlign: 'left' as const,
    },
    typing: {
      ...baseActive,
      color: colors.grey10,
      textAlign: 'left' as const,
      justifyContent: 'space-between' as const,
    },
    filled: {
      ...baseHoverOrFilled,
      color: colors.grey10,
      textAlign: 'left' as const,
    },
    hover: {
      ...box,
      border: `${borderWidth} solid transparent`,
      background: colors.grey3,
      color: colors.grey6,
      textAlign: 'left' as const,
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

export const clearButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3.2rem',
  height: '3.2rem',
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
  width: '2.4rem',
  height: '2.4rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});
