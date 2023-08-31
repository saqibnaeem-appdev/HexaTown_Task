import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {
  CustomView,
  HeaderCom,
  ProfileCom,
  ProfilePostCom,
  StoryHighlightCom,
} from '@components';
import {AppliedTheme} from '@constants';

const theme = AppliedTheme();
const ProfileScreen: FC = () => {
  const MenuPress = () => {
    alert('menu Press');
  };
  const DropDownPress = () => {
    alert('DropDownPress');
  };
  const AddPress = () => {
    alert('Add Press');
  };
  return (
    <View style={styles.container}>
      <HeaderCom
        MenuPress={MenuPress}
        DropDownPress={DropDownPress}
        AddPress={AddPress}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <ProfileCom />

        <CustomView
          text="100 account reached in last 30 days"
          containerStyle={styles.PDView}
          headerText="Proffessional Dashboard"
          headerTextStyle={styles.headerText}
          textStyle={styles.textStyle}
          onPress={() => alert('Press')}
        />
        <View style={styles.mainButtonView}>
          <CustomView
            text="Edit Profile"
            containerStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={() => alert('Press')}
          />
          <CustomView
            text="Share Profile"
            containerStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={() => alert('Press')}
          />
          <CustomView
            text="Contact"
            containerStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={() => alert('Press')}
          />
        </View>
        <StoryHighlightCom />
        <ProfilePostCom />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
