import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";
import BlueInput from "./BlueInput";

export default function PackersAndMovers(){
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#EEF3F5"}}>
            <ScrollView>
            <TopLineNav text={"Packers And Movers"}/>
            <Image source={require('./../../assets/images/packersandmoversIcon.png')} style={{alignSelf:"center", marginTop:67}}/>
            <View style={{marginTop:13, paddingHorizontal:23}}>
            <Txt font={"PoppinsRegular"}>Experience Moover Door to Door Packing and Moving Services</Txt>
            <Txt font={"PoppinsRegular"} style={{alignSelf:"center",}}>Shift a single item to a complete house</Txt>
            </View>
            <View style={{marginTop:30,  alignSelf:"center"}}>
                <Txt font={"PoppinsBold"} style={{fontSize: 25}}>Enter Location Details</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize: 13}}>We're happy you are moving to a new home</Txt>
            </View>
            <BlueInput/>
            <BlueInput/>
            <View style={{paddingHorizontal:34}}>
                <Bttn text={"Proceed"}/>
            </View>
            </ScrollView>
        </SafeAreaView> 
    )
}