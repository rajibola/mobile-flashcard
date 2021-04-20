import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';
import { hp, paddingTopiOS, wp } from '../utils/layout';

export const homeStyles = StyleSheet.create({
  cardTotal: {
    fontSize: hp(20),
    fontFamily: 'Regular',
    color: colors.blue,
    alignSelf: 'center',
    marginBottom: -hp(7),
    marginTop: hp(7),
  },
  line: {
    height: hp(4),
    alignSelf: 'center',
    backgroundColor: colors.red,
    marginTop: hp(7),
  },
  deckText: {
    textTransform: 'uppercase',
    ...fonts[24],
    fontFamily: 'Light',
    textAlign: 'center',
    color: colors.black,
  },
  deck: {
    marginLeft: wp(30),
    height: hp(30),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    height: hp(70),
    width: hp(400),
    marginRight: -wp(170),
    marginLeft: -wp(135),
    transform: [{ rotate: '270deg' }],
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'baseline',
    marginTop: hp(170),
  },
  subheader: {
    ...fonts[20],
    fontFamily: 'Regular',
    color: colors.black,
  },
  header: {
    ...fonts[34],
    marginTop: hp(25),
    marginBottom: hp(1),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: paddingTopiOS,
    paddingHorizontal: wp(25),
  },
});

export const deckStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(250),
    marginTop: hp(20),
  },
  subtitle: {
    ...fonts[16],
    color: colors.black,
    marginTop: hp(2),
  },
  backButton: {
    marginTop: hp(20),
    marginBottom: hp(10),
  },
  cardText: {
    ...fonts[28],
    color: colors.red,
    textAlign: 'center',
    fontFamily: 'Regular',
  },
  questionContainer: {
    marginTop: hp(55),
    height: hp(450),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: wp(270),
    alignSelf: 'center',
    borderRadius: hp(20),
    borderColor: colors.blackOpacity(0.3),
    overflow: 'hidden',
  },
  questions: {
    ...fonts[34],
    color: colors.red,
    textAlign: 'center',
    fontSize: hp(100),
    lineHeight: hp(130),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...fonts[34],
    marginTop: hp(20),
    fontFamily: 'Regular',
    color: colors.blackOpacity(0.9),
  },
  topContainer: {
    height: '100%',
    paddingHorizontal: wp(25),
    paddingTop: paddingTopiOS,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
