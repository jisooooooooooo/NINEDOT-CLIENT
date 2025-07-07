import { style } from '@vanilla-extract/css';
import { fonts, colors } from '@/style/token';

export const cycleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '10.6rem',
  height: '5.6rem',
  padding: '1.4rem 2rem',
  borderRadius: '8px',
  backgroundColor: colors.grey4,
  margin: '2rem',
});

export const cycleText = style({
  ...fonts.subtitle02,
  color: colors.grey10,
  textAlign: 'center',
});

export const dropdownIcon = style({
  width: '2rem',
  height: '2rem',
});
