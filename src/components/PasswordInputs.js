import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Txt from "./Txt";



export default function PasswordInputs({placeholder, text,onChangeText }) {
    const [textHidden, setTextHidden] = useState(true);
    return(
        <View style={styles.container}>
            <View style={styles.input}>   
            <View style={{flexDirection: "row"}}> 
            <Txt font={"InterLight"} style={styles.Txt}>   {text}  </Txt> 
            </View>
            <View style={{flexDirection: "row", paddingHorizontal:5}}>
            <TextInput placeholder={placeholder} placeholderTextColor="#B2B2B2" style={styles.Txtinput} onChangeText={onChangeText} secureTextEntry={textHidden} />
            <Txt onPress={() => setTextHidden(!textHidden)}>{textHidden == true ? "Show" : "Hide"}</Txt>
            </View>
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
        height: 45,
        flexGrow: 1,
        fontSize: 14,
       // backgroundColor:"yellow"
        }
})