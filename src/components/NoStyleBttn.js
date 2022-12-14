import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Txt from './Txt';



export default function NoStyleBttn({text, onPress, style,txtStyle}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={style} onPress={onPress}> 
               <Txt font={"PoppinsBold"} style={txtStyle}>{text}</Txt>
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
    
    
});