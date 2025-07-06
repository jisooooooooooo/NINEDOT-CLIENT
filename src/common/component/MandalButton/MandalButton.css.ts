import { style } from '@vanilla-extract/css';
import { colors, fonts } from '@/style/token';

export const buttonContainer = style({
  width: '19rem',
  padding: '0.5rem 1rem',
  backgroundColor: colors.blue07,
  border: 'none',
  borderRadius: '0.5rem',

  color: colors.grey11,
  ...fonts.subtitle05,
  textAlign: 'center',
});
