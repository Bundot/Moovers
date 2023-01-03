import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmptyTopLine({text, image}){
    return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={image}/>
                    </TouchableOpacity>
                <View style={{flexGrow:1, paddingHorizontal:10}}>
                    <Txt font={"PoppinsRegular"} style={styles.txt}>{text}</Txt>
                </View>
            </View>
    )
    }
    
    const styles=StyleSheet.create({
    container: {
        height:54, 
        backgroundColor:"#D27203", 
        flexDirection:"row", 
        alignItems:"center", 
        paddingHorizontal: 20 
        },
    
        txt: {
            color:"white", 
            fontSize:20,
            marginLeft:10
        }
    })