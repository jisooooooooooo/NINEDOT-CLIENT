import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { fonts } from '@/style/token/typography.css';

export const editBtnWrapper = style({
  position: 'relative',
  display: 'flex',
  width: '17.5rem',
  height: '6.4rem',
  padding: '0',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  borderRadius: '50px',
  backgroundColor: colors.grey3,
  cursor: 'pointer',
  clipPath: 'circle(3.2rem at 14.3rem 3.2rem)',
  transition: 'clip-path 0.3s ease',
  ':hover': {
    backgroundImage: colors.gradient05,
    clipPath: 'circle(100% at center)',
  },
});

export const iconSvg = style({
  width: '4rem',
  height: '4rem',
});

export const editIcon = style({
  position: 'absolute',
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '6.4rem',
  height: '6.4rem',
  borderRadius: '50%',
  backgroundColor: colors.grey3,
  color: colors.white01,
  zIndex: 1,
});

export const editText = style([
  fonts.subtitle05,
  {
    position: 'absolute',
    left: '2.4rem',
    visibility: 'hidden',
    color: colors.white01,
    whiteSpace: 'nowrap',
    selectors: {
      [`${editBtnWrapper}:hover &`]: {
        visibility: 'visible',
      },
    },
  },
]);
