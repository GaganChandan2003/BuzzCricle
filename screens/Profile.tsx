import {StyleSheet, Image, ImageBackground, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width: '100%', height: '100%', opacity: 90}}
        source={require('../assets/background.jpg')}>
        <View style={styles.profile_view}>
          <View style={{marginHorizontal: 40}}>
            <Text
              style={{
                color: 'black',
                fontSize: 28,
                fontFamily: 'sans-serif-light',
              }}>
              Gagan Chandan
            </Text>
            <View>
              <View style={styles.bio}>
                <Icon name="briefcase" color="black" />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'sans-serif-medium',
                  }}>
                  UI/UX Designer
                </Text>
              </View>
              <View style={styles.bio}>
                <Icon name="map-pin" color="black" />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'sans-serif-medium',
                  }}>
                  Masoori, Uttrakand
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.profile}>
          <Image
            style={{width: 120, height: 120, borderRadius: 50}}
            source={require('../assets/profile.jpg')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
Profile.navigationOptions = {
  tabBarIcon: ({name, size, color}: any) => (
    <Icon name={name} size={size} color={color} />
  ),
};

export default Profile;

const styles = StyleSheet.create({
  profile_view: {
    height: 250,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    top: 350,
    paddingTop: 70,
  },
  profile: {
    position: 'absolute',
    top: 300,
    left: 40,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  bio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 5,
    marginLeft: 3,
  },
});
