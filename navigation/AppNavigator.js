import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { AuthStack } from './AuthNavigator';
// import AllserviceScreen from '../screens/AllserviceScreen';
// import AllserviceScreen from '../screens/AllserviceScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Auth:AuthStack,

  },{
    initialRouteName:'Main'
    // initialRouteName:'Auth'
  })
);
