import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const uxWritingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  marginTop: '8rem',
  marginBottom: '2.8rem',
});

export const uxWritingText = style([
  fonts.display03,
  {
    color: colors.grey11,
  },
]);
