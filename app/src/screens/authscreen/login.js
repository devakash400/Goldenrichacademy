import React from 'react';
import {View, Text, Button} from 'react-native';
import {FONTS} from '../../../services/fonts';
const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    // Perform login logic, and if successful, navigate to HomeScreen
    navigation.navigate('Register');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: FONTS.Mulish_Black}}>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
