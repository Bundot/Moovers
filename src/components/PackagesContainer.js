import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PackageOptionsCard from "./PackageOptionsCard";

export default function PackagesContainer({ values, onPress }) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(0);

  const _onPress = (idx) => {
    onPress(idx);
    setCurrentSelectedItem(idx);
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem, idx) => {
      let isChecked = currentSelectedItem === idx ? true : false;
      return(
        <PackageOptionsCard
        key={idx}
        onRadioButtonPress={() => _onPress(idx)}
        isChecked={isChecked}
        icona={listItem.icona}
        iconb={listItem.iconb}
        iconc={listItem.iconc}
        icond={listItem.icond}
        icone={listItem.icone}
        txt={listItem.txt}
        colora={listItem.colora}
        colorb={listItem.colorb}
        />
      );
    });
  };

  return <View>{_renderRadioButtons()}</View>;
}