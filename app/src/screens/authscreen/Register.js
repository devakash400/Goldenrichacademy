import React from 'react';
import {View, Text, Button} from 'react-native';

const Register = ({navigation}) => {
  const handleLogin = () => {
    // Perform login logic, and if successful, navigate to HomeScreen
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Register Screen Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Register;
