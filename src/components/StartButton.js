import { View, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StartButton(){
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
               <View>
               <View style={styles.containera}></View>
               <View style={styles.containerb}></View>
               
               
               </View>
               
               
               
        </View>
    )
}

const styles = StyleSheet.create({
    containera:{
        width: 300,
        height: 100,
        backgroundColor: "pink",
       // borderRadius:30,
        borderWidth: 5,
        borderTopColor:"green",
        borderBottomColor: "blue",
        borderLeftColor: "yellow",
        borderRightColor:"orange",
        borderTopEndRadius: 50,
        borderBottomEndRadius: 50,
        borderBottomStartRadius:50,
        borderTopStartRadius: 50,

       
        
    },
    containerb:{
        width: 100,
        height: 100,
        borderLeftWidth: 40,
        borderRightWidth: 40,
        backgroundColor: "red",
        //borderBottomWidth: 40,
        borderBottomWidth: 45,
        borderTopColor: "transparent",
        borderBottomColor:"transparent",
        transform: [{rotate: '90deg'}]
       
       

    },
    containerc:{
        width: 25,
        height: 24,
       // position: "absolute",
       // top: 0,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#6427d1",
        //top: 100
       //transform:[{skewY:'30deg'}],

    },

    containerd:{
        borderRightWidth: 40,
        backgroundColor: "red",
        borderBottomWidth: 45,
        borderTopWidth: 45,
        borderTopColor: "transparent",
        borderBottomColor:"transparent",
       // transform:[{skewY:'10deg'}],
       // top:-22,
        //right:180
    }
})