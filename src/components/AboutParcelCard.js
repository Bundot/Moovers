import Checkbox from "expo-checkbox";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutParcelChkBx from "./AboutParcelChkBx";
import AboutParcelInputA from "./AboutParcelInputA";
import AboutParcelInputB from "./AboutParcelInputB";
import SpecialInputs from "./SpecialInputs";
import Txt from "./Txt";

export default function AboutParcelCard({icon}){
    return(
        
        <View style={styles.container}>
                <View style={styles.containera}>
                    <View style={{flexDirection:"row"}}>
                    <AboutParcelInputA  placeholder={"Weight in kg"}/>
                    <AboutParcelInputB  placeholder={"Height in mm"}/>
                    </View>                  
                    <View style={{flexDirection:"row"}}>
                    <AboutParcelInputA  placeholder={"Width in mm"}/>
                    <AboutParcelInputB  placeholder={"Length in mm"}/>
                    </View>
                    <View style={{flexDirection:"row"}}>
                    <AboutParcelInputA  placeholder={"Qty"}/>
                    <AboutParcelChkBx text={"Require Packaging"} subtext={"(Charges Apply)"} style={styles.chkbx} color={"#593761"}/>
                    </View>
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:250, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
       //backgroundColor:"white"
    },

    containera:{
        height:"95%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white"
    },

    chkbx:{
        height:10, 
        width:10, 
        backgroundColor:"#D9D9D9", 
        borderWidth:1, 
        marginTop: 10
    }
})