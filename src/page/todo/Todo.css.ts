import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { fonts } from '@/style/token/typography.css';

export const todoContainer = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.bg_black01,
});

export const todoTitle = style({
  color: colors.white01,
  ...fonts.display01,
  textAlign: 'center',
  marginBottom: '5.6rem',
});
