import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { View } from 'react-native';
import Txt from './Txt';

export default function AboutParcelChkBx({text, subtext, style, color}){

    const [isChecked, setChecked]= useState(false);

    return(
        <View style={{flexDirection: "row", marginTop: 20}}>
            <Checkbox value={isChecked} onValueChange={setChecked} style={style} color={color}/>
            <View>
            <Txt font={"PoppinsRegular"} style={{marginLeft: 5, color:"#00000080", fontSize:10 }}>{text}</Txt>
            <Txt font={"PoppinsRegular"} style={{marginLeft: 5, color:"#00000080", fontSize:10}}>{subtext}</Txt>
            </View>
        </View>
    )
}