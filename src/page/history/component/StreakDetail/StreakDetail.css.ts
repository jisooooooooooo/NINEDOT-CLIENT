import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const detailContainer = style({
  flexShrink: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '41.4rem',
  padding: '3rem',
  backgroundColor: colors.grey2,
  borderRadius: '12px',
});

export const defaultText = style({
  color: colors.grey8,
  ...fonts.subtitle04,
  textAlign: 'center',
});
