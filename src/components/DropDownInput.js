import { View, Text, Image, TextInput, StyleSheet} from "react-native";
import Txt from "./Txt";

export default function DropDownInput(){
    return(
        <View style={styles.container}>
        <View style={styles.containera}>
            <View style={{ flexGrow:1, flexShrink:1, paddingHorizontal:10, justifyContent:"center"}}>
                <Txt font={"PoppinsRegular"} style={{color:"#1E1E1E80"}}>Document</Txt>
            </View>
            <Image source={require('./../../assets/images/DropDownIcon.png')} style={{alignSelf:"center"}}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:44, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
        overflow:"hidden",
        
        
       //backgroundColor:"white"
    },

    containera:{
        height:"95%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white",
        flexDirection:"row",
        paddingHorizontal: 10
    }
})