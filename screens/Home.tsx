import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const getCurrentTimeGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      return 'Good Morning';
    } else if (currentTime >= 12 && currentTime < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Night';
    }
  };
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            margin: 10,
            borderRadius: 10,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: 'black',
              }}>
             {getCurrentTimeGreeting()}
            </Text>
          </View>
          <View>
            <Icon name="bell" style={{fontSize: 20, color: 'black'}}></Icon>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = {
  tabBarIcon: ({name, size, color}: any) => (
    <Icon name={name} size={size} color={color} />
  ),
};
export default Home;

const styles = StyleSheet.create({});
