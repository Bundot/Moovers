import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function QuickyScreen(){
    return(
        <SafeAreaView style={{paddingBottom:20,backgroundColor:"#EEF3F5"}}>
            <TopLineNav text={"Quicky"}/>
            <Image style={{alignSelf:"center", marginTop:56}} source={require('./../../assets/images/quickyScreenImgNoBg.png')}/>
            <Txt font={"PoppinsRegular"} style={{alignSelf:"center", marginTop:17, color:"#1E1E1EB2"}}>We are ready to deliver whatever you want to send</Txt>
            <View style={{paddingHorizontal:34}}>
            <Bttn text={"Add Pickup/ Drop Details"}/>
            </View>
        </SafeAreaView>
    )
}