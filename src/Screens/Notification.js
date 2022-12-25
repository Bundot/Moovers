import { View, Image, Text, StyleSheet, VirtualizedList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCards from "../components/NotificationCards";
import TopLine from "../components/TopLine";
import TopLineNav from "../components/TopLineNav";
import NewNotificationFlatList from "../flatLists/NewNotificationFlatList";
import OldNotificationFlatList from "../flatLists/OlderNotificationFlatList";
import YesterdayNotificationFlatList from "../flatLists/YesterdayNotificationFlatList";

export default function Notification(){
    return(
        <SafeAreaView>
           <ScrollView>
              <TopLineNav text={"Notification"}/>
            <View style={{height: 80, borderWidth:1, borderColor:"#C0C0C0", paddingHorizontal:25, justifyContent:"center"}}>
                <Txt font={"PoppinsBold"} style={{fontSize:25}}>New</Txt>
            </View>
            <NewNotificationFlatList /> 
            <View style={{height: 80, borderWidth:1, borderColor:"#C0C0C0", paddingHorizontal:25, justifyContent:"center"}}>
                <Txt font={"PoppinsBold"} style={{fontSize:25}}>Yesterday</Txt>
            </View> 
            <YesterdayNotificationFlatList/>
            <View style={{height: 80, borderWidth:1, borderColor:"#C0C0C0", paddingHorizontal:25, justifyContent:"center"}}>
                <Txt font={"PoppinsBold"} style={{fontSize:25}}>Older</Txt>
            </View>   
            <OldNotificationFlatList/> 
            </ScrollView>
        </SafeAreaView>
    )
}