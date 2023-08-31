// CustomView.tsx

import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DownArrow, Add, Menu, images} from '@assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
interface Props {}
const ProfileCom: FC<Props> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.subView}>
        <Image source={images.profile} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.subInfo}>
            <Text style={styles.text}>100</Text>
            <Text style={styles.text}>Posts</Text>
          </View>
          <View style={styles.subInfo}>
            <Text style={styles.text}>500</Text>
            <Text style={styles.text}>Followers</Text>
          </View>
          <View style={styles.subInfo}>
            <Text style={styles.text}>5</Text>
            <Text style={styles.text}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Muhammad Saqib Naeem</Text>
        <Text style={styles.text}>Science, Technology & Engineering</Text>
        <Text style={styles.text}>I am Programmer</Text>
      </View>
    </View>
  );
};

export default ProfileCom;
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    alignContent: 'center',
    alignSelf: 'center',
    // alignItems: 'center',
    width: wp(90),
    height: hp(20),
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(60),
  },
  subInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    width: wp(20),
  },
  text: {
    color: theme.text.black,
    fontSize: hp(1.6),
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textView: {
    height: hp(8),
  },
});
