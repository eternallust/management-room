import React, {Component} from 'react';
import {Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home'
import AddRoom from './src/screens/AddRoom'
import Login from './src/screens/Login';
import Register from './src/screens/Register'
import Customer from './src/screens/Customer'
import Setting from './src/screens/Setting'
import AddCustomer from './src/screens/AddCustomer'
import UpdateCustomer from './src/screens/updateCustomer'
import UpdateRoom from './src/screens/UpdateRoom'
import LandingScreen from './src/screens/LandingScreen'
import FirstScreen from './src/screens/FirstScreen'

import {createBottomTabNavigator} from 'react-navigation-tabs';

const MainApp = createBottomTabNavigator(
    {
      HomeScreen:{screen:FirstScreen},
      Customer: {screen:Customer},
      Setting : {screen:Setting}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'HomeScreen') {
            return (
              <Image
                source={ require('./src/assets/icon/home.png') }
                style={{ width: 20, height: 20, }} /> 
            );
          }
        else if(routeName==='Customer') {
            return (
              <Image
                source={ require('./src/assets/icon/user.png') }
                style={{ width: 20, height: 20, }} /> 
            );
          }
          else if(routeName==='Setting') {
            return (
              <Image
                source={ require('./src/assets/icon/menu.png') }
                style={{ width: 20, height: 20, }} /> 
            );
          }
        },
        
      }),
      tabBarOptions: {
        activeTintColor: '#FF6F00',
        inactiveTintColor: '#263238',
      },
    }
  );
const AppNavigator = createStackNavigator({
    LandingScreen:{
      screen :LandingScreen,
      navigationOptions : {
      header:null
      }
    },
    MainApp:{
      screen :MainApp,
      navigationOptions : {
      header:null
      }
    },
    Register:{
      screen :Register,
      navigationOptions : {
      header:null
      }
    },
    Login : {
      screen :Login,
      navigationOptions : {
      header:null
      }
    },
    Home: { 
      screen: Home,
      navigationOptions : {
          header:null
      }
    },
    AddRoom:{
      screen:AddRoom,
        navigationOptions:{
          header:null
        }
    },
    AddCustomer : {
      screen : AddCustomer,
      navigationOptions:{
        header:null
      }
    },
    UpdateCustomer : {
      screen : UpdateCustomer,
      navigationOptions:{
        header:null
      }
    },
    UpdateRoom : {
      screen : UpdateRoom,
      navigationOptions:{
        header:null
      }
    },
 
});

export default createAppContainer(AppNavigator);
