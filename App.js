import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bttn from './src/components/Bttn';
import ChatCard from './src/components/ChatCard';
import Navigation from './src/components/Navigation';
import PasswordInputs from './src/components/PasswordInputs';
import InboxCard from './src/components/InboxCard';
import OnboardingOne from './src/components/OnboardingOne';
import OnboardingTwo from './src/components/OnboardingTwo';
import OnboardingThree from './src/components/OnboardingThree';
import StartButton from './src/components/StartButton';
import WelcomeScreen from './src/Screens/WelcomeScreen';
//import SwipeNav from './src/components/SwipeNavOne';
import SwipeNavOne from './src/components/SwipeNavOne';
import TestingSwippers from './src/Tests/TestingSwippers';
import WelcomeSlides from './src/Screens/WelcomeSlides';



const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeSlides' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Navigation' component={Navigation} />
        <Stack.Screen name='PasswordInputs' component={PasswordInputs} />
        <Stack.Screen name='InboxCard' component={InboxCard}/>
        <Stack.Screen name='OnboardingOne' component={OnboardingOne}/>
        <Stack.Screen name='OnboardingTwo' component={OnboardingTwo}/>
        <Stack.Screen name='OnboardingThree' component={OnboardingThree}/>
        <Stack.Screen name='StartButton' component={StartButton}/>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name='SwipeNav' component={SwipeNavOne}/>
        <Stack.Screen name='TestingSwippers' component={TestingSwippers}/>
        <Stack.Screen name='WelcomeSlides' component={WelcomeSlides}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
