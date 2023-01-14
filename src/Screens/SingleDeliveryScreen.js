import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import PickupAndDeliveryCard from "../components/PickupAndDeliveryCard";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";
import DropDownInput from "../components/DropDownInput"
import AboutParcelCard from "../components/AboutParcelCard";
import AboutParcelChkBx from "../components/AboutParcelChkBx";
import AboutParcelInputA from "../components/AboutParcelInputA";
import AboutParcelInputB from "../components/AboutParcelInputB";
import Bttn from "../components/Bttn";

export default function SingleDeliveryScreen(){
    return(
        <SafeAreaView style={{marginBottom:10, backgroundColor:"#EEF3F5"}}>
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
            <AboutParcelCard/>
            <AboutParcelChkBx text={"Skip this Process"} style={{height:16, width:16, borderRadius:8}} color={"#593761"}/>
            <Txt font={"PoppinsBold"} style={{fontSize:16}}>Date and Time </Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:12, color:"#1E1E1EB2"}}>Choose your flexible time</Txt>
            <View style={{flexDirection:"row"}}>
                <AboutParcelInputA image={require('./../../assets/images/CalenderIcon.png')} placeholder={"28th Dec 2022"}/>
                <AboutParcelInputB image={require('./../../assets/images/ClockIcon.png')} placeholder={"8:00am"}/>
            </View>
            <Bttn text={"Proceed"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}