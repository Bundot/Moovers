import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import HomePage from '../screens/HomePage';
//import Chat from '../screens/Chat';
//import Orders from '../screens/Orders';
//import Profile from '../screens/Profile';


function HomeP(){
    return(
        <HomePage/>
    )
}

function ChatP(){
    return(
        <Chat/>
    )
}

function OrdersP(){
    return(
    <Orders/>
    )
}

function Me(){
    return(
        <Profile/>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigation({state, descriptors, navigation}){
    return(
        
       <NavigationContainer independent={true}> 
        <Tab.Navigator sceneContainerStyle={{backgroundColor: "white"}} screenOptions={({route}) => ({
            
            tabBarStyle: {borderRadius: 50, marginLeft: 50, marginRight: 50, marginBottom:10, backgroundColor:"white", position: "absolute" },
            tabBarLabelStyle:{color:"black"},
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'HomeP'){
                    iconName = focused
                    ? 'home' : 'home-filled'
                }else if (route.name === 'ChatP') {
                    iconName = focused
                    ?'chat-bubble' : 'chat-bubble-outline'
                }else if (route.name === 'OrdersP'){
                    iconName = focused
                    ?  'shopping-cart' : 'add-shopping-cart'
                }else if (route.name === 'Me'){
                    iconName = focused 
                    ? 'account-circle' : 'account-circle'
                }
                return(
                    <>
                    <MaterialIcons name={iconName} size={24} color="black"/>
                    </> 
                )
            }
        })}>

           <Tab.Screen name="HomeP" component={HomePage} options={{headerShown: false}}/>
           <Tab.Screen name="ChatP" component={Chat} options={{headerShown: false}} />
           <Tab.Screen name="OrdersP" component={Orders} options={{headerShown: false}} />
           <Tab.Screen name="Me" component={Profile} options={{headerShown: false}} />

        </Tab.Navigator>
       </NavigationContainer>
       
    )
}

const styles=StyleSheet.create({
    container:{

    }
})