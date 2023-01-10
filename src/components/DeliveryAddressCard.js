import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SpecialInputs from "./SpecialInputs";
import Txt from "./Txt";

export default function DeliveryAddressCard(){
    return(
        
            <View style={styles.container}>
                <View style={styles.containera}>
                    <SpecialInputs icon={require('./../../assets/images/Ppic.png')} placeholder={"Full Name"}/>
                    <SpecialInputs icon={require('./../../assets/images/phoneCallIcon.png')} placeholder={"Phone Number"}/>
                    <SpecialInputs icon={require('./../../assets/images/MapIcon.png')} placeholder={"Address"}/>
                    <SpecialInputs icon={require('./../../assets/images/GoldLocationIcon.png')}/>
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:350, 
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
    }
})