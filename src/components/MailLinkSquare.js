import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


export default function MailLinkSquare({image}){
    return(
        <View>
            <TouchableOpacity style={{marginBottom: 10,height: 70, width:150, borderWidth:2, borderRadius: 15 ,borderColor:"#D27203", alignItems:"center", justifyContent:"center", backgroundColor:"white", marginRight:40, marginTop:10}}>
                <Image source={image}/>
            </TouchableOpacity>
        </View>
    )
}