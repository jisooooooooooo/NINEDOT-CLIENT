import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

// ====== 공통 베이스 스타일 ======
const textFieldBase = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  boxSizing: 'border-box',
});

const textFieldBigGoalBase = style([
  textFieldBase,
  {
    width: '57.1rem',
    height: '8rem',
    borderRadius: '1.2rem',
  },
]);

const textFieldSubGoalBase = style([
  textFieldBase,
  {
    width: '57.1rem',
    height: '5.6rem',
    borderRadius: '0.8rem',
    ...fonts.subtitle03,
  },
]);

const textFieldTodoBase = style([
  textFieldSubGoalBase,
  { width: '43.6rem' },
]);

// ====== 상태별 스타일 ======
const getStateStyle = (base: string, border: string, background: string, color: string, padding: string, extra?: object) => [
  base,
  {
    border,
    background,
    color,
    padding,
    ...extra,
  },
];

export const bigGoalVariants = styleVariants({
  default: getStateStyle(textFieldBigGoalBase, '0.3rem solid transparent', colors.grey4, colors.grey6, '2rem 3rem'),
  clicked: getStateStyle(textFieldBigGoalBase, `0.3rem solid ${colors.grey5}`, colors.grey3, colors.grey6, '2rem 3rem'),
  typing: getStateStyle(textFieldBigGoalBase, `0.3rem solid ${colors.grey5}`, colors.grey3, colors.grey10, '2rem 3rem', { justifyContent: 'space-between' }),
  filled: getStateStyle(textFieldBigGoalBase, '0.3rem solid transparent', colors.grey4, colors.grey10, '2rem 3rem'),
  hover: getStateStyle(textFieldBigGoalBase, '0.3rem solid transparent', colors.grey3, colors.grey6, '2rem 3rem'),
});

export const subGoalVariants = styleVariants({
  default: getStateStyle(textFieldSubGoalBase, '0.2rem solid transparent', colors.grey4, colors.grey6, '1.4rem 2rem', { textAlign: 'left' }),
  clicked: getStateStyle(textFieldSubGoalBase, `0.2rem solid ${colors.blue06}`, colors.grey3, colors.grey6, '1.4rem 2rem', { textAlign: 'left' }),
  typing: getStateStyle(textFieldSubGoalBase, `0.2rem solid ${colors.blue06}`, colors.grey3, colors.grey10, '1.4rem 2rem', { textAlign: 'left', justifyContent: 'space-between' }),
  filled: getStateStyle(textFieldSubGoalBase, '0.2rem solid transparent', colors.grey4, colors.grey10, '1.4rem 2rem', { textAlign: 'left', ...fonts.subtitle02 }),
  hover: getStateStyle(textFieldSubGoalBase, '0.2rem solid transparent', colors.grey3, colors.grey6, '1.4rem 2rem', { textAlign: 'left' }),
});

export const todoVariants = styleVariants({
  default: [textFieldTodoBase, subGoalVariants.default],
  clicked: [textFieldTodoBase, subGoalVariants.clicked],
  typing: [textFieldTodoBase, subGoalVariants.typing],
  filled: [textFieldTodoBase, subGoalVariants.filled],
  hover: [textFieldTodoBase, subGoalVariants.hover],
});

// ====== 입력 필드 스타일 ======
export const inputBase = style({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
  width: '100%',
  height: '100%',
  '::placeholder': {
    color: 'inherit',
  },
});

// ====== 삭제 버튼 스타일 ======
const CLEAR_BUTTON_SIZE = '3.2rem';
const CLEAR_BUTTON_SMALL_SIZE = '2.4rem';

export const clearButton = style({
  width: CLEAR_BUTTON_SIZE,
  height: CLEAR_BUTTON_SIZE,
  aspectRatio: '1/1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const clearButtonSmall = style({
  width: CLEAR_BUTTON_SMALL_SIZE,
  height: CLEAR_BUTTON_SMALL_SIZE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});
