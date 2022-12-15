import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeNavTwo from "./SwipeNavTwo";
import Txt from "./Txt";

export default function OnboardingTwo(){
    return(
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"white", flex: 1}}>
        <View style={{alignItems:'flex-end', marginTop: 90}}>
            <Txt font={"PoppinsBold"} style={{color:"#4361EE", fontSize: 14}}>Skip</Txt>
        </View>
        <View style={{alignItems:"center", marginTop: 32}}>
            <Image  resizeMethod="resize" source={require('./../../assets/images/onboarding2.png')} />
        </View>
        <View style={{alignItems:"center", marginTop:18}}>
            <Txt font={"PoppinsBold"} style={{color:"#F7B932", fontSize: 16}}>Move Your World</Txt>
        </View>
        <View style={{alignItems:"center", marginTop: 15, paddingHorizontal: 39}}>
            <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>Hassle free experience with</Txt>
        </View>
        <View style={{alignItems:"center",paddingHorizontal: 39}}>
            <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>affordable service package</Txt>
        </View>
        <View style={{marginTop: 50, alignItems:"center"}}>
            <SwipeNavTwo/>
            </View>
    </SafeAreaView>
    )
}