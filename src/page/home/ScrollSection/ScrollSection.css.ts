import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const scrollContainer = style({
  height: 'calc(100vh - 8rem)',
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '141.5rem',
  margin: '0 auto',
  paddingTop: '26.2rem',
});

export const titleText = style({
  marginBottom: '1.6rem',
  color: colors.grey10,
  ...fonts.display01,
});

export const contentText = style({
  color: colors.grey10,
  ...fonts.subtitle04,
});

export const sectionContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90rem',
  height: '52.6rem',
  borderRadius: '30px',
  backgroundColor: '#D9D9D9',
  color: colors.black01_70,
  ...fonts.display01,
});
