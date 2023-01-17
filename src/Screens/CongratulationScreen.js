import { View, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import Txt from "../components/Txt";

export default function CongratulationScreen({navigation}){
    const ondashboard = ()=> {
        navigation.navigate("Navigation")
      }
    return(
        <SafeAreaView style={{paddingHorizontal:20}}>
            <View style={{alignItems:"center", marginTop:200}}>
            <Image source={require('./../../assets/images/SuccessfulIcon.png')}/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, color:"#593761"}}>BOOKING SUCCESSFUL</Txt>
            <Txt font={"PoppinsBold"} style={{fontSize:12}}>Order has been taken</Txt>
            <Txt font={"PoppinsBold"} style={{fontSize:10, color:"#F7B932CC", borderBottomWidth:1, borderBottomColor:"#F7B932CC", paddingBottom:-8}}>View</Txt>
            </View>
            <Bttn text={"Back to DashBoard"} onPress={ondashboard}/>
        </SafeAreaView>
    )
}