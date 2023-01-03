import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function ProfileCard({image, title, subtext}){
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.container}>
                <Image source={image} style={{marginTop:10}} />
                <View style={styles.containerb}>
                    <Txt font={"PoppinsBold"}>{title}</Txt>
                    <Txt font={"PoppinsRegular"} style={{color:"#00000080"}}>{subtext}</Txt>
                </View>
                <Image source={require('./../../assets/images/rightBlackArrow.png')} style={styles.imgStyle}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: 23, 
        flexDirection:"row"
    },
    containerb:{
        marginLeft: 20, 
        flexGrow: 1
    },
    imgStyle:{
        alignSelf:"center", 
        justifyContent:"flex-end"
    }
})