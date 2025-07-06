import { style } from '@vanilla-extract/css';
import { colors, fonts } from '@/style/token';

export const mandalartContainer = style({
  display: 'grid',
  gap: '1rem',
  padding: '1rem',
  maxWidth: '800px',
  margin: '0 auto',
});

export const cell = style([
  fonts.title03,
  {
    color: colors.white01,
    display: 'flex',
    width: '19.6rem',
    height: '19.6rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: 0,
    cursor: 'pointer',
    borderRadius: '0.8rem',
    background: `linear-gradient(180deg, #305088 0%, #1E3270 100%)`,
  },
]);
