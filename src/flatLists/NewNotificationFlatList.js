import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCards from "../components/NotificationCards";




const actions = [{
    title: "You just ordered for a quicky service",
    details: "Click to track your order",
    color: "black",
    extra:""
},
{
    title: "Order Delivered",
    details: "Your order has been delivered successfully",
    extra: "Tracking ID: 9988992839",
    color: "green"
}]

export default function NewNotificationFlatList(){
    const flatList=(item)=>{
    return(
        <NotificationCards 
        color={item.item.color} 
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