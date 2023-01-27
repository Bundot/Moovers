import { View, TextInput, StyleSheet } from "react-native";

export default function BlueInput(){
    return(
        <View style={{paddingHorizontal:34, marginTop:20}}>
        <View style={{height:50, borderRadius:10, borderColor:"#4361EE", borderWidth:1, paddingHorizontal:5, overflow:"hidden"}}>
        <TextInput style={{height:50, fontSize:20}}/>
        </View>
        </View>
    )
}