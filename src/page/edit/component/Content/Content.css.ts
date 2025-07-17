import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '128rem',
  position: 'relative',
  isolation: 'isolate',
});

export const mandalartSection = style({
  width: '56.4rem',
  height: '66.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const hoverContentSection = style({
  width: '66.4rem',
  height: '66.4rem',
  position: 'relative',
});

export const hoverGuideContainer = style({
  width: '100%',
  height: '100%',
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
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.grey05_32,
  borderRadius: '12px',
});

export const loadingContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '200px',
});
