import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
  },
});
