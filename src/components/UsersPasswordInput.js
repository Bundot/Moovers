;import {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from './Txt';



export default function UsersPasswordInput({onChangeText}){
    const [textHidden, setTextHidden] = useState(true);

    return(
        <SafeAreaView>
            <View style={{flexDirection:"row", height: 50, marginTop: 30, borderRadius: 10,borderColor:"black", borderWidth: 1}}>
               <View style={{ height: 17, width: 17, marginLeft: 5, flexDirection:"row", alignSelf:"center"}}>
                <Image source={require('./../../assets/images/passwordPadlockIcon.png')}/>
               </View>
               <TextInput style={{marginLeft: 5, marginRight:10,fontSize:20, height:"100%", marginBottom: 50, width:"80%", borderRadius:10}} onChangeText={onChangeText} secureTextEntry={textHidden}/>
               <TouchableOpacity onPress={ () => setTextHidden(!textHidden)} style={{alignSelf:"center", marginLeft:-5 }}>
                <Image source={textHidden == true ? require('./../../assets/images/dontSeePasswordIcon.png') : require('./../../assets/images/seePasswordIcon.png')}/>
               </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}