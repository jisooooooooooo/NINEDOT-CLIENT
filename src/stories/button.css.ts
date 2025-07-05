import { style, styleVariants } from '@vanilla-extract/css';

const baseButton = style({
  fontFamily: 'sans-serif',
  border: 0,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
});

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      color: 'white',
      backgroundColor: '#1ea7fd',
    },
  ],
  secondary: [
    baseButton,
    {
      color: '#333',
      backgroundColor: 'transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  ],
});

export const buttonSizes = styleVariants({
  small: {
    fontSize: '12px',
    padding: '10px 16px',
  },
  medium: {
    fontSize: '14px',
    padding: '11px 20px',
  },
  large: {
    fontSize: '16px',
    padding: '12px 24px',
  },
});
