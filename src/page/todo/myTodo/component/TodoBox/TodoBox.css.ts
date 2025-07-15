import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/style/token/color.css';
import { fonts } from '@/style/token/typography.css';

export const todoBoxContainer = styleVariants({
  recommend: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    background: colors.grey4,
    borderRadius: '10px',
    width: '40.6rem',
    padding: '2.4rem 2rem',
  },
  todo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.grey4,
    borderRadius: '8px',
    width: '43.6rem',
    padding: '1.4rem 2rem',
    marginRight: '1.9rem',
  },
});

export const todoItemContainer = styleVariants({
  recommend: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1 0 0',
  },
});

export const todoText = styleVariants({
  recommend: {
    width: '33.3rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: colors.grey10,
    ...fonts.subtitle05,
  },
  todo: {
    color: colors.grey10,
    textAlign: 'center',
    ...fonts.subtitle02,
  },
});

export const checkboxButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '2.4rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const checkboxIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});
