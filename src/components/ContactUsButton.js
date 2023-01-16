import { View, TouchableOpacity, Image } from "react-native";
import Txt from "./Txt";

export default function ContactUsButton({icon, text}){
    return(
        <TouchableOpacity style={{height:34, width:157, borderRadius: 10, borderColor:"#593761", borderWidth:1, marginLeft:24, alignItems:"center", flexDirection:"row", marginTop:10}}>
            <Image source={icon} style={{marginLeft:10}}/>
            <Txt font={"PoppinsRegular"} style={{marginLeft:10, color:"#000000B2"}}>{text}</Txt>
        </TouchableOpacity>
    )
}