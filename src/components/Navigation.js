import {View, StyleSheet, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Bookings from '../Screens/Bookings';
import Profile from '../Screens/Profile';
import Txt from './Txt';
import TestingNavBarIcons from '../Tests/TestingNavBarIcons';
//import HomePage from '../screens/HomePage';
//import Chat from '../screens/Chat';
//import Orders from '../screens/Orders';
//import Profile from '../screens/Profile';


function Home(){
    return(
        <HomeScreen/>
    )
}

function Bookins(){
    return(
        <Bookings/>
    )
}

function Profle(){
    return(
        <Profile/>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigation({state, descriptors, navigation}){
    return(
        
       <NavigationContainer independent={true}> 
        <Tab.Navigator  sceneContainerStyle={{backgroundColor: "white"}} 
        screenOptions={({route}) => ({
        tabBarStyle: {borderRadius: 50, marginLeft: 50, marginRight: 50, marginBottom:10, backgroundColor:"white", position: "absolute", paddingHorizontal:20},
        tabBarShowLabel: false, 
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 12, flex: 1 },
        style: { backgroundColor: 'white' },
        tabStyle: { justifyContent: 'center', flexDirection: 'row', alignItems: 'center' },        
        })}
        >


            
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: focused ? '#D27203' : 'white',
            paddingTop: focused ? 5 : 0,
            paddingBottom: focused ? 5 : 0,
            paddingRight: focused ? 30 : 0,
            paddingLeft: focused ? 10 : 0,
            borderRadius: focused ? 100 : 0}}>
            <Image
              source={require('./../../assets/images/pentagonIcon.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : '#D27203',
              }}
            />
            {focused && (
              <Text style={{ color: 'white', marginLeft: 5, fontSize:14 }}>Home</Text>
            )}
          </View>
        ),
        }}/>
           <Tab.Screen name="Bookins" component={Bookings} options={{headerShown: false,
            
            tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: focused ? '#D27203' : 'white',
            paddingTop: focused ? 5 : 0,
            paddingBottom: focused ? 5 : 0,
            paddingRight: focused ? 30 : 0,
            paddingLeft: focused ? 10 : 0,
            borderRadius: focused ? 100 : 0}}>
            <Image
              source={require('./../../assets/images/bookinsNav.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : '#D27203',
              }}
            />
            {focused && (
              <Text style={{ color: 'white', marginLeft: 5, fontSize:13 }}>Bookings</Text>
            )}
          </View>
        ),}} />
           <Tab.Screen name="Profle" component={Profile} options={{headerShown: false,
        tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: focused ? '#D27203' : 'white',
            paddingTop: focused ? 5 : 0,
            paddingBottom: focused ? 5 : 0,
            paddingRight: focused ? 30 : 0,
            paddingLeft: focused ? 10 : 0,
            borderRadius: focused ? 100 : 0}}>
            <Image
              source={require('./../../assets/images/Ppic.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'white' : '#D27203',
              }}
            />
            {focused && (
              <Text style={{ color: 'white', marginLeft: 5, fontSize:13 }}>Profile</Text>
            )}
          </View>
        )}} />

        </Tab.Navigator>
       </NavigationContainer>
       
    )
}

const styles=StyleSheet.create({
    container:{

    }
})