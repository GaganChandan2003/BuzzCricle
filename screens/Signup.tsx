import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signup = ({navigation: {navigate}}: any) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState("");
  
  return (
    <SafeAreaView style={styles.component}>
      <View>
        <Text style={{fontSize:30,color:"black",textAlign:"center",fontWeight:"700",letterSpacing:2,marginVertical:5}}>WELCOME</Text>
        <Text style={{fontSize:13,color:"grey",textAlign:"center",fontWeight:"500",marginBottom:20}}>Hey! Welcome please enter your details</Text>
      </View>
      <View style={styles.loginBox}>
      <TextInput
          style={styles.textField}
          value={username}
          onChangeText={setusername}
          placeholder="Username" placeholderTextColor="black"></TextInput>
        <TextInput
          style={styles.textField}
          value={email.toLowerCase()}
          onChangeText={setemail}
          placeholder="Email" placeholderTextColor="black"></TextInput>
        <TextInput
          style={styles.textField}
          value={password}
          onChangeText={setpassword}
          secureTextEntry={true}
          placeholder="Password" placeholderTextColor="black"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight: '600', fontSize: 13}}>REGISTER</Text>
        </TouchableOpacity>
        <View style={styles.bottomText}>
          <Text style={{fontWeight: '500', fontSize: 13,color:"grey"}}>
            <Text>Already have an account? </Text>
            <Text style={{color: 'black'}} onPress={() => navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({component: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
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
  color:"black",

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
  gap:-10,
  marginVertical:40
}})