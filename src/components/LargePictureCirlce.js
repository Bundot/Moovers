import { View, StyleSheet, Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LargePictureCircle({image}){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={image} style={styles.imgCont}/>
                <Image source={require('./../../assets/images/cameraIcon.png')} style={styles.iconCont}/>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        height:150, 
        width:150, 
        borderRadius:75, 
        backgroundColor:"gray", 
       // alignSelf:"center"
    },

    imgCont: {
        height:150, 
        width:150, 
        borderRadius:75
    },

    iconCont:{
        marginLeft:130, 
        marginTop: -20
    }
})