import { View,StyleSheet, Image } from "react-native";
import AboutParcelInputA from "./AboutParcelInputA";
import AboutParcelInputB from "./AboutParcelInputB";
import CheckBox from "./CheckBox";
import NoStyleCheckBox from "./NoStyleCheckBox";
import Txt from "./Txt";

export default function PickUpAndDropCard({pickUpAddress, dropAddress}){
    return(
        <View style={styles.container}>
        <View style={styles.containera}>      
        <View style={{flexDirection:"row"}}>              
            <View style={{ width:30, marginLeft:38}}>
                <Image source={require('./../../assets/images/PickUpLocationIcon.png')}/>
                <View style={{borderWidth:0.5, height:150, width:1, borderStyle:"dashed", alignSelf:"center", borderColor:"blue", marginLeft:-5}}/>
                <Image source={require('./../../assets/images/DropLocationIcon.png')}/>
            </View>
            <View style={{ paddingRight:200}}>
                <View style={{}}>
                <Txt font={"PoppinsBold"} style={{fontSize:20, color:"#00000080"}}>Pickup</Txt>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>{pickUpAddress}</Txt>
                </View>
                <View style={{flex:1, justifyContent:"flex-end"}}>
                <Txt font={"PoppinsBold"} style={{fontSize:20, color:"#00000080"}}>Drop</Txt>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>{dropAddress}</Txt>
                </View>
            </View>
        </View>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
container:{
height:300, 
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
alignItems:"center",
flexDirection:"row"
},
})