import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '../style/token/color.css.ts';
import { fonts } from '../style/token/typography.css.ts';

const baseButton = style({
  display: 'inline-block',
  cursor: 'pointer',
  border: 0,
  borderRadius: '3em',
  fontFamily: "'Pretendard', sans-serif",
  transition: 'all 0.2s ease-in-out',

  ':hover': {
    transform: 'translateY(-2px)',
  },
});

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      backgroundColor: colors.blue05,
      color: colors.white01,

      ':hover': {
        backgroundColor: colors.blue01,
      },
    },
  ],
  secondary: [
    baseButton,
    {
      boxShadow: `${colors.black01}15 0px 0px 0px 1px inset`,
      backgroundColor: 'transparent',
      color: colors.black01,

      ':hover': {
        backgroundColor: colors.blue01,
      },
    },
  ],
});

export const buttonSizes = styleVariants({
  small: {
    ...fonts.caption01,
    padding: '1rem 1.6rem',
  },
  medium: {
    ...fonts.body03,
    padding: '1.1rem 2rem',
  },
  large: {
    ...fonts.body01,
    padding: '1.2rem 2.4rem',
  },
});
