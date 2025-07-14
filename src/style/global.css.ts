import { globalStyle } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';

import './reset.css.ts';

globalStyle('html', {
  fontSize: '62.5%',
  backgroundColor: colors.bg_black01,
});

globalStyle('body', {
  fontFamily: "'Pretendard', sans-serif",
  backgroundColor: '#fff',
  minHeight: '100vh',
  overflowX: 'hidden',
});
