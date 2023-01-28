import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Txt from "./Txt";

export default function Counter(){

    const [count, setCount] = useState(0);

    return(
        <View style={{height:21, width:65, borderWidth:1, borderRadius:20, flexDirection:"row", overflow:"hidden"}}>
            <TouchableOpacity onPress={() => setCount(count- 1)} style={{ height:21, width:22, backgroundColor:"#593761", alignItems:"center", justifyContent:"center" }}>
                <Txt font={"PoppinsRegular"} style={{color:"white"}}>-</Txt>
            </TouchableOpacity>
            <View style={{ height:21, width:22, backgroundColor:"white", alignItems:"center", justifyContent:"center" }}>
                <Txt font={"PoppinsRegular"} style={{color:"#F7B932"}}>{count}</Txt>
            </View>
            <TouchableOpacity onPress={() => setCount(count+ 1)} style={{ height:21, width:22, backgroundColor:"#593761", alignItems:"center", justifyContent:"center" }}>
                <Txt font={"PoppinsRegular"} style={{color:"white"}}>+</Txt>
            </TouchableOpacity>
            
        </View>
    )
}