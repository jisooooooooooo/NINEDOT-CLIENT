import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { zIndex } from '@/style/token';

export const upperGoalContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.bg_black01,
  position: 'relative',
  overflow: 'hidden',
});

export const upperGoalBox = style({
  width: '128rem',
  height: '67.2rem',
  flexShrink: 0,
  borderRadius: '12px',
  background: 'rgba(65, 69, 76, 0.32)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: Number(zIndex.modal),
});
