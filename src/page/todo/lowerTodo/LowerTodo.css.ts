import { style, styleVariants } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/style/token';

export const lowerTodoContainer = style([
  layout.columnCenter,
  {
    height: '100%',
    backgroundColor: colors.bg_black01,
    position: 'relative',
    overflow: 'hidden',
  },
]);

export const lowerTodoBoxWrapper = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    position: 'relative',
    width: '128rem',
  },
]);

export const lowerTodoHeader = style([
  layout.rowBetween,
  {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: '8.7rem',
    marginBottom: '1.8rem',
  },
]);

export const lowerTodoHeaderLeft = style([
  layout.flexColumn,
  {
    alignItems: 'flex-start',
    gap: '0.4rem',
  },
]);

export const lowerTodoHeaderTitle = style([
  fonts.title02,
  {
    color: colors.grey11,
    margin: 0,
  },
]);

export const lowerTodoHeaderGoal = style([
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

export const lowerTodoBox = style([
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

export const todoWritingSection = style([
  layout.flexColumn,
  {
    gap: '2.9rem',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
]);

export const smallMandalartContainer = style([
  layout.flexCenter,
  {
    flexShrink: 0,
  },
]);

export const smallMandalartGrid = style([
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '1.6rem',
    width: 'fit-content',
  },
]);

export const todoInputFields = style([
  layout.flexColumn,
  {
    gap: '2.4rem',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'visible',
    paddingRight: '1.9rem',
  },
]);

export const todoFieldWrapper = style([
  layout.rowCenter,
  {
    gap: '1rem',
    width: '100%',
  },
]);

export const dropdownWrapper = style([
  {
    flexShrink: 0,
  },
]);

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
