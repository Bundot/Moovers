import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PaymentOptionsContainer from "./PaymentOptionsContainer";

export default function PaymentOptionsRadioButton() {
  const data = [
    {
        banknameandcard:"Groove Debit Card****0234",
        expirydate:"02/25",
        fullname:"Isaac Dauda",
        image:require('./../../assets/images/MastercardIcon.png'),
        imgstyle: {height:50, width: 80}
    },
    {
        banknameandcard:"Zenith Bank Debit Card****0234",
        expirydate:"06/30",
        fullname:"Alex Chukwudi",
        image: require('./../../assets/images/VisaCardIcon.png'),
        imgstyle: {height:40, width:100}
    },
    {
        banknameandcard:"Stanbic Ibtc Bank Debit Card****0234",
        expirydate:"09/26",
        fullname:"Ifeanyi Hassan",
        image:require('./../../assets/images/VerveIcon.png'),
        imgstyle: {height:35, width:105}
    },
  ];

  const onRadioButtonPress = (itemIdx) => {
    console.log("Clicked", itemIdx);
  };

  return (
    <View>
      <PaymentOptionsContainer values={data} onPress={onRadioButtonPress} />
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