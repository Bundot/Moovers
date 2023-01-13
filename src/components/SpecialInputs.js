import { View, Image, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function SpecialInputs({placeholder, icon, style}){
    return(
        <View>
           <View style={{flexDirection:"row", marginTop: 30, paddingHorizontal:20}}>
            <View style={{borderBottomWidth:1,borderBottomColor:"#00000040", flexDirection: "row", flexGrow:1, flexShrink:1, paddingVertical: 7}}>
            <Image source={icon} style={{marginTop:10}}/>
            <TextInput style={{ flexGrow:1, flexShrink:1, fontSize: 14, marginLeft:10}} placeholder={placeholder}/>
            </View>
            </View> 
        </View>
    )
}