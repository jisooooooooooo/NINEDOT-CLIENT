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
  position: 'relative',
  overflow: 'hidden',
});

export const todoTitle = style({
  color: colors.white01,
  ...fonts.display01,
  textAlign: 'center',
  marginBottom: '5.6rem',
  position: 'relative',
  zIndex: 1,
  height: '15.2rem',
});

export const todoInputContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  position: 'relative',
});
