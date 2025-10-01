import { style } from '@vanilla-extract/css';

export const viewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8.7rem',
  marginBottom: '10.8rem',
  gap: '7.3rem',
});

export const editBtnContainer = style({
  position: 'absolute',
  bottom: '5rem',
  right: '16.3rem',
});
