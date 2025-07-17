import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const myTodoBg = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  minHeight: '100vh',
  background: colors.bg_black01,
  zIndex: 0,
});

export const myTodoContainer = style({
  position: 'relative',
  zIndex: 1,
  maxWidth: '128rem',
  margin: '0 auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '8.6rem',
  marginBottom: '10rem',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '128rem',
  gap: '8.6rem', // 헤더-데이트피커 간격 86px
});

export const datePickerSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const mainContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '11.8rem',
});

export const recommendSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '2.8rem',
});

export const recommendTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const recommendTitle = style({
  ...fonts.title01,
  color: colors.white01,
  margin: 0,
});

export const recommendSubtitle = style({
  ...fonts.subtitle06,
  color: colors.grey6,
  margin: 0,
  alignSelf: 'stretch',
});

export const recommendBoxWrapper = style({
  background: colors.grey05_32,
  borderRadius: '12px',
  display: 'flex',
  padding: '1.5rem',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',
  alignSelf: 'stretch',
});

export const checkSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '2.8rem',
});

export const checkTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const checkTitle = style({
  ...fonts.title01,
  color: colors.white01,
  margin: 0,
});

export const checkSubtitle = style({
  ...fonts.subtitle06,
  color: colors.grey6,
  margin: 0,
  alignSelf: 'stretch',
});

export const checkMainContainer = style({
  background: colors.grey05_32,
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '67.2rem',
  padding: '2.6rem 5rem 2.6rem',
  gap: '1rem',
  alignSelf: 'stretch',
});

export const mainContentSection = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.9rem',
  width: '100%',
  height: '100%',
});

export const todoCheckArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '55.2rem',
  minWidth: '55.2rem',
  gap: '2.6rem',
  height: '100%',
  flexShrink: 0,
  paddingRight: '1.9rem',
});

export const selectorChipsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '2.6rem',
});

export const todoCheckContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '57.1rem',
  height: '53.8rem',
  gap: '2.4rem',
  alignSelf: 'stretch',
  overflowY: 'auto',
});

export const noScrollTodoCheckContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '53.8rem',
  gap: '2.4rem',
  alignSelf: 'stretch',
  overflowY: 'hidden',
  paddingRight: '1.9rem',
});

export const todoCheckLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

export const todoText = styleVariants({
  recommend: {
    width: '33.3rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: colors.grey10,
    ...fonts.subtitle05,
  },
  todo: {
    color: colors.grey10,
    textAlign: 'center',
    ...fonts.subtitle02,
  },
});

export const emptyTodoBox = style({
  display: 'flex',
  width: '55.2rem',
  height: '53.8rem',
  padding: '25.1rem 9.1rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  borderRadius: '0.8px',
  background: colors.grey4,
});

export const emptyTodoText = style({
  color: colors.grey10,
  textAlign: 'center',
  ...fonts.subtitle02,
});

export const mandalartWithTodoSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
});

export const mandalartField = style({
  display: 'flex',
  gap: '1.6rem',
  margin: '2rem 0',
});
