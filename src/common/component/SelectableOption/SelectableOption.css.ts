import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const optionItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  color: colors.white01,
  ...fonts.body02,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const optionItemDisabled = style({
  cursor: 'not-allowed',
  opacity: 0.7,
});

export const checkboxIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});
