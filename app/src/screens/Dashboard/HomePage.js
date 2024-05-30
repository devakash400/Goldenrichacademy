import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const HomePage = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Perform login logic, and if successful, navigate to HomeScreen
    navigation.navigate('Home');
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={openDrawer} />
    </View>
  );
};

export default HomePage;
