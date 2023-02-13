import { View,StyleSheet, Image } from "react-native";
import AboutParcelInputA from "./AboutParcelInputA";
import AboutParcelInputB from "./AboutParcelInputB";
import CheckBox from "./CheckBox";
import NoStyleCheckBox from "./NoStyleCheckBox";
import Txt from "./Txt";

export default function CancelOrderTracking({pickUpAddress, dropAddress}){
    return(     
        <View style={{flexDirection:"row", marginTop:20}}>              
            <View style={{ width:30}}>
                <Image source={require('./../../assets/images/PickUpLocationIcon.png')}/>
                <View style={{borderWidth:0.5, height:80, width:1, borderStyle:"dashed", alignSelf:"center", borderColor:"blue", marginLeft:-5}}/>
                <Image source={require('./../../assets/images/DropLocationIcon.png')}/>
            </View>
            <View style={{ paddingRight:200}}>
                <View style={{}}>
                <Txt font={"PoppinsBold"} style={{fontSize:20, color:"#00000080"}}>Order Pickup</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#00000080"}}>5th Sunday, 2023</Txt>
                </View>
                <View style={{flex:1, justifyContent:"flex-end"}}>
                <Txt font={"PoppinsBold"} style={{fontSize:20, color:"#00000080"}}>Kubwa</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#00000080"}}>25th May, 2023</Txt>
                </View>
            </View>
        </View>
 
)
}

const styles = StyleSheet.create({

})