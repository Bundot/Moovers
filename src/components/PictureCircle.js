import { View, StyleSheet, Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PictureCircle({image}){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={image} style={styles.imgCont}/>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        height:100, 
        width:100, 
        borderRadius:50, 
        backgroundColor:"gray", 
       // alignSelf:"center"
    },

    imgCont: {
        height:100, 
        width:100, 
        borderRadius:50
    }
})