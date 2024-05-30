import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {StatusBar, StyleSheet, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {COLORS} from './src/services/colors';
import DrawerNavigation from './app/router/DrawerNavigator';
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'NativeBase: The contrast ratio of',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer independent="true">
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <DrawerNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
