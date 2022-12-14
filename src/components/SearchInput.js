import {View, Text, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from '@expo/vector-icons';

export default function SearchInput({placeholder}){
    return(
    <SafeAreaView style={{paddingHorizontal: 30, }}>
    <View style={{backgroundColor:"white", width: "100%", height:40, borderRadius: 30,borderWidth:1,flexDirection:"row", alignItems:"center", overflow:"hidden", marginTop: 10}} >  
    <EvilIcons name="search" size={24} color="black" />  
    <TextInput placeholder={placeholder} placeholderTextColor="#00000080" style={{ width:"100%", height:"100%"}}/>
    </View>
    </SafeAreaView>
    )
}