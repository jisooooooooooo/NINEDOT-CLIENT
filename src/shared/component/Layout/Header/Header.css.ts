import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const header = style({
  width: '100%',
  backgroundColor: colors.bg_black01,
  display: 'flex',
  justifyContent: 'center',
});

export const headerInner = style({
  width: '100%',
  maxWidth: '90rem',
  padding: '0.94rem 5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logo = style({
  color: colors.white01,
  ...fonts.subtitle05,
});

export const navWrapper = style({
  display: 'flex',
  gap: '1.25rem',
});

export const navItem = style({
  display: 'flex',
  padding: '0.75rem 1.25rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  color: '#5A5E66', // 추후 토큰 색상으로 변경
  textAlign: 'center',
  ...fonts.subtitle05,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'color 0.2s',
});

export const active = style({
  color: '#FDFDFD',
});

export const profilePlaceholder = style({
  width: '3.125rem',
  height: '3.125rem',
  borderRadius: '50%',
  backgroundColor: '#5A5E66', // 추후 토큰 색상으로 변경
  flexShrink: 0,
});
