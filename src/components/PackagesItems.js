import { View, Image, StyleSheet } from "react-native";
import Txt from "./Txt";

export default function PackagesItems({txt,icon}){
    return(
        <View style={{flexDirection:"row", marginTop:40}}>
            <Txt font={"PoppinsRegular"} style={{fontSize:16}}>{txt}</Txt>
            <Image source={icon} style={{marginLeft:5}}/>
        </View>
    )
}