import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function BookingsCard({image, text}){
    return(
        <SafeAreaView>
            <View style={{flexDirection:"row", paddingHorizontal:20, backgroundColor:"white"}}>
                <Image source={image}/>
                <Txt font={"PoppinsBold"} style={{alignSelf:"center", flexGrow:1, marginLeft: 20, fontSize:20,  color:"#593761"}}>{text}</Txt>
                <Image source={require('./../../assets/images/rightBlackArrow.png')} style={{alignSelf:"center"}}/>
            </View>
        </SafeAreaView>
    )
}