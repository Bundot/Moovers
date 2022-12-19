import { View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function UsersInput({image}){
    return(
        <SafeAreaView style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <View style={{flexDirection:"row", height: 50, width: 291, borderRadius: 10,borderColor:"black", borderWidth: 1}}>
               <View style={{ height: 17, width: 17, marginLeft: 5, flexDirection:"row", alignSelf:"center"}}>
                <Image source={image}/>
               </View>
               <TextInput style={{marginLeft: 5, marginRight:10,fontSize:20, height:"100%", marginBottom: 50, width:"90%", borderRadius:10}}/>
            </View>
        </SafeAreaView>
    )
}