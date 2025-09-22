import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/style/token';

export const container = style([
  layout.columnCenter,
  {
    gap: '4rem',
    height: 'calc(100vh - 15rem - 8rem)',
    backgroundColor: colors.grey1,
    textAlign: 'center',
  },
]);

export const title = style([
  fonts.display03,
  {
    color: colors.grey11,
  },
]);

export const button = style([
  fonts.subtitle05,
  {
    width: '19.6rem',
    height: '5.4rem',
    padding: '1.4rem 2rem',
    backgroundColor: colors.blue06,
    borderRadius: '8px',
    color: colors.grey11,
    textAlign: 'center',
  },
]);
