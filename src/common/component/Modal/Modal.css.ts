import { style } from '@vanilla-extract/css';

import { zIndex, layout } from '@/style/token';

export const dimmed = style([
  layout.flexCenter,
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(18, 18, 18, 0.70)',
    backdropFilter: 'blur(2px)',
    zIndex: zIndex.modal,
  },
]);
