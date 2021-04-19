import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';
import { hp, paddingTopiOS, wp } from '../utils/layout';

export const homeStyles = StyleSheet.create({
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
    marginBottom: hp(50),
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
  backButton: {
    marginTop: hp(20),
  },
  cardText: {
    ...fonts[20],
    color: colors.red,
    textAlign: 'center',
  },
  questionContainer: {
    marginVertical: hp(20),
    height: hp(450),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    width: wp(270),
    alignSelf: 'center',
    borderRadius: hp(20),
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
    color: colors.white,
    marginTop: hp(20),
  },
  topContainer: {
    height: hp(300),
    paddingHorizontal: wp(25),
    paddingTop: paddingTopiOS,
  },
  container: {
    flex: 1,
  },
});
