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

function Icons(){
    return(
        <TestingNavBarIcons/>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigation({state, descriptors, navigation}){
    return(
        
       <NavigationContainer independent={true}> 
        <Tab.Navigator  sceneContainerStyle={{backgroundColor: "white"}} screenOptions={({route}) => ({
            tabBarStyle: {borderRadius: 50, marginLeft: 50, marginRight: 50, marginBottom:10, backgroundColor:"white", position: "absolute" },
            tabBarShowLabel: false,  
                 
        }
            )}>
            
           <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false, }}/>
           <Tab.Screen name="Bookins" component={Bookings} options={{headerShown: false}} />
           <Tab.Screen name="Profle" component={Profile} options={{headerShown: false}} />
           <Tab.Screen name='Icons' component={TestingNavBarIcons} options={{headerShown: false}}/>

        </Tab.Navigator>
       </NavigationContainer>
       
    )
}

const styles=StyleSheet.create({
    container:{

    }
})