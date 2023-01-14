import { View, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function PickUpDateAndTimeComp(){
    return(
        <View style={{marginTop:18, flexDirection:"row"}}>
            <View style={{flexDirection:"row"}}>
            <Image source={require("./../../assets/images/CalenderIcon.png")}/>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", fontSize:14, marginLeft: 10}}>25th Dec, 2022</Txt>
            </View>
            <View style={{flexDirection:"row", marginLeft: 62}}>
            <Image source={require("./../../assets/images/ClockIcon.png")}/>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", fontSize:14, marginLeft: 10}}>8:00 am</Txt>
            </View>
        </View>
    )
}