import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';
import { hp, paddingTopiOS, wp } from '../utils/layout';

export const addCardStyles = StyleSheet.create({
  cardText: {
    textAlign: 'center',
    ...fonts[20],
    color: colors.black,
    marginHorizontal: wp(15),
  },
  card: {
    borderWidth: 0,
    flex: 1,
    width: wp(230),
    alignSelf: 'center',
    marginBottom: hp(20),
  },
  face: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.blackOpacity(0.5),
    borderRadius: wp(20),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(15),
    paddingVertical: hp(15),
    overflow: 'hidden',
    backgroundColor: colors.black,

    // height: hp(450),
  },

  back: {
    borderWidth: 1,
    borderRadius: wp(20),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    borderRadius: wp(20),
    paddingHorizontal: wp(10),
    marginBottom: hp(10),
    borderColor: colors.blackOpacity(0.5),
  },
  addContainer: {
    // borderWidth: 1,
    width: wp(300),
    height: hp(570),
    borderRadius: hp(20),
    alignSelf: 'center',
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
  },
  headerSubtitle: {
    ...fonts[16],
    color: colors.black,
    marginTop: hp(2),
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
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: wp(25),
    paddingBottom: hp(20),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: paddingTopiOS,
  },
});

export const quizStyles = StyleSheet.create({
  card: {
    borderWidth: 0,
    flex: 1,
    width: wp(230),
    alignSelf: 'center',
  },
  face: {
    flex: 1,
    borderWidth: 1,
    borderRadius: wp(30),
    overflow: 'hidden',
  },

  back: {
    borderWidth: 1,
    borderRadius: wp(30),
    backgroundColor: colors.yellow,
    flex: 1,
  },
});

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
