import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

const SECTION_GAP = '2.4rem';
const TEXT_WRAPPER_GAP = '0.4rem';
const CONTAINER_WIDTH = '128rem';
const GREY_BACKGROUND = colors.grey05_32;
const BORDER_RADIUS_LARGE = '16px';

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
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: CONTAINER_WIDTH,
  gap: '8rem',
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
  gap: SECTION_GAP,
});

export const recommendTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: TEXT_WRAPPER_GAP,
});

export const recommendTitle = style({
  ...fonts.display02,
  color: colors.white01,
  margin: 0,
});

export const recommendSubtitle = style({
  ...fonts.body01,
  color: colors.grey9,
  margin: 0,
  alignSelf: 'stretch',
});

export const recommendBoxWrapper = style({
  background: GREY_BACKGROUND,
  borderRadius: BORDER_RADIUS_LARGE,
  display: 'flex',
  padding: '1.5rem',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  alignSelf: 'stretch',
});

export const checkSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: SECTION_GAP,
});

export const checkTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: TEXT_WRAPPER_GAP,
});

export const checkTitle = style({
  ...fonts.display02,
  color: colors.white01,
  margin: 0,
});

export const checkSubtitle = style({
  ...fonts.body01,
  color: colors.grey9,
  margin: 0,
});

export const checkMainContainer = style({
  background: GREY_BACKGROUND,
  borderRadius: BORDER_RADIUS_LARGE,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '67.2rem',
  padding: '2.6rem',
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

export const rightGap = style({
  width: '1.9rem',
  minWidth: '1.9rem',
  flexShrink: 0,
});

export const mandalartWithTodoSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3.7rem',
  flex: 1,
});

export const todoCheckArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '55.2rem',
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
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '53.8rem',
  gap: SECTION_GAP,
  alignSelf: 'stretch',
  overflowY: 'auto',
  paddingRight: '1.9rem',
});

export const todoCheckLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});
