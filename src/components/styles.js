import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { hp, wp } from '../utils/layout';

export const deckCardStyles = StyleSheet.create({
  questionText: {
    color: colors.red,
  },
  rightBox: {
    width: wp(30),
    height: wp(30),
    alignSelf: 'baseline',
    backgroundColor: colors.redOpacity(0.5),
  },
  questionContainer: {
    width: wp(150),
    height: wp(30),
    borderRadius: wp(10),
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: wp(20),
    overflow: 'hidden',
    marginTop: wp(20),
  },
  idContainer: {
    marginTop: wp(2),
  },
  image: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    color: colors.white,
    fontSize: hp(14),
  },
  title: {
    color: colors.white,
    fontSize: hp(20),
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
    width: wp(250),
    height: hp(180),
    borderRadius: wp(28),
    overflow: 'hidden',
    backgroundColor: colors.red,
    paddingLeft: wp(40),
    paddingRight: wp(10),
    paddingTop: wp(25),
  },
});
