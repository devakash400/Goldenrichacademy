import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {IMAGES} from '../services/images';
import {FONTS} from '../services/fonts';
import {COLORS} from '../services/colors';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';

const Splash = () => {
  return (
    <ImageBackground
      source={IMAGES.SplashMain} // Replace with your image path
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.Welcome}>
          Welcome
          <Text style={styles.Back}> Back !</Text>
        </Text>
        <Text style={styles.dummyText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>

        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            flex: 0.5,
            alignItems: 'center',
          }}>
          <Image
            style={{
              justifyContent: 'center',
              height: 120,
              width: 150,
              resizeMode: 'contain',
              alignItems: 'center',
            }}
            source={IMAGES.SplashLogo}></Image>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  dummyText: {
    lineHeight: scale(20),
    fontFamily: FONTS.Mulish_SemiBold,
    color: COLORS.white,
    fontSize: scale(13),
    marginTop: scale(20),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '87%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.Mulish_SemiBold,
    textAlign: 'center',
  },
  Back: {
    fontFamily: FONTS.Mulish_Bold,
    color: COLORS.primary,
    fontSize: scale(20),
  },
  Welcome: {
    fontFamily: FONTS.Mulish_Bold,
    color: COLORS.white,
    fontSize: scale(20),
  },
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: '20%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Splash;
