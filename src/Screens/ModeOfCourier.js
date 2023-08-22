import React from "react";
import { View,Image,Text, StyleSheet, Modal,Dimensions, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ModeOfCourierButton from "../components/ModeOfCourierButton";
import Txt from "../components/Txt";
 

export default function ModeOfCourier({navigation}){

    const singleDelivery = ()=> {
        navigation.navigate("SingleDeliveryScreen")
      }

      const multipleDelivery = ()=> {
        navigation.navigate("SingleDeliveryScreen")
      }

        return(
                <SafeAreaView style={{}}>
                <View style={{width:"100%", borderTopRightRadius:10, borderTopLeftRadius:10, paddingHorizontal:10}}>
                <View style={styles.topLine}></View>
                <Txt font={"PoppinsRegular"} style={styles.header}>Please Select the mode of courier</Txt>
                <View style={{marginBottom:20}}>
                <ModeOfCourierButton text={"Single Delivery"} onPress={singleDelivery} />
                <ModeOfCourierButton text={"Multiple Delivery"} onPress={multipleDelivery} />
                </View>
                </View>
            </SafeAreaView>
        )
    }

const styles=StyleSheet.create({

    header:{
        fontSize:16, 
        color:"#00000099", 
        alignSelf:"center",
        marginTop:26
    },

    topLine:{
        height:5, 
        backgroundColor:"#0000004D", 
        paddingHorizontal:100, 
        alignSelf:"center", 
        marginTop:10, 
        borderRadius:100
    }
})