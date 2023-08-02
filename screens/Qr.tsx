import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

const Qr = () => {
    let base64Logo = '';
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
         <QRCode
         size={200}
      value="https://www.google.com/"
      enableLinearGradient={true}
      linearGradient={['#22c1c3','#fdbb2d']}
    />
    </View>
  )
}

export default Qr

const styles = StyleSheet.create({})