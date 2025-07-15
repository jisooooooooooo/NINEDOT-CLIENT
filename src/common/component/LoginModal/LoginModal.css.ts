import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';
import { zIndex } from '@/style/token';

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(2, 5, 11, 0.7)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: zIndex.modal,
});

export const modalContainer = style({
  position: 'fixed',
  top: '44.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5rem',
  width: '63rem',
  height: '34.2rem',
  padding: '3rem',
  backgroundColor: colors.grey1,
  borderRadius: '16px',
});

export const iconWrapper = style({
  marginLeft: 'auto',
});

export const closeIcon = style({
  width: '3.2rem',
  height: '3.2rem',
  cursor: 'pointer',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
