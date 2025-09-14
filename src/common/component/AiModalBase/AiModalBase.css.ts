import { style } from '@vanilla-extract/css';

import { colors, fonts, zIndex, layout } from '@/style/token';

export const container = style({
  display: 'inline-flex',
  padding: '4rem',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  background: colors.grey3,
  zIndex: zIndex.modal,
});

export const iconWrapper = style([
  layout.rowCenter,
  {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
]);

export const closeIcon = style({
  width: '3.2rem',
  height: '3.2rem',
  cursor: 'pointer',
});

export const closeButton = style([
  layout.flexCenter,
  {
    width: '3.2rem',
    height: '3.2rem',
    display: 'inline-flex',
    background: 'transparent',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
]);

export const contentWrapper = style([
  layout.flexColumn,
  {
    width: '55.6rem',
    padding: '0 9.5rem',
  },
]);

export const textWrapper = style([layout.flexColumn, { alignItems: 'center' }]);

export const title = style([
  fonts.display02,
  {
    color: colors.grey11,
    textAlign: 'center',
  },
]);

export const description = style([
  fonts.subtitle06,
  {
    color: colors.grey7,
    textAlign: 'center',
    marginTop: '0.9rem',
  },
]);

export const failDescription = style({
  marginTop: '1.6rem',
});

export const footerWrapper = style([layout.flexCenter, { marginTop: '5rem' }]);
