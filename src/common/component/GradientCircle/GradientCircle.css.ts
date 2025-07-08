import { styleVariants } from '@vanilla-extract/css';

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
      top: '-89.2rem',
      right: '-89.2rem',
      width: '178.5rem',
      height: '178.5rem',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(50, 95, 236, 0.50) 0%, rgba(2, 5, 11, 0.50) 100%)',
    },
  ],
  bottomLeft1: [
    baseGradientCircle,
    {
      bottom: '-18rem',
      left: '-31rem',
      width: '78.6rem',
      height: '82.6rem',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(50, 95, 236, 0.30) 0%, rgba(50, 95, 236, 0.00) 100%)',
    },
  ],
  bottomLeft2: [
    baseGradientCircle,
    {
      bottom: '-18rem',
      left: '-1rem',
      width: '65.8rem',
      height: '65.8rem',
      opacity: 0.3,
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(59, 255, 160, 0.70) 0%, rgba(59, 255, 160, 0.00) 100%)',
    },
  ],
});
