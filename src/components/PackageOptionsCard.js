import {StyleSheet, TouchableOpacity, View, Text, Image} from "react-native";
import ContactUsButton from "./ContactUsButton";
import NoStyleBttn from "./NoStyleBttn";
import Txt from "./Txt";
import GradientText from "./GradientText";
import PackagesItems from "./PackagesItems";

export default function PackageOptionsCard({ isChecked, onRadioButtonPress, icona, iconb, iconc, icond, icone,txt, colora, colorb }){

    const _renderCheckedView = () => {
        return isChecked ? (
          <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
      };
    
      return (
        <TouchableOpacity style={styles.container} onPress={onRadioButtonPress}>
            <View style={styles.containera}>
          <View style={{marginTop:20, flexDirection:"row"}}>
          <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
                   <View style={{flexGrow:1, flexShrink:1, alignItems:"center"}}>
                   <GradientText txt={txt} colora={colora} colorb={colorb} txtStyle={{fontSize:20}}/>
                   </View>
                   </View>
            
                   <PackagesItems icon={icona} txt={"Door to Door Delivery"}/>
                   <PackagesItems icon={iconb} txt={"Multi Layered Packing"}/>
                   <PackagesItems icon={iconc} txt={"Basic Assembly and Disassembly"}/>
                   <PackagesItems icon={icond} txt={"Carton Delivery Before 24hrs"}/>
                   <PackagesItems icon={icone} txt={"Home Arranging Support"}/>
          </View>
        </TouchableOpacity>
      );
  }

  const styles = StyleSheet.create({

    container:{
        height:400, 
        borderRadius:10, 
        elevation:10, 
        shadowColor:"#00000040", 
        justifyContent:"center", 
        alignItems:"center",
        marginTop:30
       //backgroundColor:"white"
    },
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
     // flexDirection: "row",
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
      height: 15,
      width: 15,
      backgroundColor: "#593761",
      borderRadius: 15/2,
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

   

    containera:{
        height:"100%", 
        width:"100%", 
        borderRadius:10, 
        backgroundColor:"white",
        paddingHorizontal:20
    },

  });