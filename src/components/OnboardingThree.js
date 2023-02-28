import { View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import SwipeNavThree from "./SwipeNavThree";
import Txt from "./Txt";

export default function OnboardingThree(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"white", flex: 1}}>
        <View style={{alignItems:"center", marginTop: 122, backgroundColor:"green", justifyContent:"center", overflow:"hidden", height:250, width:250, alignSelf:"center", borderRadius:125}}>
            <Image  resizeMethod="resize" source={require('./../../assets/images/ImgThree.png')} />
        </View>
        <View style={{alignItems:"center", marginTop:18}}>
            <Txt font={"PoppinsBold"} style={{color:"#F7B932", fontSize: 16}}>24/7 Service</Txt>
        </View>
        <View style={{alignItems:"center", marginTop: 15, paddingHorizontal: 39}}>
            <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>Experience the next level of</Txt>
        </View>
        <View style={{alignItems:"center", paddingHorizontal: 39}}>
            <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>courier service</Txt>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')} style={{alignSelf:"center", flexDirection:"row", marginTop:200, marginRight:20}}>
        <Image source={require('./../../assets/images/specialbutton.png')} />
        <Txt font={"PoppinsBold"} style={{alignSelf:"center", marginLeft: -65, color:"white"}}>Start</Txt>
        </TouchableOpacity>
    </SafeAreaView>
    )
}