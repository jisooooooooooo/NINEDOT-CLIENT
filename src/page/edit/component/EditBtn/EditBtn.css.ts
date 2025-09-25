import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const editBtnContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '7.4rem',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const editBtnText = style([
  fonts.title05,
  {
    color: colors.grey11,
    selectors: {
      'button:disabled &': {
        color: colors.grey05_32,
      },
    },
  },
]);

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '2.4rem',
  height: '2.4rem',
});
