import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function ReferAndEarnCard(){
    return(
        <SafeAreaView style={{paddingHorizontal: 17}}>
            <View style={{height: 101, borderWidth: 1, borderRadius: 10, flexDirection:"row", overflow:"hidden"}}>
            <View style={{ width:200,transform: [{ rotate: '-90deg'}], backgroundColor:"red", marginLeft: -120}}>
                    <Txt font={"PoppinsBold"} style={{ fontSize: 16, color:"white", backgroundColor:"green", justifyContent:"center", alignSelf:"center", marginTop: 75}}>20% off</Txt>
                </View>
            </View>
        </SafeAreaView>
    )
}