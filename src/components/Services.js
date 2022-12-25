import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function Services({topic,image,description}){
    return(
        <SafeAreaView>
            <View style={{height:159, borderWidth:2, borderRadius:20, borderColor:"#4361EE", backgroundColor:"white", overflow:"hidden"}}>
                <Txt font={"PoppinsBold"} style={{color:"#F7B932", fontSize:20, paddingLeft: 20, paddingTop: 10}}>{topic}</Txt>
                <View style={{flexDirection:"row",  height: 50}}>
                <Image source={image}/>
                <Txt font={"PoppinsRegular"} style={{fontSize:14,  width: 150, alignSelf:"center"}}>{description}</Txt>
                </View>
                <TouchableOpacity style={{backgroundColor:"#593761", width: 128, height: 42, marginTop: 26, alignSelf:"flex-end", borderTopLeftRadius:20, borderTopRightRadius:5, borderBottomRightRadius:20, borderBottomLeftRadius:5, flexDirection:"row", flex: 1, justifyContent:"center", alignItems:"center"}}>
                    <Txt font={"PoppinsBold"} style={{color:"white", fontSize:14}}>Book now</Txt>
                    <Image source={require('./../../assets/images/whiteArrow.png')} style={{marginLeft: 10}}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}