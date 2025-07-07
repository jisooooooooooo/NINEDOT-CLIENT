import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token';
import { fonts } from '@/style/token/typography.css';

export const todoContainer = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.bg_black01,
  position: 'relative',
  overflow: 'hidden',
});

export const todoTitle = style({
  color: colors.white01,
  ...fonts.display01,
  textAlign: 'center',
  marginBottom: '5.6rem',
  position: 'relative',
  zIndex: 1,
});

const baseGradientCircle = {
  position: 'absolute' as const,
  borderRadius: '50%',
  flexShrink: 0,
  zIndex: 0,
};

export const gradientCircle = styleVariants({
  topRight: [
    baseGradientCircle,
    {
      top: '-892px',
      right: '-892px',
      width: '1785px',
      height: '1785px',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(50, 95, 236, 0.50) 0%, rgba(2, 5, 11, 0.50) 100%)',
    },
  ],
  bottomLeft1: [
    baseGradientCircle,
    {
      bottom: '-180px',
      left: '-310px',
      width: '786px',
      height: '826px',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(50, 95, 236, 0.30) 0%, rgba(50, 95, 236, 0.00) 100%)',
    },
  ],
  bottomLeft2: [
    baseGradientCircle,
    {
      bottom: '-180px',
      left: '-10px',
      width: '658px',
      height: '658px',
      opacity: 0.3,
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(59, 255, 160, 0.70) 0%, rgba(59, 255, 160, 0.00) 100%)',
    },
  ],
});

export const todoInputContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  position: 'relative',
});
