import { View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeNavOne from "./SwipeNavOne";
import Txt from "./Txt";

export default function OnboardingOne(){
    return (
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"white", flex: 1}}>
            <View style={{alignItems:'flex-end', marginTop: 90}}>
                <Txt font={"PoppinsBold"} style={{color:"#4361EE", fontSize: 14}}>Skip</Txt>
            </View>
            <View style={{alignItems:"center", marginTop: 32}}>
                <Image  resizeMethod="resize" source={require('./../../assets/images/onboarding1.png')} />
            </View>
            <View style={{alignItems:"center", marginTop:18}}>
                <Txt font={"PoppinsBold"} style={{color:"#F7B932", fontSize: 16}}>Any where Any time</Txt>
            </View>
            <View style={{alignItems:"center", marginTop: 15, marginHorizontal: 39}}>
                <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>Call moovers at anytime and we will</Txt>
            </View>
            <View style={{alignItems:"center", marginHorizontal: 39}}>
                <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>will get to your location as possible</Txt>
            </View>
            <View style={{marginTop: 50, alignItems:"center"}}>
            </View>
        </SafeAreaView>
    )
}