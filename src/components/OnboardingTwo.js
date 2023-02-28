import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingThree from "./OnboardingThree";
import SkipBttn from "./SkipBttn";
import SwipeNavTwo from "./SwipeNavTwo";
import Txt from "./Txt";

export default function OnboardingTwo(){

    return(
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"white", flex: 1}}>
       <SkipBttn/>
        <View style={{alignItems:"center", marginTop: 32, backgroundColor:"green", justifyContent:"center", overflow:"hidden", height:250, width:250, alignSelf:"center", borderRadius:125}}>
            <Image  resizeMethod="resize" source={require('./../../assets/images/ImgTwo.png')} />
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
            </View>
    </SafeAreaView>
    )
}