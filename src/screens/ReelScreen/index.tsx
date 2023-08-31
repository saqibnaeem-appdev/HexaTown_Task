import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
const ReelScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>ReelScreen</Text>
    </View>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
  },
});
