import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SpecialInputs from "./SpecialInputs";
import Txt from "./Txt";

export default function ApplyOfferCard({onpress, offer}){
    return(
        <View>
            <TouchableOpacity style={styles.container} onPress={onpress}>
                <View style={styles.containera}>
                    <View style={{flexGrow:1, flexShrink:1}}>
                        <Txt font={"PoppinsBold"}>Apply Offer</Txt>
                        <Txt font={"PoppinsRegular"}>{offer}</Txt>
                    </View>
                    <Image source={require("./../../assets/images/goldArrow.png")} style={{marginTop:10}}/>
                </View>
            </TouchableOpacity>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:67, 
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
        paddingVertical: 10,
        flexDirection:"row",
    }
})