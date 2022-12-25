import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCards from "../components/NotificationCards";


const actions = [{
    title: "You just won a quicky coupon",
    details: "Click to claim",
},
{
    title: "Rate our delivery service",
    details: "Please tell us how you enjoy our services. Your feedbacks can help improve or service",
},
{
    title: "Order Cancelled",
    details: "You just cancelled your order",
    extra: "Tracking ID: 78372727717",
},
{
    title:"Payment Successful",
    details: "Your payment of fifty thousand naira wa successful"
}]

export default function YesterdayNotificationFlatList(){
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