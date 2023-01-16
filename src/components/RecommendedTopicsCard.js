import { View, Image, TouchableOpacity } from "react-native";
import Txt from "./Txt";

export default function RecommendedTopicsCard({text}){
    return(
        <TouchableOpacity style={{alignItems:"center", height:50, width:"100%", borderColor:"#00000012", borderWidth:1, flexDirection:"row", paddingHorizontal:34}}>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000066", flexGrow:1, flrxShrink:1}}>{text}</Txt>
            <Image source={require('./../../assets/images/GoldArrowRight.png')}/>
        </TouchableOpacity>
    )
}