import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PackageOptionsCard from "./PackageOptionsCard";
import PackagesContainer from "./PackagesContainer";

export default function PackageOptionsRadioButtons() {
  const data = [
    {
        txt:"LITE",
        colora:"#4361EE",
        colorb:"#90ECFD",
        icona: require('./../../assets/images/GreenThickIcon.png'),
        iconb:require('./../../assets/images/GreenThickIcon.png'),
        iconc:require('./../../assets/images/CancelIcon.png'),
        icond:require('./../../assets/images/GreenThickIcon.png'),
        icone:require('./../../assets/images/CancelIcon.png')
    },
    {
      txt: "PRO",
      colora:"#4361EE",
      colorb:"#42F732",
      icona: require('./../../assets/images/GreenThickIcon.png'),
      iconb:require('./../../assets/images/GreenThickIcon.png'),
      iconc:require('./../../assets/images/GreenThickIcon.png'),
      icond:require('./../../assets/images/GreenThickIcon.png'),
      icone:require('./../../assets/images/CancelIcon.png') 
    },
    {
      txt:"MAX",
      colora:"#EE4343",
      colorb:"#920707",
      icona: require('./../../assets/images/GreenThickIcon.png'),
      iconb:require('./../../assets/images/GreenThickIcon.png'),
      iconc:require('./../../assets/images/GreenThickIcon.png'),
      icond:require('./../../assets/images/GreenThickIcon.png'),
      icone:require('./../../assets/images/GreenThickIcon.png')
    },
  ];

  const onRadioButtonPress = (itemIdx) => {
    console.log("Clicked", itemIdx);
  };

  return (
    <View>
      <PackagesContainer values={data} onPress={onRadioButtonPress}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});