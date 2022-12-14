import {View, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ImageCardn({image}){
    return(
        <SafeAreaView>  
            <View style={{height:120, width:120, backgroundColor:"gray", borderRadius:20, overflow:"hidden"}}>
                <Image source={image} style={{width:120, height:120}}/>
            </View>
        </SafeAreaView>
    )
}