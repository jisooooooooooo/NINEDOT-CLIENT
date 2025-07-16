import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const hoverContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '66.4rem',
  height: '66.4rem',
  backgroundColor: colors.grey05_32,
  borderRadius: '12px',
  alignItems: 'center',
  padding: '1.6rem',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const todoListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
  overflow: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

export const todoInputRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center',
  padding: '0 0.4rem',
});
