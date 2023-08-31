/** @format */

import React, {FC} from 'react';

import {BottomTab} from '@navigations';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
const App: FC = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
