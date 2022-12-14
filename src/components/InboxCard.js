import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Txt from './Txt';

export default function InboxCard({text, image, name}){
    return(
       <SafeAreaView style={{flex: 1, justifyContent:"center", alignItems:"center", paddingHorizontal: 50}}>
        <TouchableOpacity style={{flexDirection:"row"}}>
        <View style={{backgroundColor:"grey", height: 50, width: 50, borderRadius: 35, overflow:'hidden', alignSelf:"center"}}>
        <Image source={image} style={{width:50, height:50}}/>
        </View>
        <View style={{justifyContent:"center"}}>
            <Txt font={"InterBold"} style={{fontSize: 25}}>{name}</Txt>
            <Txt font={"InterRegular"} style={{fontSize: 15}} numberOfLines={1}>{text}</Txt>
            
        </View>
        </TouchableOpacity>
       </SafeAreaView>
    )
}