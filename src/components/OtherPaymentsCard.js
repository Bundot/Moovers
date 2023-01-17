import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Txt from "./Txt";

export default function OtherPaymentsCard({image, text}){
    return(
        <TouchableOpacity style={styles.container}>
                <View style={styles.containera}>
                  <Image source={image}/>
                  <Txt font={"PoppinsBold"} style={{fontSize:14, alignSelf:"center", marginLeft: 20, flexGrow:1, flexShrink:1}}>{text}</Txt>
                  <Image source={require('./../../assets/images/GoldRightPointer.png')}/>
                </View>
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:70, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
        marginTop: 20
       //backgroundColor:"white"
    },

    containera:{
        height:"95%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white",
        paddingHorizontal: 20,
        paddingVertical:20,
        flexDirection:"row"
    }
})