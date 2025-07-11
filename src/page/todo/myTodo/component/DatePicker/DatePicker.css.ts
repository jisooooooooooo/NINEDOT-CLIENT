import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const datePickerContainer = style({
  display: 'flex',
  width: '128rem',
  padding: '1.4rem 2rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  borderRadius: '10px',
  background: colors.grey05_32,
});

export const datePickerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
});

export const dateText = style({
  color: colors.grey11,
  textAlign: 'center',
  ...fonts.subtitle02,
});

export const iconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.8rem',
  height: '2.8rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const iconBase = style({
  width: '2.8rem',
  height: '2.8rem',
});

export const iconActive = style({
  stroke: colors.grey10,
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const iconInactive = style({
  stroke: colors.grey5,
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});
