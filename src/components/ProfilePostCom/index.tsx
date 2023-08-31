import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {ProfilePostImagesCom} from '@components';
import {Grid, Contact, images} from '@assets';

import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const ProfilePostCom: FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  function postReelHeaderHandler(newTab) {
    setActiveTab(newTab);
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => postReelHeaderHandler(1)} // Pass the desired tab value
        >
          <View
            style={
              activeTab === 1
                ? styles.iconContainerActive
                : styles.iconContainerInactive
            }>
            <Grid
              fill={activeTab === 1 ? theme.text.black : theme.text.darkGray}
              width={30}
              height={30}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => postReelHeaderHandler(2)} // Pass the desired tab value
        >
          <View
            style={
              activeTab === 2
                ? styles.iconContainerActive
                : styles.iconContainerInactive
            }>
            <Contact
              width={30}
              height={30}
              stroke={activeTab === 2 ? theme.text.black : theme.text.darkGray}
            />
          </View>
        </TouchableOpacity>
      </View>
      {activeTab === 1 && <ProfilePostImagesCom />}
      {activeTab === 2 && <ProfilePostImagesCom />}
    </View>
  );
};

export default ProfilePostCom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 2,
  },
  iconContainerActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: theme.text.darkGray,
    paddingVertical: 6,
  },
  iconContainerInactive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 6,
  },
  iconContainer: {
    width: '50%',
  },
});
