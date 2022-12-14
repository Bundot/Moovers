import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Txt from './Txt';



export default function Bttn({text, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Bttn} onPress={onPress}> 
               <Txt font={"PoppinsRegulars"} style={{color:"white", fontSize: 16}}>{text}</Txt>
            </TouchableOpacity>
            </View>
    )
}

const styles= StyleSheet.create({
    container: { 
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center"
    },
    Bttn:{
        backgroundColor: "#593761",
        height: 52,
        width: 290,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    
});