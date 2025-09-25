import { style } from '@vanilla-extract/css';

export const editContainer = style({
  width: '100%',
  minHeight: 'calc(100vh - 2.8rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6rem',
  marginTop: '2.8rem',
  position: 'relative',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const contentWrapper = style({
  width: '128rem',
  position: 'relative',
});

export const editBtnWrapper = style({
  position: 'absolute',
  top: 'calc(100% + 2.3rem)',
  right: 0,
});
