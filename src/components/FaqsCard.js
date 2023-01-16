import { View, Image, TouchableOpacity } from "react-native";
import Txt from "./Txt";

export default function FaqsCard({text}){
    return(
        <TouchableOpacity style={{height:100, width:"100%", borderColor:"#00000012", borderWidth:1, paddingHorizontal:34}}>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000066", marginTop:20}}>Q: How much do you charge for 1kg for couriers</Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000066", marginTop:20}}>A: ₦500</Txt>
        </TouchableOpacity>
    )
}