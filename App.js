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
import ModeOfCourier from './src/Screens/ModeOfCourier';
import SwipeTest from './src/Tests/SwipeTest';
import TestingSwipeModal from './src/Tests/TestingSwipeModal';
import PackersAndMovers from './src/Screens/PackersAndMovers';
import SelectItemsScreen from './src/Screens/SelectItemsScreen';
import AddressDetailsScreen from './src/Screens/AddressDetailsScreen';
import PackagesScreen from './src/Screens/PackageScreen';
import SummaryScreen from './src/Screens/SummaryScreen';
import QuickyScreen from './src/Screens/QuickyScreen';
import CourierTrackingScreen from './src/Screens/CourierTrackingScreen';
//import TestingSwipeModal from './src/Tests/TestingSwipeModal';



const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeSlides' screenOptions={{headerShown: false}}> 
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
        <Stack.Screen name='ModeOfCourier' component={ModeOfCourier}/>
        <Stack.Screen name='SwipeTest' component={SwipeTest}/>
        <Stack.Screen name='TestingSwipeModal' component={TestingSwipeModal}/>
        <Stack.Screen name='PackersAndMovers' component={PackersAndMovers}/>
        <Stack.Screen name='SelectItemsScreen' component={SelectItemsScreen}/>
        <Stack.Screen name='AddressDetailsScreen' component={AddressDetailsScreen}/>
        <Stack.Screen name='PackagesScreen' component={PackagesScreen}/>
        <Stack.Screen name='SummaryScreen' component={SummaryScreen}/>
        <Stack.Screen name='QuickyScreen' component={QuickyScreen}/>
        <Stack.Screen name='CourierTrackingScreen' component={CourierTrackingScreen}/>
       
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
