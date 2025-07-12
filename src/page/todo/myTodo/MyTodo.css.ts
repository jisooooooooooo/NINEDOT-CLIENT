import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const myTodoContainer = style({
  minHeight: '100vh',
  background: colors.bg_black01,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem 2rem',
});

export const contentWrapper = style({
  display: 'flex',
  width: '128rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8rem',
});

export const datePickerSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const mainContentWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '11.8rem',
});

export const recommendSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.4rem',
  width: '100%',
});

export const recommendTextWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const recommendTitle = style({
  color: colors.white01,
  ...fonts.title01,
});

export const recommendSubtitle = style({
  alignSelf: 'stretch',
  color: colors.grey6,
  ...fonts.subtitle06,
});

export const recommendBoxWrapper = style({
  display: 'flex',
  padding: '1.5rem',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  alignSelf: 'stretch',
  borderRadius: '16px',
  background: colors.grey05_32,
});

export const checkSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.4rem',
  width: '100%',
});

export const checkTextWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const checkTitle = style({
  color: colors.white01,
  ...fonts.title01,
});

export const checkSubtitle = style({
  color: colors.grey6,
  ...fonts.subtitle06,
});

export const checkMainContainer = style({
  display: 'flex',
  height: '67.2rem',
  padding: '2.6rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  alignSelf: 'stretch',
  borderRadius: '12px',
  background: colors.grey05_32,
});

export const mainContentSection = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.9rem',
  width: '100%',
  height: '100%',
});

export const mandalartWithTodoSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3.7rem',
  flex: 1,
});

export const todoCheckArea = style({
  display: 'flex',
  width: '55.2rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.9rem',
  height: '100%',
});

export const selectorChipsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const todoCheckContainer = style({
  display: 'flex',
  height: '53.8rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.4rem',
  alignSelf: 'stretch',
  overflowY: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const todoCheckLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

export const customScrollbarContainer = style({
  width: '0.8rem',
  height: '53.8rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignSelf: 'flex-end',
});

export const customScrollbarTrack = style({
  width: '0.8rem',
  height: '100%',
  background: colors.grey11_10,
  borderRadius: '4px',
  position: 'relative',
});

export const customScrollbarThumb = style({
  width: '0.8rem',
  height: '20%',
  background: colors.grey7,
  borderRadius: '4px',
  position: 'absolute',
  top: '0',
  cursor: 'pointer',
  ':hover': {
    background: colors.grey8,
  },
});
