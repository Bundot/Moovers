import {View, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ImageCard({image}){
    return(
        <SafeAreaView>
            <View style={{height:102, width:102, backgroundColor:"gray", borderRadius:10, overflow:"hidden"}}>
                <Image source={image} style={{height: 102, width:102}}/>
            </View>
        </SafeAreaView>
    )
}