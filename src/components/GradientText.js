
import React from 'react';
import {Text, View} from 'react-native';
//import MaskedView from '@react-native-community/masked-view';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import Txt from './Txt';


export default function GradientText({colora,colorb, txtStyle, txt}){
  return (
  <MaskedView maskElement={<Txt font={"PoppinsBold"} style={[txtStyle,{backgroundColor:"transparent"}]}>{txt}</Txt>}>
    <LinearGradient colors={[colora,colorb]} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
    <Txt font={"PoppinsBold"} style={[txtStyle,{opacity:0}]}>{txt}</Txt>
    </LinearGradient>
  </MaskedView>
    );
  }



