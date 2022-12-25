import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function Offers({image, percentTxt, orderDescription}){
    return(  
    <SafeAreaView>
        <View style={styles.container}>
        <Image source={require('./../../assets/images/twentyPercentOfferImage.png')}/>
        <View style={{marginLeft: -20}}>
            <Txt font={"PoppinsBold"} style={{fontSize: 40, color:"white"}}>20%</Txt>
            <Txt font={"PoppinsBold"} style={{fontSize: 30, color:"white", marginTop: -20}}>OFF</Txt>
            <View style={{marginLeft:-20}}>
                <Txt font={"PoppinsRegular"} style={styles.txt}>Get 20% off offer</Txt>
                <Txt font={"PoppinsRegular"} style={styles.txt}>on your first order</Txt>
            </View> 
            <TouchableOpacity style={styles.arrowContainer}>
                <Image source={require('./../../assets/images/arrow.png')}/>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        height: 168, 
        width: 289, 
        borderRadius: 20, 
        backgroundColor:"#E9A822", 
        overflow:"hidden", 
        flexDirection:"row",
        marginLeft: 20
    },
    txt: {
        fontSize: 13,
        color:"white"
    },
    arrowContainer:{
        backgroundColor:"white", 
        height:25, 
        width: 60, 
        borderRadius: 100, 
        marginLeft: 30, 
        marginTop:10, 
        justifyContent:"center", 
        alignItems:"center"
    }
})