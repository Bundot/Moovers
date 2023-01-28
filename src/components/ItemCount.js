import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Counter from "./Counter";
import Txt from "./Txt";

export default function ItemCount({icon, item}){
    return(
        <View style={{ marginTop:10, flexDirection:"row", borderBottomWidth:1, paddingVertical:14, borderBottomColor:"#4361EE"}}>
            <View style={{flexDirection:"row", flexGrow:1, flexShrink:1}}>
            <Image source={icon}/>
            <Txt font={"PoppinsRegular"} style={{fontSize:20, color:"#000000B2", marginLeft:11}}>{item}</Txt>
            </View>
            <Counter/>
        </View>
    )
}