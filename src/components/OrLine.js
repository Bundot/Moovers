import {View, StyleSheet} from 'react-native';
import Txt from './Txt';

export default function OrLine(){
    return(
        <View style={{flexDirection:"row", marginTop: 35}}>
                <View style={{backgroundColor:"#00000033", height:3, flexGrow: 1, boarederRadius: 10}}></View>
                <Txt font={"PoppinsRegular"} style={{marginTop: -12, fontSize: 20, color:"#00000033"}}>  or  </Txt>
                <View style={{backgroundColor:"#00000033", height:3, flexGrow: 1, boarederRadius: 10}}></View>
              </View>
    )
}