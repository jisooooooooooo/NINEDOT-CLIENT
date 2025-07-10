import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { fonts } from '@/style/token/typography.css';

export const toggleWrapper = style({
  display: 'flex',
  width: '16rem',
  height: '4.2rem',
  borderRadius: '0.8rem',
  backgroundColor: colors.grey3,
});

export const toggleButton = style([
  fonts.body01,
  {
    display: 'flex',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white01,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  },
]);

const activeButtonBase = style({
  backgroundImage: colors.gradient05,
});

export const leftActiveButton = style([
  activeButtonBase,
  {
    borderRadius: '8px 0 0 8px',
  },
]);

export const rightActiveButton = style([
  activeButtonBase,
  {
    borderRadius: '0 8px 8px 0',
  },
]);
