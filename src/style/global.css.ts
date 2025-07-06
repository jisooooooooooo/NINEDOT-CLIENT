import { globalStyle } from '@vanilla-extract/css';

import './reset.css.ts';

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  fontFamily: "'Pretendard', sans-serif",
  backgroundColor: '#fff',
  minHeight: '100vh',
  overflowX: 'hidden',
});
