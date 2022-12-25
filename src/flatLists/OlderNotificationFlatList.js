import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCards from "../components/NotificationCards";


const actions = [{
    title: "Payment Declind",
    details: "your payment was not successful",
},
{
    title: "You just won a ₦10,000 Cashback",
    details: "congratulations, you just won a ₦10,000 Cashback",
    extra: "Tracking ID: 9988992839",
    color: "green"
}]

export default function OldNotificationFlatList(){
    const flatList=(item)=>{
    return(
        <NotificationCards 
        details={item.item.details} 
        extra={item.item.extra} 
        title={item.item.title}/>
    );
}

    return (
        <View>
            <FlatList data={actions} renderItem={flatList}/>
        </View>
    )

}