import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Txt from "./Txt";

export default function RadioButton({ isChecked, text, onRadioButtonPress, subtext }){

    const _renderCheckedView = () => {
        return isChecked ? (
          <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
      };
    
      return (
        <TouchableOpacity style={styles.container} onPress={onRadioButtonPress}>
            <View style={styles.containera}>
          <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
          <View style={[styles.radioButtonTextContainer]}>
            <Txt font={"PoppinsBold"} style={styles.radioButtonText}>{text}</Txt>
            <Txt font={"PoppinsRegular"} style={styles.radioButtonSubText}>{subtext}</Txt>
          </View>
          </View>
        </TouchableOpacity>
      );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      height: 50,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: "center",
      paddingLeft: 10,
      paddingRight: 10,
      borderWidth: 0.5,
      borderColor: "red",
      flexDirection: "row",
      alignItems: "center",
    },
    radioButtonIcon: {
      backgroundColor: "white",
      borderWidth: 3,
      borderColor: "#593761",
      height: 30,
      width: 30,
      borderRadius: 15,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    radioButtonIconInnerIcon: {
      height: 20,
      width: 20,
      backgroundColor: "#593761",
      borderRadius: 10,
      borderWidth: 3,
      borderColor: "white",
    },
    radioButtonTextContainer: {
      flex: 5,
      height: 50,
      justifyContent: "center",
      paddingLeft: 10,
      paddingRight:100,
    },

    radioButtonText: {
      fontSize: 18,
      color:"#000000B2",
    },
    radioButtonSubText: {
        fontSize: 10,
        color:"#1E1E1EB2"
    },

    container:{
        height:100, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
       //backgroundColor:"white"
    },

    containera:{
        height:"95%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white",
        paddingHorizontal: 20,
        paddingVertical:20,
        flexDirection:"row",
    }
  });