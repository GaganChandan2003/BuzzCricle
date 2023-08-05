import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreenComponent from './screens/SplashScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Profile from './screens/Profile';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';

type TabsStackParamList = {
  Home: undefined;
  Discover: undefined;
  Profile: undefined;
};

type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreenComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tabs"
            component={TabsNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          borderRadius: 10,
          margin:10,
          position: 'absolute'
        },
        tabBarActiveTintColor: 'black',
        tabBarIcon: ({color, size, focused}: TabBarIconProps) => {
          if (route.name === 'Home') {
            return <Icon name={'home'} size={focused?30:size} color={color} />;
          } else if (route.name === 'Discover') {
            return <Icon name={'compass'}size={focused?30:size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Icon name={'user'}size={focused?30:size} color={color} />;
          }
        }
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
