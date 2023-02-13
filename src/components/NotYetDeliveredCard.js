import { View,StyleSheet } from "react-native";
import NoStyleBttn from "./NoStyleBttn";
import NotYetDeliveredTracking from "./NotYetDeliveredTracking";
import Txt from "./Txt";

export default function NotYetDeliveredCard(){
    return(
        <View style={styles.container}>
        <View style={styles.containera}>
            <View style={{paddingHorizontal:12}}>
            <View style={{flexDirection:"row", paddingHorizontal:12, marginTop:12}}>
           <View style={{flexGrow:1, flexShrink: 1}}>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>Status</Txt>
            <Txt font={"PoppinsBold"} style={{color:"#593761", fontSize:15}}>Not Yet Delivered</Txt>
           </View>
           <View>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>`To be Delivered on</Txt>
            <Txt font={"PoppinsBold"} style={{color:"#593761", fontSize:15}}>25th, December 2023</Txt>
           </View>
           </View>
           <View style={{borderColor:"#00000033", borderWidth:1, width:"100%", marginTop:5}}></View>
           <Txt font={"PoppinsRegular"} style={{color:"#00000080", alignSelf:"flex-end"}}>Tracking ID: 99008877</Txt>
           <NotYetDeliveredTracking/>
           <View style={{alignSelf:"flex-end", marginTop:-30}}>
            <NoStyleBttn text={"Track Order"} 
            style={{backgroundColor:"#593761", 
            height:30, 
            width:90, 
            alignItems:"center", 
            justifyContent:"center", 
            borderRadius:10}} 
            txtStyle={{color:"white"}}/>
            <Txt font={"PoppinsBold"} style={{color:"#F81313", alignSelf:"flex-end", fontSize:15}}>Cancel Order</Txt>
           </View>
           </View>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
container:{
height:400, 
borderRadius:10, 
//elevation:, 
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