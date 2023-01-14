import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SpecialInputs from "./SpecialInputs";
import Txt from "./Txt";

export default function CostDetailsCard({courierPrice, taxesandcharges, deliveryandpartner, topay}){
    return(
        
            <View style={styles.container}>
                <View style={styles.containera}>
                    <View style={{flexDirection:"row"}}>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2", flexGrow:1, flexShrink:1}}>Courier</Txt>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2"}}>₦{courierPrice}</Txt>
                    </View>
                    <View style={{flexDirection:"row", marginTop:20}}>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2", flexGrow:1, flexShrink:1}}>Taxes and Charges</Txt>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2"}}>₦{taxesandcharges}</Txt>
                    </View>
                    <View style={{flexDirection:"row", marginTop:20}}>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2", flexGrow:1, flexShrink:1}}>Delivery Partner Fee</Txt>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2"}}>₦{deliveryandpartner}</Txt>
                    </View>
                    <View style={{borderWidth:0.2, borderColor:"#1E1E1EB2", marginTop:20}}/>
                    <View style={{flexDirection:"row", marginTop:20}}>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#F7B932", flexGrow:1, flexShrink:1}}>To Pay</Txt>
                        <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#1E1E1EB2"}}>₦{topay}</Txt>
                    </View>
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:200, 
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
        backgroundColor:"white",
        paddingHorizontal: 20,
        paddingVertical:20
    }
})