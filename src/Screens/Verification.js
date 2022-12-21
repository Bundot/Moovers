import {View, Text, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Txt from "../components/Txt";

export default function Verification(){
    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center", fontSize: 30, color:"#593761", marginTop:65}}>Verification</Txt>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center", marginTop:30}}>We've sent a verification code</Txt>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center"}}>to your email address</Txt>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}