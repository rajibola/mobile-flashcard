import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { hp, wp } from '../utils/layout';

export const iconButtonStyles = StyleSheet.create({
  iconButton: {
    width: wp(65),
    height: hp(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(20),
    borderColor: colors.black,
    backgroundColor: colors.white,
  },
});

export const inputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: wp(20),
    paddingHorizontal: wp(10),
    marginBottom: hp(10),
    borderColor: colors.blackOpacity(0.2),
    height: hp(40),
  },
});

export const headerStyles = StyleSheet.create({
  headerSubtitle: {
    ...fonts[16],
    color: colors.black,
    marginTop: hp(0.5),
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(20),
  },
  headerTitle: {
    ...fonts[34],
    marginTop: hp(8),
    color: colors.blackOpacity(0.7),
    fontFamily: 'Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: wp(25),
    paddingBottom: hp(20),
  },
});

export const circleStyle = StyleSheet.create({
  container: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(50),
    backgroundColor: colors.yellow,
    position: 'absolute',
  },
});

export const addDeckStyles = StyleSheet.create({
  submitButton: {
    marginTop: hp(10),
    width: wp(255),
    elevation: 0,
    marginBottom: hp(3),
    alignSelf: 'center',
    // width: '100%',
  },
  pickColorText: {
    ...fonts[16],
    marginBottom: hp(5),
    marginLeft: wp(15),
    color: colors.blackOpacity(0.5),
    backgroundColor: colors.white,
    position: 'absolute',
    top: -hp(10),
  },
  colorContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: wp(50),
    borderColor: colors.blackOpacity(0.2),
    flexShrink: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(4),
    width: wp(150),
    marginTop: hp(10),
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.blackOpacity(0.2),
    paddingHorizontal: wp(10),
    ...fonts[16],
    borderRadius: wp(40),
    paddingTop: 0,
    paddingBottom: 0,
    color: colors.black,
    marginBottom: hp(10),
    height: hp(45),
  },
  container: {
    borderWidth: 1,
    borderColor: colors.blackOpacity(0.2),
    paddingVertical: wp(8),
    borderRadius: wp(35),
    marginLeft: wp(30),
    width: wp(282),
    flex: 1,
    alignItems: 'center',
    marginTop: hp(80),
  },
});

export const buttonStyles = StyleSheet.create({
  secondaryText: {
    color: colors.blackOpacity(0.8),
  },
  secondary: {
    borderColor: colors.blackOpacity(0.2),
    borderWidth: 1,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  text: {
    ...fonts[20],
    color: colors.white,
  },
  container: {
    height: hp(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: hp(30),
    minWidth: wp(120),
    elevation: 2,
  },
});

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
    textAlign: 'left',
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
