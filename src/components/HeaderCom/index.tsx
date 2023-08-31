// CustomView.tsx

import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DownArrow, Add, Menu} from '@assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  DropDownPress: void;
  AddPress: void;
  MenuPress: void;
}
const HeaderCom: FC<Props> = ({DropDownPress, AddPress, MenuPress}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.textIcon}>
        <Text>saqibnaeem.appdev</Text>
        <TouchableOpacity onPress={DropDownPress}>
          <DownArrow width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity onPress={AddPress}>
          <Add width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={MenuPress}>
          <Menu width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderCom;
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: wp(90),
    height: hp(8),
  },
  textIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  IconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
  },
});
