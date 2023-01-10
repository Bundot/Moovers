import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "../components/Txt";

export default function TestingNavBarIcons(){
    return(
        <SafeAreaView>
       <View style={{ justifyContent:"center", alignItems:"center", flexDirection:"row", paddingHorizontal: 10, width: 130, height: 40, backgroundColor:"#D27203", borderRadius:50}}>
        <Image source={require('./../../assets/images/whiteHomeIcon.png')}/>
        <Txt font={"PoppinsBold"} style={{marginLeft: 10, color:"white"}}>Home</Txt>
        </View>
    </SafeAreaView>
    )
}