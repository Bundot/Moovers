import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function SwipeTest({navigation}){
    const onSelectOption =()=>{
        navigation.navigate("ModeOfCourier")
    }
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity style={{height:100, width:200, backgroundColor:"black"}} onPress={onSelectOption}></TouchableOpacity>
        </View>
    )
}