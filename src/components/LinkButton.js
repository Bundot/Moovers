import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Txt from './Txt';



export default function LinkButton({text, onPress, image}) {
    return (
        <View style={styles.container}>
            <View style={styles.Bttn} onPress={onPress}> 
            <View>
                <View style={{ height: 31, width: 31}}>
                    <Image source={image}/>
                </View>
            </View>
            <View style={{ alignItems:"center", flexGrow: 1}}>
               <Txt font={"PoppinsBold"} style={{color:"black"}} onPress={onPress}>{text}</Txt>
               </View>
            </View>
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
        backgroundColor: "white",
        borderColor:"#593761",
        borderWidth:2,
        paddingHorizontal: 4,
        height: 52,
      //  width: 290,
        borderRadius: 15,
        alignItems: "center",
       // justifyContent: "center",
        marginTop: 30,
        flexDirection:"row"
    },
    
});