import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import AuthLoadingScreen from 'Containers/AuthLoadingScreen';
import SignScreen from 'Containers/SignScreen';

// Tab
import HomeScreen from 'Containers/HomeScreen';
import InboxScreen from 'Containers/InboxScreen';
import OrderScreen from 'Containers/OrderScreen';
import FeedScreen from 'Containers/FeedScreen';
import AccountScreen from 'Containers/AccountScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Inbox: InboxScreen,
    Order: OrderScreen,
    Feed: FeedScreen,
    Account: AccountScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = "md-home";
        } else if (routeName === 'Account') {
          iconName = "md-person";
        } else if (routeName === 'Order') {
          iconName = "md-add-circle";
        } else if (routeName === 'Inbox') {
          iconName = "md-mail";
        } else if (routeName === 'Feed') {
          iconName = "md-list";
        }


        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00b1f9',
      inactiveTintColor: 'gray',
    },
  }
);

const AuthStack = createStackNavigator({ SignIn: SignScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
