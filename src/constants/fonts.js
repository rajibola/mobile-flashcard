import { hp } from '../utils/layout';
import { colors } from './colors';

export const customFonts = {
  Black: require('../../assets/fonts/Poppins-Black.ttf'),
  Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
  ExtraBold: require('../../assets/fonts/Poppins-ExtraBold.ttf'),
  ExtraLight: require('../../assets/fonts/Poppins-ExtraLight.ttf'),
  Light: require('../../assets/fonts/Poppins-Light.ttf'),
  Medium: require('../../assets/fonts/Poppins-Medium.ttf'),
  Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
  SemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
  Thin: require('../../assets/fonts/Poppins-Thin.ttf'),
};

export const fonts = {
  16: {
    fontSize: hp(16),
    lineHeight: hp(20),
    fontFamily: 'Medium',
    color: colors.blue,
  },
  20: {
    fontSize: hp(20),
    lineHeight: hp(26),
    fontFamily: 'Medium',
    color: colors.blue,
  },
  24: {
    fontSize: hp(24),
    lineHeight: hp(28),
    fontFamily: 'Medium',
    color: colors.blue,
  },
  28: {
    fontSize: hp(28),
    lineHeight: hp(30),
    fontFamily: 'Medium',
    color: colors.blue,
  },

  34: {
    fontSize: hp(34),
    lineHeight: hp(40),
    fontFamily: 'Medium',
    color: colors.blue,
  },
};
