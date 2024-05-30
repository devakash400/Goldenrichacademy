import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Splash from '../components/Splash';
import LoginScreen from '../src/screens/authscreen/login';
import Register from '../src/screens/authscreen/Register';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerMode: 'screen',
        // You can add more common options here
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menubtn: {
    marginLeft: moderateScale(10),
    padding: scale(10),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  userimg: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
  },
});

export default MainStackNavigator;
