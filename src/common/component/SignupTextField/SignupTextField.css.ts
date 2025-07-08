import { styleVariants, style } from '@vanilla-extract/css';
import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const baseClass = style({
  display: 'flex',
  width: '52.2rem', // 522px
  height: '5rem', // 50px
  padding: '1.4rem 2rem', // 14px 20px
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '0.8rem', // 8px
  fontSize: fonts.body03.fontSize,
  fontWeight: fonts.body03.fontWeight,
  lineHeight: fonts.body03.lineHeight,
  fontStyle: 'normal',
});

export const fieldVariants = styleVariants({
  default: {
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey6,
  },
  clicked: {
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey6,
  },
  typing: {
    border: `0.2rem solid ${colors.blue06}`,
    background: colors.grey3,
    color: colors.grey10,
  },
  filled: {
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey10,
  },
  completed: {
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey10,
  },
  locked: {
    border: '0.2rem solid transparent',
    background: colors.grey4,
    color: colors.grey5,
  },
  error: {
    border: `0.2rem solid ${colors.error01}`,
    background: colors.grey4,
    color: colors.grey10,
    gap: '1rem',
  },
});

// 입력/잠금 상태에서만 내부 48.2rem 컨테이너 사용
export const inputContent = style({
  display: 'flex',
  flex: 1, // width: '48.2rem' → flex: 1
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  // marginLeft: 'auto' 제거
});

export const clearButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  aspectRatio: '1/1',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const iconClass = style({
  width: '2rem',
  height: '2rem',
  flexShrink: 0,
});

export const lockIconClass = style({
  width: '2rem',
  height: '2rem',
  flexShrink: 0,
  aspectRatio: '1/1',
});

export const errorMessageWrapper = style({
  display: 'flex',
  width: '52.2rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem', // 4px
});

export const inputBase = style({
  display: 'block',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  color: 'inherit',
});

const makeInputStyle = (font: any) =>
  style({
    ...font,
    '::placeholder': {
      color: colors.grey6,
      ...font,
    },
  });

export const inputStyle = makeInputStyle(fonts.body03);

export const errorMessage = style({
  alignSelf: 'stretch',
  color: colors.error01,
  fontSize: fonts.caption02.fontSize,
  fontWeight: fonts.caption02.fontWeight,
  lineHeight: fonts.caption02.lineHeight,
  fontStyle: 'normal',
}); 