import { View,StyleSheet,Image } from "react-native";
import Bttn from "./Bttn";
import NoStyleBttn from "./NoStyleBttn";
import Txt from "./Txt";

export default function NotYetDeliveredTracking({pickUpAddress, dropAddress}){
    return(
             
        <View style={{flexDirection:"row"}}>              
            <View style={{ width:30, marginLeft:10}}>
                <Image source={require('./../../assets/images/PickUpLocationIcon.png')}/>
                <View style={{borderWidth:0.5, height:200, width:0.1, borderStyle:"dashed", alignSelf:"center", borderColor:"blue", marginLeft:-5}}>
                    <View style={{height:10, width:10, borderRadius:5, backgroundColor:"#593761", marginLeft:-5, marginTop:30}}></View>
                    <View style={{height:10, width:10, borderRadius:5, backgroundColor:"#593761", marginLeft:-5, marginTop:40}}></View>
                    <View style={{height:10, width:10, borderRadius:5, backgroundColor:"#593761", marginLeft:-5, marginTop:40}}></View>
                </View>
                <Image source={require('./../../assets/images/DropLocationIcon.png')}/>
            </View>
            <View style={{ paddingRight:200}}>
                <View style={{}}>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>Order PickUp</Txt>
                <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>25th, Sunday, 8.00am</Txt>
                </View>
                <View style={{marginTop:10}}>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>Reached Point B</Txt>
                <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>26th, Monday, 8.00am</Txt>
                </View>
                <View style={{marginTop:10}}>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>Reached Point C</Txt>
                <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>27th, Teusday, 8.00am</Txt>
                </View>
                <View style={{marginTop:10}}>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>Reached Point D</Txt>
                <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>28th, Wednesday, 8.00am</Txt>
                </View>
                <View style={{flex:1, justifyContent:"flex-end",width:200}}>
                <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#00000080"}}>Order Delivered</Txt>
                <Txt font={"PoppinsRegular"} style={{ color:"#00000080"}}>29th, Thursday, 8.00am</Txt>
                </View>
            </View>
        </View>

)
}

const styles = StyleSheet.create({

})