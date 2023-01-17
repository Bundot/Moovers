import { View, Image, StyleSheet } from "react-native";

export default function Add({text}){
    return(
        <View style={{flexDirection:"row", marginLeft:20, marginTop:10}}>
                <Image source={require('./../../assets/images/addIcon.png')}/>
                <Txt font={"PoppinsRegular"} style={{color:"#593761", fontSize:14, marginLeft:5}}>{text}</Txt>
            </View>
    )
}