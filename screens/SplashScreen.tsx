import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = ({navigation: {navigate}}: any) => {
  useEffect(() => {
    let token = AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token !== null && token !== undefined) {
        navigate('Home');
      } else {
        navigate('Login');
      }
    }, 3000);
  }, []);
  return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.head}>BUZZCIRCLE</Text>
    <Text style={styles.tagline}>Your Gateway to Limitless Connections!</Text>
   </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },
    head:{
        color:"black",
        fontSize:40,
        fontWeight:"800",
        letterSpacing:2
    },
    tagline:{
        color:"black",
        fontWeight:"600"
    }
});
