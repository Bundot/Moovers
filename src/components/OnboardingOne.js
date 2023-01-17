import { View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SkipBttn from "./SkipBttn";
import SwipeNavOne from "./SwipeNavOne";
import Txt from "./Txt";

export default function OnboardingOne(){
    return (
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"white", flex: 1}}>
            <SkipBttn/>
            <View style={{alignItems:"center", marginTop: 32, backgroundColor:"green", justifyContent:"center", overflow:"hidden", height:250, width:250, alignSelf:"center", borderRadius:125}}>
                <Image  resizeMethod="resize" source={require('./../../assets/images/ImgOne.png')}/>
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