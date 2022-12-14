import { View, StyleSheet, Image } from "react-native";

export default function Logo(){
    return(
        <View>
            <Image style={styles.logo} source={require('./../../assets/images/whitebgLogo-removebg-preview.png')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    logo:{
        alignSelf: "center", 
        marginLeft: 45 , 
        marginTop: 40,
        
    }
})