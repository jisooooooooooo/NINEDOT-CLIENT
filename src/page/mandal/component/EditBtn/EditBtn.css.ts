import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { fonts } from '@/style/token/typography.css';

export const editBtnWrapper = style({
  display: 'flex',
  width: '6.4rem',
  height: '6.4rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  borderRadius: '50%',
  backgroundColor: colors.grey3,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    width: '17.5rem',
    padding: '0 0 0 2.4rem',
    justifyContent: 'space-between',
    borderRadius: '50px',
    backgroundImage: colors.gradient05,
  },
});

export const iconSvg = style({
  width: '4rem',
  height: '4rem',
});

export const editIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  backgroundColor: colors.grey3,
  color: colors.white01,
});

export const editText = style([
  fonts.subtitle05,
  {
    display: 'none',
    color: colors.white01,
  },
  {
    selectors: {
      [`${editBtnWrapper}:hover &`]: {
        display: 'block',
      },
    },
  },
]);
