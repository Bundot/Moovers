import { View, Image, StyleSheet, Text } from "react-native";
import NoStyleCheckBox from "./NoStyleCheckBox";
import Txt from "./Txt";
//import { LinearTextGradient } from "react-native-text-gradient"; 
import GradientText from "./GradientText";
import PackagesItems from "./PackagesItems";

export default function ProCard(){
    return(
        <View style={styles.container}>
                <View style={styles.containera}>
                    <View style={{marginTop:20, flexDirection:"row"}}>
                   <NoStyleCheckBox chkStyle={{height:20, width:20, borderRadius:10}}/>
                   <View style={{flexGrow:1, flexShrink:1, alignItems:"center"}}>
                   <GradientText txt={"LITE"} colora={"#4361EE"} colorb={"#42F732"} txtStyle={{fontSize:20}}/>
                   </View>
                   </View>
                   <PackagesItems icon={require('./../../assets/images/GreenThickIcon.png')} txt={"Door to Door Delivery"}/>
                   <PackagesItems icon={require('./../../assets/images/GreenThickIcon.png')} txt={"Multi Layered Packing"}/>
                   <PackagesItems icon={require('./../../assets/images/GreenThickIcon.png')} txt={"Basic Assembly and Disassembly"}/>
                   <PackagesItems icon={require('./../../assets/images/GreenThickIcon.png')} txt={"Carton Delivery Before 24hrs"}/>
                   <PackagesItems icon={require('./../../assets/images/CancelIcon.png')} txt={"Home Arranging Support"}/>
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:400, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
        marginTop:30
       //backgroundColor:"white"
    },

    containera:{
        height:"100%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white",
        paddingHorizontal:20
    },

    chkbx:{
        height:10, 
        width:10, 
        backgroundColor:"#D9D9D9", 
        borderWidth:1, 
        marginTop: 10
    }
})