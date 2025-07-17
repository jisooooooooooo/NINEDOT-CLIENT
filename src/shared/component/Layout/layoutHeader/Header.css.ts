import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';
import { zIndex } from '@/style/token/zIndex.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: zIndex.layout,
  width: '100%',
  backgroundColor: colors.bg_black01,
  display: 'flex',
  justifyContent: 'center',
});

export const headerInner = style({
  width: '100%',
  padding: '2.8rem 8rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '8rem',
  position: 'relative',
});

export const logoImage = style({
  position: 'absolute',
  top: '2.8rem',
  left: '8rem',
  height: '2.4rem',
  flexShrink: 0,
});

export const navWrapper = style({
  display: 'flex',
  gap: '2rem',
});

export const navItem = style({
  display: 'flex',
  padding: '1.2rem 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  color: colors.grey6,
  textAlign: 'center',
  ...fonts.subtitle05,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'color 0.2s',
  selectors: {
    '&:hover': {
      color: colors.grey7,
    },
  },
});

export const navItemActive = style({
  color: `${colors.grey11}`,
  selectors: {
    '&:hover': {
      color: `${colors.grey11}`,
    },
  },
});

export const active = style({
  color: colors.grey11,
});

export const profilePlaceholder = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  backgroundColor: colors.grey6,
  flexShrink: 0,
});

export const loginButton = style({
  color: colors.grey11,
  textAlign: 'center',
  ...fonts.subtitle05,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s',
  selectors: {
    '&:hover': {
      color: colors.grey7,
    },
  },
});
