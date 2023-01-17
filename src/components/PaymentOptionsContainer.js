import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PaymentRadioButton from "./PaymentRadioButton";

export default function PaymentOptionsContainer({ values, onPress }) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(0);

  const _onPress = (idx) => {
    onPress(idx);
    setCurrentSelectedItem(idx);
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem, idx) => {
      let isChecked = currentSelectedItem === idx ? true : false;
      return(
        <PaymentRadioButton
        key={idx}
        onRadioButtonPress={() => _onPress(idx)}
        isChecked={isChecked}
        banknameandcard={listItem.banknameandcard}
        expirydate={listItem.expirydate}
        fullname={listItem.fullname}
        image={listItem.image}
        imgstyle={listItem.imgstyle}
        />
      );
    });
  };

  return <View>{_renderRadioButtons()}</View>;
}