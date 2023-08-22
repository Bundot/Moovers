import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import Txt from "./Txt";

export default function ModeOfCourierButton({text, onPress}){
    return(
        <View style={styles.mainContainer}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.containera} onPress={onPress} >
                <Txt font={"PoppinsBold"} style={styles.txt}>{text}</Txt>
                <Image source={require('./../../assets/images/SingleDeliveryBox.png')}/>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    txt:{
        color:"#FFFFFF", 
        fontSize:20,
        //marginLeft:31,
        flexGrow:1,
        flexShrink:1
    },

    mainContainer:{
        paddingHorizontal:35, 
        marginTop: 45,
    },

    container:{
        height:73, 
        borderRadius:10, 
        elevation:10, 
        //shadowColor:"#00000040",
        backgroundColor:"#593761",
        shadowColor:"black", 
        justifyContent:"center", 
        alignItems:"center",
        shadowOpacity:20
        
       //backgroundColor:"white"
    },

    containera:{
        height:71, 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"#593761",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:31
        
    }
})