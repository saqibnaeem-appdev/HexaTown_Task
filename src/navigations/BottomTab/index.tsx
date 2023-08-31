// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   HomeScreen,
//   SearchScreen,
//   AddScreen,
//   ReelScreen,
//   ProfileScreen,
// } from '@screens';
// import {Home, Search, Add, Reel, Profile} from '@assets';
// import {AppliedTheme} from '@constants';
// const Tab = createBottomTabNavigator();

// const theme = AppliedTheme();
// const UserBottomTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarActiveTintColor: theme.bottomTab.active,
//         tabBarInactiveTintColor: theme.background.Transparent,
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Home fill={color} width={size} height={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Search fill={color} width={size} height={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="AddScreen"
//         component={AddScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Add fill={color} stroke-width="10" width={size} height={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ReelScreen"
//         component={ReelScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Reel fill={color} width={size} height={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Profile stroke={color} width={size} height={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default UserBottomTabs;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  SearchScreen,
  AddScreen,
  ReelScreen,
  ProfileScreen,
} from '@screens';
import {
  SolidHome,
  Home,
  Search,
  SolidSearch,
  Add,
  SolidAdd,
  Reel,
  SolidReel,
  Profile,
  SolidProfile,
} from '@assets';
import {AppliedTheme} from '@constants';

const Tab = createBottomTabNavigator();

const theme = AppliedTheme();

const UserBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.bottomTab.active,
        tabBarInactiveTintColor: theme.background.Transparent,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'HomeScreen') {
            icon = focused ? SolidHome : Home;
          } else if (route.name === 'SearchScreen') {
            icon = focused ? SolidSearch : Search;
          } else if (route.name === 'AddScreen') {
            icon = focused ? SolidAdd : Add;
          } else if (route.name === 'ReelScreen') {
            icon = focused ? SolidReel : Reel;
          } else if (route.name === 'ProfileScreen') {
            icon = focused ? SolidProfile : Profile;
          }

          return icon({fill: color, width: size, height: size});
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="ReelScreen" component={ReelScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default UserBottomTabs;
