import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../theme';
const { horizontalScale, verticalScale, moderateScale } = Metrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  nextBtnStyle: {
    textAlign: 'left',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.themeColor,
    borderRadius: 10,
  },
  nextBtnTextStyle: {
    color: 'white',
  },
  textContainer: {
    alignItems: 'center',
  },
  textInputField: {
    width: moderateScale(280),
    height: moderateScale(40),
    fontSize: moderateScale(15),
  },
  masterKeyContainer: {
    alignItems: 'center',
    // marginTop: verticalScale(100),
  },
  iconStyle: { width: moderateScale(20), height: moderateScale(20) },
  imageContainer: {
    position: 'absolute',
    top: moderateScale(25),
    right: moderateScale(20),
  },
});
export default styles;
