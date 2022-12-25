import { View, Text, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function NotificationCards({title, details, color, extra}){
    return(
        
            <TouchableOpacity style={styles.container}>
                <Txt font={"PoppinsBold"} style={{fontSize:16, color:{color}}}>{title}</Txt>
                <Txt font={"PoppinsBold"} style={{fontSize:12, color:"#00000080"}}>{details}</Txt>
                <Txt font={"PoppinsBold"} style={{fontSize:12, color:"#00000080"}}>{extra}</Txt>
            </TouchableOpacity>
        
    )
}

const styles=StyleSheet.create({
    container:{
        height: 80, 
        borderWidth:1, 
        borderColor:"#C0C0C0", 
        paddingHorizontal:25, 
        justifyContent:"center"
    },
})