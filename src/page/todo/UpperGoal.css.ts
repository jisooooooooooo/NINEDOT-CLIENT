import { style } from '@vanilla-extract/css';

import { colors } from '@/style/token';

export const upperGoalContainer = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.bg_black01,
  position: 'relative',
  overflow: 'hidden',
});
