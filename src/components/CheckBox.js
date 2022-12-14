import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { View } from 'react-native';
import Txt from './Txt';

export default function CheckBox({text}){

    const [isChecked, setChecked]= useState(false);

    return(
        <View style={{flexDirection: "row"}}>
            <Checkbox value={isChecked} onValueChange={setChecked}/>
            <Txt font={"InterRegular"} style={{marginLeft: 5}}>{text}</Txt>
        </View>
    )
}