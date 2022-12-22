import { View, StyleSheet, TextInput} from 'react-native';
import { useRef } from 'react';

export default function SquareInput({refs, onChangeText}){
    return(
        <View style={styles.container}>
            <View style={{height:60, width: 60, borderRadius: 10, borderWidth: 2, alignItems:"center", justifyContent: "center"}}>
                <TextInput style={{fontSize:40, fontWeight:"bold"}} 
                ref={refs} 
                onChangeText={onChangeText}
                maxLength={1}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
       // flex: 1,
        //justifyContent:"center",
        //alignItems: "center",
        //flexDirection: "row"
    }
})