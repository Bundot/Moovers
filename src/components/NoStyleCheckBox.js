import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { View } from 'react-native';
import Txt from './Txt';

export default function NoStyleCheckBox({text, style, chkStyle, txtstyle}){

    const [isChecked, setChecked]= useState(false);

    return(
        <View style={style}>
            <Checkbox value={isChecked} onValueChange={setChecked} style={chkStyle}/>
            <Txt font={"InterRegular"} style={txtstyle}>{text}</Txt>
        </View>
    )
}