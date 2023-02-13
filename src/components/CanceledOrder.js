import { View,StyleSheet,Image } from "react-native";
import CancelOrderTracking from "./CancelOrderTracking";
import Txt from "./Txt";

export default function CanceledOrder(){
    return(
        <View style={styles.container}>
        <View style={styles.containera}>
            <View style={{paddingHorizontal:12, marginTop:10, flexDirection:"row"}}>
           <View style={{flexGrow:1, flexShrink:1}}>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>Status</Txt>
            <View style={{flexDirection:"row", marginTop:5}}>
            <Image source={require("./../../assets/images/CancelOrderIcon.png")}/>
            <Txt font={"PoppinsRegular"} style={{alignSelf:"center", color:"#F81313"}}>Canceled</Txt>
            </View>
            </View>
            <View>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", alignSelf:"flex-end"}}>Delivered on</Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:20, color:"#593761"}}>25th May, 2023</Txt>
            </View>
            </View> 
            <View style={{borderColor:"#00000033", borderWidth:1, width:"100%", marginTop:5}}></View>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", alignSelf:"flex-end"}}>Tracking ID: 99008877</Txt>
            <CancelOrderTracking/>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
container:{
height:270, 
borderRadius:10, 
//elevation:10, 
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
paddingHorizontal:14
},

chkbxcontainer:{
    flexDirection:"row", 
    marginTop:20, 
    justifyContent:"flex-end", 
    marginRight:20
},

chkbx:{
    height: 10, 
    width:10, 
    backgroundColor:"#D9D9D9", 
    borderWidth:0
},

chkbxtxt:{
    marginLeft: 5, 
    fontSize:10
},
})