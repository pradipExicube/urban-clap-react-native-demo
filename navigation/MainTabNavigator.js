import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MybookingScreen from '../screens/MyBookings';
import AllserviceScreen from '../screens/AllserviceScreen';
import SearchserviceScreen from '../screens/SearchService';
import ProfileScreen from '../screens/ProfileSeceen';
import HelpcenterScreen from '../screens/HelpcenterScreen';
import IndividualServiceScreen from '../screens/IndividualService';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Allservice:AllserviceScreen,
    Searchservice:SearchserviceScreen,
    Individualservice:IndividualServiceScreen
  },
  config
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-home${focused ? '' : '-outline'}`
//           : 'md-home'
//       }
//     />
//   )
// };

  HomeStack.navigationOptions= ({ navigation }) => ({
    tabBarVisible: navigation.state.index < 1,
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-home${focused ? '' : '-outline'}`
            : 'md-home'
        }
      />
    )
  })




HomeStack.path = '';

const MybookingStack = createStackNavigator(
  {
    Links: MybookingScreen,
  },
  config
);

MybookingStack.navigationOptions = {
  tabBarLabel: 'My Booking',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

MybookingStack.path = '';

const HelpcenterStack = createStackNavigator(
  {
    Settings: HelpcenterScreen,
  },
  config
);

HelpcenterStack.navigationOptions = {
  tabBarLabel: 'Help Center',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

HelpcenterStack.path = '';



const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MybookingStack,
  HelpcenterStack,
  ProfileStack

});

tabNavigator.path = '';

export default tabNavigator;
