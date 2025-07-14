import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const contentContainer = style({
  width: '128rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const hoverGuideContainer = style({
  display: 'flex',
  width: '66.4rem',
  height: '66.4rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.grey05_32,
  borderRadius: '12px',
});

export const hoverGuideText = style([
  fonts.title05,
  {
    color: colors.grey10,
    textAlign: 'center',
  },
]);
