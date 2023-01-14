import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Txt from "./Txt";

export default function ReferAndEarnCard({colorza, colorzb,  offer, title,  couponCode, percentage, extraInfo}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerzee}>
                <View style={styles.containerzeeee}>
            <View style={styles.containerb}>
            <LinearGradient colors={[colorza, colorzb]} style={styles.containerc}>
                    <Txt font={"PoppinsBold"} style={styles.txtcontainer}>{offer}</Txt>
                </LinearGradient> 
                <View style={styles.containerd}>
                <Txt font={"PoppinsBold"} style={styles.txtcontainera}>{title}</Txt>
                <Txt font={"PoppinsRegular"} style={styles.txtcontainerb}>Use code {couponCode} and get {percentage} off {extraInfo}</Txt>
                </View>
                </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17
    },
    containerb:{
        height: 101, 
       // borderWidth: 1, 
        borderRadius: 10, 
        flexDirection:"row", 
        overflow:"hidden"
    },
    containerc: {
        flexGrow: 1,
        flexShrink:1, 
        backgroundColor: 'red', 
        alignItems: 'center', 
        justifyContent: 'center'
        //width:"50%",
        //transform: [{ rotate: '-90deg'}], 
        //backgroundColor:"red", 
        //marginLeft: -120
    },
    txtcontainer:{
        //flex:1,
        width: 70,
        fontSize: 16, 
        color:"white", 
        transform: [{ rotate: '-90deg'}],
        //backgroundColor:"green", 
        //justifyContent:"center", 
         alignSelf:"center", 
       // marginTop: 75
    },

    containerd: {
        flexGrow:2, 
        flexShrink: 2, 
        paddingHorizontal: 10
    },

    txtcontainera: {
        marginTop: 10,
        fontSize:16, 
        color:'#000000B2'
    },

    txtcontainerb: {
        marginTop: 10,
        fontSize:10, 
        color:'#1E1E1EB2'
    },

    containerzee:{
        height:104, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
       //backgroundColor:"white"
    },

    containerzeeee:{
        height:"95%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white"
    }

})