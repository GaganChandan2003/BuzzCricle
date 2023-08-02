import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {loginApi} from '../store/auth/action';
import {AppDispatch} from '../store/store';
import isValidEmail from '../utils/validation';

const Login = ({navigation: {navigate}}: any) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const {isLoading, isError, messege, isAuth} = useSelector(
    (state: any) => state.authReducer._j,
  );

  const handleLogin = () => {
    if(!isValidEmail(email))
    {
      ToastAndroid.show("Invalid email", ToastAndroid.SHORT)
      return false;
    }
    dispatch(loginApi({email, password}));
    {
      (isLoading === false &&
        isError === true &&
        ToastAndroid.show(messege, ToastAndroid.SHORT)) ||
        (isLoading === false &&
          isError === false &&
          ToastAndroid.show(messege, ToastAndroid.SHORT));
    }
    {
      isError === false &&
        isLoading === false &&
        isAuth === true &&
        navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.component}>
      {isLoading ? (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="black"
          size="large"
        />
      ) : (
        <>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: 'black',
                textAlign: 'center',
                fontWeight: '700',
                letterSpacing: 2,
                marginVertical: 5,
              }}>
              WELCOME BACK
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: 'grey',
                textAlign: 'center',
                fontWeight: '500',
                marginBottom: 20,
              }}>
              Welcome back! Please enter your details
            </Text>
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={styles.textField}
              value={email.toLowerCase()}
              onChangeText={setemail}
              placeholder="Email"
              placeholderTextColor="black"></TextInput>
            <TextInput
              style={styles.textField}
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLogin()}>
              <Text style={{fontWeight: '600', fontSize: 13}}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.bottomText}>
              <Text style={{fontWeight: '500', fontSize: 13, color: 'grey'}}>
                <Text>Don't have an account? </Text>
                <Text
                  style={{color: 'black'}}
                  onPress={() => navigate('Signup')}>
                  Signup
                </Text>
              </Text>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '90%',
    padding: 20,
  },
  textField: {
    height: 45,
    borderWidth: 1,
    padding: 5,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 12,
    color: 'black',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 45,
    padding: 5,
    borderRadius: 3,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  bottomText: {
    alignItems: 'center',
  },
  textHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: -10,
    marginVertical: 40,
  },
});
