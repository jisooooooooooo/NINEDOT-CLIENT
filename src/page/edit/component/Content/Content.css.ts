import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '128rem',
});

export const hoverGuideContainer = style({
  width: '66.4rem',
  height: '66.4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.grey05_32,
  borderRadius: '12px',
});

export const hoverGuideText = style([
  fonts.title05,
  {
    color: colors.grey11,
    textAlign: 'center',
  },
]);

export const todoMainContainer = style({
  width: '66.4rem',
  height: '66.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.grey05_32,
  borderRadius: '12px',
});
