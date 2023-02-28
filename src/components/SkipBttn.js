import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SkipBttn(){
    const navigation = useNavigation(); 
    return(
        <View style={{alignItems:'flex-end', marginTop: 90}}>
            <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')} style={{backgroundColor:"#5937610D", height:30, width:50, justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <Txt font={"PoppinsBold"} style={{color:"#593761", fontSize: 14}}>Skip</Txt>
                </TouchableOpacity>
            </View>
    )
}