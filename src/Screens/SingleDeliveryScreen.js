import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import PickupAndDeliveryCard from "../components/PickupAndDeliveryCard";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";
import DropDownInput from "../components/DropDownInput"

export default function SingleDeliveryScreen(){
    return(
        <SafeAreaView>
            <ScrollView>
            <TopLineNav text={"Courier - Single Delivery"}/>
            <View style={{paddingHorizontal:25}}>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop: 20}}>Pickup Address</Txt>
            <PickupAndDeliveryCard/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop: 20}}>Delivery Address</Txt>
            <DeliveryAddressCard/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop: 20}}>About Parcel</Txt>
            <Txt font={"PoppinsBold"} style={{fontSize:12, color:"#1E1E1EB2"}}>Your Given details will be recheck by delivery partner</Txt>
            <DropDownInput/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}