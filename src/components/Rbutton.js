import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Txt from "./Txt";

export default function Rbutton({ isChecked, text, onRadioButtonPress, subtext }){

    const _renderCheckedView = () => {
        return isChecked ? (
          <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
      };
    
      return (
        <TouchableOpacity style={styles.container} onPress={onRadioButtonPress}>
          <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
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
      borderWidth: 1,
      borderColor: "#593761",
      height: 20,
      width: 20,
      borderRadius: 10,
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
    container:{
        //height:100, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
       //backgroundColor:"white"
    },

  });