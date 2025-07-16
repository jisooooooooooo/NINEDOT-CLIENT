import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const upperTodoContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.bg_black01,
  position: 'relative',
  overflow: 'hidden',
});

export const upperTodoBoxWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  width: '128rem',
});

// 상위 할 일 헤더
export const upperTodoHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '8.7rem',
  marginBottom: '1.8rem',
});

export const upperTodoHeaderLeft = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
});

export const upperTodoHeaderTitle = style({
  color: colors.grey11,
  ...fonts.title02,
  margin: 0,
});

export const upperTodoHeaderGoal = style({
  color: colors.grey11,
  ...fonts.display02,
  marginRight: '0.4rem',
});

export const aiAssistWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '3rem',
  alignSelf: 'flex-end',
});

export const aiAssistTooltip = style({
  marginRight: 'calc((100% - 24.5rem) / 2)',
});

const aiAssistBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '8px',
  textAlign: 'center' as const,
  alignSelf: 'flex-end',
  whiteSpace: 'nowrap',
  ...fonts.body02,
};

export const aiAssistButton = styleVariants({
  active: {
    ...aiAssistBase,
    cursor: 'pointer',
    color: colors.grey11,
  },
  inactive: {
    ...aiAssistBase,
    cursor: 'not-allowed',
    color: colors.grey11_10,
  },
});

// 상위 할 일 박스
export const upperTodoBox = style({
  width: '128rem',
  height: '67.2rem',
  padding: '2.6rem',
  flexShrink: 0,
  borderRadius: '12px',
  background: 'rgba(65, 69, 76, 0.32)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '2rem',
});

export const textFieldColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  flexShrink: 0,
  justifyContent: 'center',
});

// 만다르트 완성 버튼
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

const mandalTextBase = {
  ...fonts.subtitle02,
};

export const mandalCompleteText = styleVariants({
  active: {
    ...mandalTextBase,
    color: colors.grey11,
  },
  inactive: {
    ...mandalTextBase,
    color: colors.grey3,
  },
});

const mandalIconBase = {
  width: '2.4rem',
  height: '2.4rem',
  flexShrink: 0,
};

export const mandalCompleteIcon = styleVariants({
  active: {
    ...mandalIconBase,
    color: colors.grey11,
  },
  inactive: {
    ...mandalIconBase,
    color: colors.grey3,
  },
});
