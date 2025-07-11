import { style } from '@vanilla-extract/css';
import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const recommendContainer = style({
  display: 'flex',
  width: '40.6rem',
  padding: '2.4rem 2rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: '10px',
  background: colors.grey4,
});

export const recommendItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const recommendText = style({
  display: '-webkit-box',
  width: '33.3rem',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
  overflow: 'hidden',
  color: colors.white01,
  textOverflow: 'ellipsis',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  ...fonts.subtitle05,
});

export const todoContainer = style({
  display: 'flex',
  width: '43.6rem',
  padding: '1.4rem 2rem',
  alignItems: 'center',
  borderRadius: '8px',
  background: colors.grey4,
});

export const todoItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '1 0 0',
});

export const todoText = style({
  color: colors.grey10,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  ...fonts.subtitle02,
});

export const checkboxButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '2.4rem',
  aspectRatio: '1/1',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const checkboxIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  aspectRatio: '1/1',
});
