/** @format */

import {StyleSheet} from 'react-native';
import {AppliedTheme} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const theme = AppliedTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.background.primary,

    alignContent: 'center',
  },
  PDView: {
    width: wp(90),
    backgroundColor: theme.comBackground.secondary,
    borderRadius: 10,
    height: hp(8),
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: hp(2),
    color: theme.text.black,
  },
  textStyle: {
    fontSize: hp(1.5),
    color: theme.text.darkGray,
  },
  mainButtonView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(8),
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: theme.comBackground.secondary,
    borderRadius: 10,
    width: wp(25),
    alignItems: 'center',
    height: hp(5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: hp(1.8),
    color: theme.text.black,
  },
  scrollView: {
    flex: 1,
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
});
export default styles;
