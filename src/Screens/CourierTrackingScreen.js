import { View, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CanceledOrder from "../components/CanceledOrder";
import NotYetDeliveredCard from "../components/NotYetDeliveredCard";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";
import DeliveredCard from "./DeliveredCard";

export default function CourierTrackingScreen(){
    return(
        <SafeAreaView style={{backgroundColor:"#EEF3F5", flex:1, paddingBottom:20}}>
            <ScrollView>
            <TopLineNav text={"Track Order"}/>
            <View style={{paddingHorizontal:20, marginTop:20}}>
            <NotYetDeliveredCard/>
            <CanceledOrder/>
            <DeliveredCard/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

