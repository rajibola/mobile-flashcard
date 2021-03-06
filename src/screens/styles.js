import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';
import { hp, paddingTopiOS, wp } from '../utils/layout';

export const addCardStyles = StyleSheet.create({
  cardText: {
    textAlign: 'center',
    ...fonts[20],
    color: colors.black,
    marginHorizontal: wp(15),
    fontFamily: 'PT',
  },
  card: {
    borderWidth: 0,
    flex: 1,
    alignSelf: 'center',
    marginBottom: hp(20),
  },
  face: {
    flex: 1,

    borderRadius: wp(20),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(15),
    paddingVertical: hp(15),
    overflow: 'hidden',
    backgroundColor: colors.black,
    width: wp(275),
  },

  back: {
    borderWidth: 1,
    borderRadius: wp(20),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: wp(275),
  },

  addContainer: {
    borderWidth: 1,
    width: wp(300),
    height: hp(570),
    borderRadius: hp(35),
    alignSelf: 'center',
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
    borderColor: colors.blackOpacity(0.2),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: paddingTopiOS,
  },
});

export const quizStyles = StyleSheet.create({
  backToDeck: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    borderRadius: 0,
    elevation: 0,
  },
  restartContainer: {
    width: wp(80),
    height: wp(80),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(80),
    borderColor: colors.blackOpacity(0.7),
    alignSelf: 'center',
    marginTop: hp(50),
    backgroundColor: colors.black,
  },
  position: {
    position: 'absolute',
    zIndex: 1000,
    fontFamily: 'Regular',
    ...fonts[20],
    top: 10,
    right: 10,
    color: colors.white,
  },
  percentage: {
    borderWidth: 1,
    alignItems: 'center',
    width: 150,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: wp(150),
    marginTop: hp(40),
    borderColor: colors.blue,
  },
  circle: {
    borderRadius: hp(1000),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizCompletedValue: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Regular',
    fontSize: hp(40),
    lineHeight: hp(55),
    color: colors.blue,
  },
  quizCompleted: {
    textAlign: 'center',
    alignSelf: 'center',
    ...fonts[34],
    color: colors.blackOpacity(0.7),
  },
  line: {
    backgroundColor: colors.black,
    height: hp(1),
    width: '100%',
    position: 'absolute',
  },

  cardContainer: {
    width: wp(300),
    height: hp(470),
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: wp(40),
    alignSelf: 'center',
    marginTop: hp(20),
    // borderWidth: 1,
  },

  card: {
    borderWidth: 0,
    flex: 1,

    // width: wp(230),
    alignSelf: 'center',
    textAlign: 'center',
  },

  answer: {
    ...fonts[16],
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'PT',
  },
  question: {
    ...fonts[16],
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'PT',
  },
  face: {
    flex: 1,
    borderRadius: wp(2),
    overflow: 'hidden',
    width: wp(270),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(15),
    backgroundColor: colors.blue,
    maxHeight: hp(470),
    paddingHorizontal: wp(20),
    elevation: 4,
  },

  back: {
    borderRadius: wp(2),
    flex: 1,
    width: wp(270),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(15),
    backgroundColor: colors.white,
    maxHeight: hp(470),
    paddingHorizontal: wp(20),
    elevation: 4,
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
    marginLeft: -wp(142),
    transform: [{ rotate: '270deg' }],
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'baseline',
    marginTop: hp(210),
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
    marginTop: hp(30),
    height: hp(450),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: wp(270),
    alignSelf: 'center',
    borderRadius: hp(20),
    borderColor: colors.blackOpacity(0.3),
    overflow: 'hidden',
    marginBottom: hp(10),
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
