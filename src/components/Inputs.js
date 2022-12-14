import { View, StyleSheet, TextInput } from "react-native";
import Txt from "./Txt";



export default function Inputs({placeholder, text,onChangeText }) {
    return(
        <View style={styles.container}>
            <View style={styles.input}>   
            <View style={{flexDirection: "row"}}> 
            <Txt font={"InterLight"} style={styles.Txt}>   {text}  </Txt> 
            </View>
            <TextInput placeholder={placeholder} placeholderTextColor="#B2B2B2" style={styles.Txtinput} onChangeText={onChangeText}/>
            </View>
                
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
       // alignItems: "center",
       // justifyContent: "center",
       // paddingHorizontal: 30,
        marginTop: 50
    },

    input:{
        height: 50,
        width: "100%",
        borderRadius: 20,
        opacity: 3,
        borderWidth: 2,
       // marginTop: 100,
       // flexDirection: "row",
        fontSize: 30,
    
        
    },

    Txt:{
        color: "#B2B2B2",
        fontSize: 15,
        marginTop: -10,
        marginLeft: 40 ,
        backgroundColor: "white",
        height: 20
       
    },

    Txtinput: { 
        marginTop: -10,
       // marginLeft: 5,
       // alignItems: "center",
        width: "100%",
        height:"100%",
        fontSize: 14
        }
})