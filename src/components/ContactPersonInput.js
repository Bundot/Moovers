import { View, Text, TextInput, Image} from "react-native";

export default function ContactPersonInput({placeholder, image}){
    return(
        <View>
            <View style={{flexDirection:"row", marginTop: 30, paddingHorizontal:20}}>
            <View style={{borderBottomWidth:1,borderBottomColor:"#00000040", flexDirection: "row", flexGrow:1, flexShrink:1, paddingVertical: 7, width:150}}>
            <TextInput style={{ flexGrow:1, flexShrink:1, fontSize: 14, marginLeft:10}} placeholder={placeholder}/>
            <Image source={image} style={{marginTop:5}}/>
            </View>
            </View> 
        </View>
    )
}