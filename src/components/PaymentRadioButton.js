import {StyleSheet, TouchableOpacity, View, Text, Image} from "react-native";
import ContactUsButton from "./ContactUsButton";
import NoStyleBttn from "./NoStyleBttn";
import Txt from "./Txt";

export default function PaymentRadioButton({ isChecked, onRadioButtonPress, banknameandcard, fullname, expirydate, image, imgstyle }){

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
            <Txt font={"PoppinsBold"} style={styles.radioButtonText}>{banknameandcard}</Txt>
            <Txt font={"PoppinsRegular"} style={styles.radioButtonFullName}>{fullname}</Txt>
            <Txt font={"PoppinsRegular"} style={styles.radioButtonFullName}>Expires on {expirydate}</Txt>
            <View style={{flexDirection:"row"}}>
            <View style={{flexGrow:1, flexShrink:1}}>
            <NoStyleBttn style={{borderWidth:1, height:30, width:80, borderRadius:5, borderColor:"#593761", justifyContent:"center", alignItems:"center"}} text={"Enter cvv"} txtStyle={{color:"#593761", fontSize:12}}/>
            </View>
            <Image source={image} style={imgstyle}/>
            </View>
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
      marginTop: 30,
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
      marginTop: 30,
      flex: 5,
      height: 50,
      justifyContent: "center",
      paddingLeft: 10,
      //paddingRight:100,
    },

    radioButtonText: {
      fontSize: 14,
      color:"#000000B2",
    },
    radioButtonFullName: {
        fontSize: 10,
        color:"#1E1E1EB2"
    },

    container:{
        height:150, 
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