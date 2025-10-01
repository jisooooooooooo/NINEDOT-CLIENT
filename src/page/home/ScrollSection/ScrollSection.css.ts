import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colors, fonts, layout } from '@/style/token';

export const scrollContainer = style({
  height: 'calc(100vh - 8rem)',
});

export const layoutContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '141.5rem',
    margin: '0 auto',
    paddingTop: '26.2rem',

    '@media': {
      '(max-width: 1450px)': {
        paddingInline: '4rem',
      },
    },
  },
  variants: {
    direction: {
      left: {
        flexDirection: 'row',
      },
      right: {
        flexDirection: 'row-reverse',
      },
    },
  },
});

export const titleText = style({
  marginBottom: '1.6rem',
  color: colors.grey10,
  ...fonts.display01,
  whiteSpace: 'pre-line',
});

export const contentText = style({
  color: colors.grey10,
  ...fonts.subtitle04,
  whiteSpace: 'pre-line',
});

export const LottieContainer = style([
  layout.flexCenter,
  {
    width: '90rem',
    height: '52.6rem',
    borderRadius: '30px',
    overflow: 'hidden',
  },
]);

export const lottieSkeleton = style([
  layout.flexCenter,
  {
    backgroundColor: colors.grey3,
    width: '90rem',
    height: '52.6rem',
    borderRadius: '30px',
    overflow: 'hidden',
  },
]);
