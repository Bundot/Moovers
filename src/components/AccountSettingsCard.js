import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function AccountSettingsCard({image, text}){
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.container}>
                <Image source={image}/>
                <Txt font={"PoppinsRegular"} style={styles.txt}>{text}</Txt>
                <Image source={require('./../../assets/images/editIcon.png')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row", 
        paddingHorizontal: 24,
        marginTop:20
    },
    txt:{
        fontSize: 14, 
        marginLeft: 23, 
        flexGrow: 1, 
        flexShrink: 1,
        color: "#00000080"

    }
})