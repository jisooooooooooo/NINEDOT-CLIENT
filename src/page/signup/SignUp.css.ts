import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/style/token';

export const mainContainer = style({
  backgroundColor: colors.bg_black01,
});

export const layoutContainer = style({
  maxWidth: '63rem',
  margin: '0 auto',
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '8.6rem 0 7.2rem 0',
  color: colors.grey11,
  textAlign: 'center',
});

export const headerText = style({
  ...fonts.display02,
});

export const descriptionText = style({
  ...fonts.body03,
});

export const basicInfoContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '2rem',
  borderBottom: `2px solid ${colors.grey3}`,
  color: colors.grey11,
});

export const infoText = style({
  ...fonts.subtitle01,
});

export const essentialText = style({
  paddingLeft: '0.6rem',
  ...fonts.body05,
});

export const essentialIcon = style({
  width: '0.6rem',
  height: '0.6rem',
});

export const basicInfoSection = style({
  padding: '3.2rem 0 11.6rem 0',
});

export const fitInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  paddingBottom: '2rem',
  borderBottom: `2px solid ${colors.grey3}`,
  color: colors.grey11,
});

export const fitInfoText = style({
  ...fonts.body05,
  color: colors.grey6,
});

export const surveySection = style({
  padding: '3.2rem 0 11.4rem 0',
});

export const agreementContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
});

export const checkboxIcon = style({
  height: '2.4rem',
  width: '2.4rem',
  cursor: 'pointer',
});

export const agreeText = style({
  color: colors.grey11,
  ...fonts.body04,
});

export const seeText = style({
  color: colors.grey6,
  ...fonts.body05,
  textDecorationLine: 'underline',
  textUnderlinePosition: 'from-font',
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '3.4rem 0 10rem 0',
});
