import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const lowerTodoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.bg_black01,
  position: 'relative',
  overflow: 'visible',
});

export const lowerTodoBoxWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  width: '128rem',
});

export const lowerTodoHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '8.7rem',
  marginBottom: '1.8rem',
});

export const lowerTodoHeaderLeft = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const lowerTodoHeaderTitle = style({
  color: colors.grey11,
  ...fonts.title02,
  margin: 0,
});

export const lowerTodoHeaderGoal = style({
  color: colors.grey11,
  ...fonts.display02,
  marginRight: '0.4rem',
});

export const aiAssistWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '8.7rem',
});

export const tooltipBox = style({
  marginBottom: '1.2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const aiAssistBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '8px',
  textAlign: 'center',
  alignSelf: 'flex-end',
  whiteSpace: 'nowrap',
  fontFamily: 'Pretendard',
  fontSize: fonts.body02.fontSize,
  fontStyle: 'normal',
  fontWeight: fonts.body02.fontWeight,
  lineHeight: fonts.body02.lineHeight,
});

export const aiAssistTooltip = style({
  position: 'absolute',
  bottom: 'calc(100% + 2.5rem)',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const aiAssistButton = styleVariants({
  active: [
    aiAssistBase,
    {
      cursor: 'pointer',
      color: colors.grey11,
    },
  ],
  inactive: [
    aiAssistBase,
    {
      cursor: 'not-allowed',
      color: colors.grey2,
    },
  ],
});

export const btn_ai_write_inactivation = [
  aiAssistBase,
  {
    cursor: 'not-allowed',
    color: colors.grey11_10,
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: fonts.body02.fontSize,
    fontStyle: 'normal',
    fontWeight: fonts.body02.fontWeight,
    lineHeight: fonts.body02.lineHeight,
    background: colors.grey4,
    opacity: 0.7,
  },
];

export const lowerTodoBox = style({
  display: 'flex',
  height: '67.2rem',
  padding: '2.6rem',
  alignItems: 'center',
  gap: '3.7rem',
  alignSelf: 'stretch',
  borderRadius: '12px',
  background: colors.grey05_32,
  overflow: 'visible',
});

export const mainGoalSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const subGoalAndTodoSection = style({
  display: 'flex',
  alignItems: 'flex-end',
  flex: 1,
  height: '100%',
  gap: '1.9rem',
});

export const subGoalSection = style({
  display: 'flex',
  width: '55.2rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.9rem',
  flexShrink: 0,
});

export const scrollerSection = style({
  width: '2rem',
  height: '28.3rem',
  flexShrink: 0,
});

export const todoWritingSection = style({
  display: 'flex',
  height: '28.3rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.4rem',
  alignSelf: 'stretch',
  overflowY: 'auto',
  overflowX: 'visible',
  paddingRight: '1.9rem',
});

export const todoFieldWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  height: '5.6rem',
  position: 'relative',
  flexShrink: 0,
});

export const dropdownWrapper = style({
  position: 'relative',
  width: '10.6rem',
  height: '5.6rem',
  flexShrink: 0,
});

export const mandalCompleteBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.6rem',
  marginTop: '2.4rem',
  marginBottom: '5rem',
  alignSelf: 'flex-end',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

const mandalTextBase = style({
  ...fonts.subtitle02,
});

export const mandalCompleteText = styleVariants({
  active: [
    mandalTextBase,
    {
      color: colors.grey11,
    },
  ],
  inactive: [
    mandalTextBase,
    {
      color: colors.grey2,
    },
  ],
});

const mandalIconBase = style({
  width: '2.4rem',
  height: '2.4rem',
  flexShrink: 0,
});

export const mandalCompleteIcon = styleVariants({
  active: [
    mandalIconBase,
    {
      color: colors.grey11,
    },
  ],
  inactive: [
    mandalIconBase,
    {
      color: colors.grey2,
    },
  ],
});
