import { View,Stylesheet,Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutParcelChkBx from "../components/AboutParcelChkBx";
import AddresDetailsDateAndTime from "../components/AddressDetailsDateAndTime";
import ContactPerson from "../components/ContactPerson";
import MovingCard from "../components/MovingCard";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function AddressDetailsScreen(){
    return(
        <SafeAreaView style={{paddingBottom:20,backgroundColor:"#EEF3F5"}}>
            <ScrollView>
            <TopLineNav text={"Address Details"}/>
            <View style={{paddingHorizontal:25}}>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Moving From</Txt>
            <MovingCard/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Moving To</Txt>
            <MovingCard/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Contact Person</Txt>
            <ContactPerson/>
            <AboutParcelChkBx text={"I want to rent a Vehicle (this will attract extra fee)"} style={{height:16, width:16, borderRadius:8}} color={"#593761"}/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:10}}>Date and Time</Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#1E1E1EB2"}}>Choose your flexible time</Txt>
            <AddresDetailsDateAndTime/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}