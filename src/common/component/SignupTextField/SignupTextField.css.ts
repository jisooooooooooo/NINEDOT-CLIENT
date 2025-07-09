import { styleVariants, style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const baseClass = style({
  display: 'flex',
  width: '52.2rem',
  height: '5rem',
  padding: '1.4rem 2rem',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '8px',
  border: '2px solid transparent',
  ...fonts.body03,
});

export const fieldVariants = styleVariants({
  default: {
    border: '2px solid transparent',
    background: colors.grey4,
    color: colors.grey6,
  },
  clicked: {
    border: `2px solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
  },
  typing: {
    border: `2px solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
  },
  filled: {
    border: '2px solid transparent',
    background: colors.grey4,
    color: colors.grey10,
  },
  completed: {
    border: '2px solid transparent',
    background: colors.grey4,
    color: colors.grey10,
  },
  locked: {
    border: '2px solid transparent',
    background: colors.grey4,
    color: colors.grey5,
  },
  error: {
    border: `2px solid ${colors.error01}`,
    background: colors.grey4,
    color: colors.grey10,
  },
});

export const inputContent = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
});

export const clearButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const iconClass = style({
  width: '2rem',
  height: '2rem',
  flexShrink: 0,
});

export const lockIconClass = style({
  width: '2rem',
  height: '2rem',
  flexShrink: 0,
});

export const errorMessageWrapper = style({
  display: 'flex',
  width: '52.2rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

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

const makeInputStyle = (font: typeof fonts.body03) =>
  style({
    ...font,
    '::placeholder': {
      color: colors.grey6,
      ...font,
    },
  });

export const inputStyle = makeInputStyle(fonts.body03);

export const errorMessage = style({
  alignSelf: 'stretch',
  color: colors.error01,
  ...fonts.caption02,
});
