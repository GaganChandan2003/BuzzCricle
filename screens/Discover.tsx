import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Discover = () => {
  return (
    <View>
      <Text>Discover</Text>
    </View>
  )
}

Discover.navigationOptions = {
    tabBarIcon:({name,size, color }:any) => (
        <Icon name={name} size={size} color={color} />
    )
  };

export default Discover

const styles = StyleSheet.create({})