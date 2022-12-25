import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {  SafeAreaView } from "react-native-safe-area-context";
import UsersInput from "./UsersInput";

export default function SearchBox(){
    return(
     <SafeAreaView style={styles.container}>
        <View style={styles.inputs}>
           <TextInput style={styles.textInputs} placeholder={"Enter Your Courier name or Tracking ID"}/> 
        </View>
        <TouchableOpacity style={styles.searchIcon}>
            <Image source={require('./../../assets/images/SearchIcon.png')}/>
        </TouchableOpacity>
     </SafeAreaView>   
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
},
    inputs: {height: 46, 
    borderWidth:1, 
    borderColor:"#593761", 
    flexGrow: 1, 
    flexShrink:1, 
    borderRadius: 100, 
    justifyContent:"center", 
    paddingHorizontal: 10
},
    textInputs: {
        height: 46, 
        borderRadius: 100, 
        fontSize:21,
    },

    searchIcon: {height:41, 
        width:41, 
        borderRadius:10, 
        backgroundColor:"#593761",  
        justifyContent:"center", 
        alignItems:"center", 
        marginLeft: 5
    }
})