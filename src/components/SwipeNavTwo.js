import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SwipeNavTwo(){
    return(
        <SafeAreaView>
            <View style={{flexDirection:"row"}}>
            <View style={{backgroundColor:"gray", width:6, height:6, borderRadius: 9}}></View>
            <View style={{backgroundColor:"#593761", width:20, height:6, borderRadius: 7, marginLeft: 3}}></View>
            <View style={{backgroundColor:"gray", width:6, height:6, borderRadius: 9, marginLeft: 3}}></View>
            </View>
        </SafeAreaView>
    )
}