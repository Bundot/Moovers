import { View,StyleSheet, Image } from "react-native";
import Txt from "./Txt";


export default function MovingDetails({date, time, itemNumber}){
    return(
        <View style={{paddingRight:50}}>
            <View style={{flexDirection:"row", marginTop:20}}>
            <View style={{flexDirection:"row", flexGrow:1, flexShrink:1}}>
            <Image source={require('./../../assets/images/CalenderIcon.png')}/>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", marginLeft:10}}>{date}</Txt>
            </View>
            <View style={{flexDirection:"row"}}>
            <Image source={require('./../../assets/images/ClockIcon.png')}/>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", marginLeft:10}}>{time}</Txt>
            </View>     
            </View>
            <View style={{flexDirection:"row", marginTop:50}}>
            <Image source={require('./../../assets/images/box.png')}/>
            <Txt font={"PoppinsRegular"} style={{color:"#00000080", marginLeft:10}}>{itemNumber} Items</Txt>
            </View>  
            </View>           

)
}

const styles = StyleSheet.create({
container:{

},

})