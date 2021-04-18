import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { hp, wp } from '../utils/layout';

export const deckCardStyles = StyleSheet.create({
  questionText: {
    ...fonts[16],
    color: colors.red,
    flex: 1,
    textAlign: 'center',
  },
  rightBox: {
    width: wp(35),
    height: wp(35),
    alignSelf: 'baseline',
    backgroundColor: colors.redOpacity(0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    width: wp(165),
    height: wp(35),
    borderRadius: wp(10),
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  idContainer: {
    marginTop: wp(2),
    marginBottom: hp(35),
  },
  image: {
    width: wp(22),
    height: wp(22),
    borderRadius: wp(22),
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    ...fonts[16],
    color: colors.yellowOpacity(0.8),
  },
  title: {
    ...fonts[24],
    color: colors.white,
  },
  edgedCicle: {
    position: 'absolute',
    right: wp(15),
    bottom: wp(20),
    transform: [{ rotate: '200deg' }],
    color: colors.yellow,
  },
  bigCircle: {
    width: wp(100),
    height: wp(100),
    borderRadius: wp(100),
    position: 'absolute',
    right: -wp(20),
    top: -wp(73),
    backgroundColor: colors.yellow,
  },
  smallCircle: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15),
    position: 'absolute',
    left: wp(15),
    top: wp(15),
    backgroundColor: colors.yellow,
  },
  container: {
    width: wp(260),
    minHeight: hp(180),
    borderRadius: wp(28),
    overflow: 'hidden',
    backgroundColor: colors.red,
    paddingLeft: wp(40),
    paddingRight: wp(8),
    paddingTop: wp(30),
    paddingBottom: wp(30),
    justifyContent: 'space-between',
    marginBottom: hp(15),
  },
});
