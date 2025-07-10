import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const editBtnWrapper = style({
  display: 'flex',
  width: '6.4rem',
  height: '6.4rem',
  padding: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
  borderRadius: '50%',
  backgroundColor: colors.grey3,
  cursor: 'pointer',
});

export const editIcon = style({
  width: '4rem',
  height: '4rem',
  color: colors.white01,
});
