import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/style/token';

export const myTodoBg = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  minHeight: '100vh',
  background: colors.bg_black01,
  zIndex: 0,
});

export const myTodoContainer = style([
  layout.flexColumn,
  {
    position: 'relative',
    zIndex: 1,
    maxWidth: '128rem',
    margin: '0 auto',
    minHeight: '100vh',
    alignItems: 'center',
    width: '100%',
    marginTop: '8.6rem',
    marginBottom: '10rem',
  },
]);

export const contentWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '128rem',
    gap: '8rem',
  },
]);

export const datePickerSection = style([
  layout.rowCenter,
  {
    width: '100%',
  },
]);

export const mainContentWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '100%',
    gap: '11.8rem',
  },
]);

export const recommendSection = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '100%',
    gap: '2.8rem',
  },
]);

export const recommendTextWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    gap: '0.4rem',
  },
]);

export const recommendTitle = style([
  fonts.title01,
  {
    color: colors.white01,
    margin: 0,
  },
]);

export const recommendSubtitle = style([
  fonts.subtitle06,
  {
    color: colors.grey6,
    margin: 0,
    alignSelf: 'stretch',
  },
]);

export const recommendBoxWrapper = style([
  layout.rowCenter,
  {
    background: colors.grey05_32,
    borderRadius: '12px',
    padding: '1.5rem',
    gap: '1.6rem',
    alignSelf: 'stretch',
  },
]);

export const checkSection = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '100%',
    gap: '2.8rem',
  },
]);

export const checkTextWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    gap: '0.4rem',
  },
]);

export const checkTitle = style([
  fonts.title01,
  {
    color: colors.white01,
    margin: 0,
  },
]);

export const checkSubtitle = style([
  fonts.subtitle06,
  {
    color: colors.grey6,
    margin: 0,
    alignSelf: 'stretch',
  },
]);

export const checkMainContainer = style([
  layout.flexColumn,
  {
    background: colors.grey05_32,
    borderRadius: '12px',
    alignItems: 'flex-start',
    height: '67.2rem',
    padding: '2.6rem',
    alignSelf: 'center',
  },
]);

export const todoCheckArea = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '57.1rem',
    minWidth: '57.1rem',
    gap: '2.6rem',
    height: '100%',
    flexShrink: 0,
    boxSizing: 'border-box',
  },
]);

export const selectorChipsContainer = style([
  layout.rowBetween,
  {
    width: '55.2rem',
    alignSelf: 'stretch',
  },
]);

export const todoCheckContainer = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '57.1rem',
    height: '53.8rem',
    gap: '2.4rem',
    alignSelf: 'stretch',
    position: 'relative',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: '1.9rem',
    boxSizing: 'border-box',
  },
]);

export const noScrollTodoCheckContainer = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    width: '57.1rem',
    height: '53.8rem',
    gap: '2.4rem',
    alignSelf: 'stretch',
    paddingRight: '1.9rem',
    boxSizing: 'border-box',
  },
]);

export const todoCheckLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const todoLoadingOverlay = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(18, 18, 18, 0.60)',
  backdropFilter: 'blur(1px)',
  zIndex: 1,
});

export const todoLoadingSpinner = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: `0.4rem solid ${colors.grey3}`,
  borderTopColor: colors.grey10,
  animation: `${spin} 0.8s linear infinite`,
});

export const todoText = styleVariants({
  recommend: [
    fonts.subtitle05,
    {
      width: '33.3rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: colors.grey10,
    },
  ],
  todo: [
    fonts.subtitle02,
    {
      color: colors.grey10,
      textAlign: 'center',
    },
  ],
});

export const emptyTodoBox = style({
  display: 'flex',
  width: '100%',
  height: '53.8rem',
  padding: '25.1rem 9.1rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  borderRadius: '0.8px',
  background: colors.grey4,
  boxSizing: 'border-box',
});

export const emptyTodoText = style([
  fonts.subtitle02,
  {
    color: colors.grey10,
    textAlign: 'center',
  },
]);

export const mandalartWithTodoSection = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '3.7rem',
  width: '100%',
  height: '100%',
  flex: 1,
});

export const mandalartField = style({
  display: 'flex',
  gap: '1.6rem',
  margin: '2rem 0',
});
