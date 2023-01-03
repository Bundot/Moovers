import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewSearchBox(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerb}>
                <Image source={require('./../../assets/images/anotherSearchIcon.png')} style={styles.image}/>
                <TextInput placeholder="Enter Coupon Code" style={styles.input} placeholderTextColor="#1E1E1E80"/>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: 17
    },

    containerb:{
        height: 46, 
        borderWidth: 1, 
        borderRadius: 100, 
        paddingHorizontal: 10, 
        flexDirection:"row", 
        borderColor:"#593761"
    },

    image: {
        alignSelf:"center"
    },
    input:{ 
        width:"95%", 
        fontSize: 13
    }
})