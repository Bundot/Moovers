import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatCard from './src/components/ChatCard';
import Navigation from './src/components/Navigation';
import WelcomeScreen from './src/Screens/WelcomeScreen';
//import SwipeNav from './src/components/SwipeNavOne';
import SwipeNavOne from './src/components/SwipeNavOne';
import TestingSwippers from './src/Tests/TestingSwippers';
import WelcomeSlides from './src/Screens/WelcomeSlides';
import LoginScreen from './src/Screens/LoginScreen';
import LinkButton from './src/components/LinkButton';
import CreateAccountScreen from './src/Screens/CreateAccountScreen';
import ResetPassword from './src/Screens/ResetPassword';
import Verification from './src/Screens/Verification';
import TestingFormFields from './src/Tests/TestingFormFields';
import NewPassword from './src/Screens/NewPassword';
import HomeScreen from './src/Screens/HomeScreen';
import Notification from './src/Screens/Notification';
import Bookings from './src/Screens/Bookings';
import Profile from './src/Screens/Profile';
import AccountSettings from './src/Screens/AccountSettings';
import ReferallAndCoupon from './src/Screens/ReferralAndCoupon';
import SingleDeliveryScreen from './src/Screens/SingleDeliveryScreen';
import OnboardingThree from './src/components/OnboardingThree';
import OrderSummary from './src/Screens/OrderSummary';
import HelpScreen from './src/Screens/HelpScreen';
import PaymentScreen from './src/Screens/PaymentScreen';
import CongratulationScreen from './src/Screens/CongratulationScreen';



const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HelpScreen' screenOptions={{headerShown: false}}> 
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name='SwipeNav' component={SwipeNavOne}/>
        <Stack.Screen name='TestingSwippers' component={TestingSwippers}/>
        <Stack.Screen name='WelcomeSlides' component={WelcomeSlides}/> 
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='LinkButton' component={LinkButton}/>
        <Stack.Screen name='CreateAccountScreen' component={CreateAccountScreen}/>     
        <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        <Stack.Screen name='Verification' component={Verification}/>
        <Stack.Screen name='TestingFormFields' component={TestingFormFields}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='Bookings' component={Bookings}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='AccountSettings' component={AccountSettings}/>
        <Stack.Screen name='ReferallAndCoupon' component={ReferallAndCoupon}/>
        <Stack.Screen name='Navigation' component={Navigation}/>
        <Stack.Screen name='SingleDeliveryScreen' component={SingleDeliveryScreen}/>
        <Stack.Screen name='OnboardingThree' component={OnboardingThree}/>
        <Stack.Screen name='OrderSummary' component={OrderSummary}/>
        <Stack.Screen name='HelpScreen' component={HelpScreen}/>
        <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
        <Stack.Screen name='CongratulationScreen' component={CongratulationScreen}/>
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
