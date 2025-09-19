import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/style/token';

export const upperTodoContainer = style([
  layout.columnCenter,
  {
    height: '100%',
    backgroundColor: colors.bg_black01,
    position: 'relative',
    overflow: 'hidden',
  },
]);

export const upperTodoBoxWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    position: 'relative',
    width: '128rem',
  },
]);

// 상위 할 일 헤더
export const upperTodoHeader = style([
  layout.rowBetween,
  {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: '8.7rem',
    marginBottom: '1.8rem',
  },
]);

export const upperTodoHeaderLeft = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    gap: '0.4rem',
  },
]);

export const upperTodoHeaderTitle = style([
  fonts.title02,
  {
    color: colors.grey11,
    margin: 0,
  },
]);

export const upperTodoHeaderGoal = style([
  fonts.display02,
  {
    color: colors.grey11,
    marginRight: '0.4rem',
  },
]);

export const aiAssistWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-end',
    gap: '3rem',
    alignSelf: 'flex-end',
  },
]);

export const aiAssistTooltip = style([
  {
    marginRight: 'calc((10% - 25rem) / 2)',
  },
]);

const aiAssistBase = {
  ...layout.flexCenter,
  ...fonts.body02,
  border: 'none',
  borderRadius: '8px',
  textAlign: 'center' as const,
  alignSelf: 'flex-end',
  whiteSpace: 'nowrap',
};

export const aiAssistButton = styleVariants({
  active: { ...aiAssistBase, cursor: 'pointer', color: colors.grey11 },
  inactive: { ...aiAssistBase, cursor: 'not-allowed', color: colors.grey11_10 },
});

// 상위 할 일 박스
export const upperTodoBox = style([
  {
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
  },
]);

export const textFieldColumn = style([
  layout.flexColumn,
  {
    gap: '2.4rem',
    flexShrink: 0,
    justifyContent: 'center',
  },
]);

// 만다르트 완성 버튼
export const mandalCompleteBox = style([
  layout.rowCenter,
  {
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
  },
]);

const mandalTextBase = { ...fonts.subtitle02 };

export const mandalCompleteText = styleVariants({
  active: { ...mandalTextBase, color: colors.grey11 },
  inactive: { ...mandalTextBase, color: colors.grey3 },
});

const mandalIconBase = {
  width: '2.4rem',
  height: '2.4rem',
  flexShrink: 0,
};

export const mandalCompleteIcon = styleVariants({
  active: { ...mandalIconBase, color: colors.grey11 },
  inactive: { ...mandalIconBase, color: colors.grey3 },
});
