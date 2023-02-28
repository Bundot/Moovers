import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import Txt from "./Txt";

export default function FaqsCard({question, answer}){
    return(
        
        <TouchableOpacity style={{height:100, width:"100%", borderColor:"#00000012", borderWidth:1, paddingHorizontal:34}}>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000066", marginTop:20}}>Q:{question}</Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000066", marginTop:20}}>A:{answer}</Txt>
        </TouchableOpacity>
        
    )
}