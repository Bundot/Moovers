import { Image, View } from "react-native";
import Txt from "./Txt";

export default function ParcelDetails({dimA,dimB,dimC, item, weight, qty}){
    return(
       
        <View style={{flexDirection:"row"}}>
            <Image source={require('./../../assets/images/packageBox.png')}/>
            <View style={{borderLeftWidth:1, height: 70, marginTop:35, marginLeft:-10, justifyContent:"center",transform: [{rotate: '-2deg'}]}}>
                <Txt style={{transform: [{rotate: '90deg'}], marginLeft:-7}}>{dimA}MM</Txt>
            </View>
            <View style={{borderLeftWidth:1, height: 70, marginTop:35, marginTop:100, justifyContent:"center",transform: [{rotate: '60deg'}], marginLeft:-58}}>
                <Txt style={{transform: [{rotate: '90deg'}], marginLeft:-7}}>{dimB}MM</Txt>
            </View>
            <View style={{borderLeftWidth:1, height: 70, marginTop:35, marginTop:100, justifyContent:"center",transform: [{rotate: '118deg'}], marginLeft:-100}}>
                <Txt style={{transform: [{rotate: '90deg'}], marginLeft:-7}}>{dimC}MM</Txt>
            </View>
        <View style={{alignSelf:"center", justifyContent:"center", marginLeft: 150}}>
            <Txt font={"PoppinsBold"} style={{fontSize: 16}}>Item: {item}</Txt>
            <Txt font={"PoppinsBold"} style={{fontSize: 16}}>Weight: {weight}KG</Txt>
            <Txt font={"PoppinsBold"} style={{fontSize: 16}}>Qty: {qty}</Txt>
        </View>
        </View>
    )
}