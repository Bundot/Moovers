import { View, Image, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function DeliveryAddressSummary({icon, placeholder}){
    return(
        <View>
           <View style={{flexDirection:"row", marginTop: 30, paddingHorizontal:20}}>
            <Image source={icon} style={{marginTop:7}}/>
            <TextInput style={{ flexGrow:1, flexShrink:1, fontSize: 14, marginLeft:10}} placeholder={placeholder} editable={false}/>
            </View> 
        </View>
    )
}