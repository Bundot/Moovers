import {View, Text, ScrollView, TextInput} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Txt from "../components/Txt";
import SquareInput from "../components/SquareInput";
import { useRef } from 'react';
import VerificationInputs from "../components/VerificationInputs";
import Bttn from "../components/Bttn";

export default function Verification({refs, onChangeText}){

    const inputTwo = useRef();
    
    return(
        <SafeAreaView style={{paddingHorizontal:30}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center", fontSize: 30, color:"#593761", marginTop:65}}>Verification</Txt>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center", marginTop:30}}>We've sent a verification code</Txt>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center"}}>to your email address</Txt>
                 <View style={{flexDirection:"row", marginTop: 30, justifyContent:"center"}}>
                    <VerificationInputs/>
                 </View>
                <Txt font={"PoppinsRegular"} style={{alignSelf:"center", fontSize: 14, color: "#D27203", marginTop:30 }}>Resend in 58s</Txt>
                <Bttn text={"Verify"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}