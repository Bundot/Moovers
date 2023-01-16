import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RadioButtonContainer from "./RadioButtonContainer";

export default function PaymentMethodRadioButton() {
  const data = [
    {
      text: "Pay Now",
      subtext:"Pay through UPI, Net Banking, Debit, Credit, google pay, Remita "
    },
    {
      text: "Pay at Pickup",
      subtext:"Pay using cash, Net Banking, UPI, Debit, Credit, Google Pay, Remita",
    },
    {
      text: "Pay at Delivery",
      subtext:"Receiver can pay using Cash, Net Banking/Debit, Credit, Google pay, Remita.",
    },
  ];

  const onRadioButtonPress = (itemIdx) => {
    console.log("Clicked", itemIdx);
  };

  return (
    <View>
      <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
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