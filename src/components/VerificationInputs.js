import { View, StyleSheet, TextInput} from 'react-native';
import { useRef } from 'react';


export default function VerificationInputs({ref, onChangeText}){
    const inputTwo = useRef(null);
    const inputThree = useRef(null);
    const inputFour = useRef(null);
    return(
        <View style={styles.container}>
            <View style={{ height:60, width: 60, borderRadius: 10, borderWidth: 2, alignItems:"center", justifyContent: "center"}}>
                <TextInput style={{fontSize:40, fontWeight:"bold", color: "#D27203"}}  
                onChangeText={()=> inputTwo.current.focus()} 
                maxLength={1}/>
            </View>
            <View style={{marginLeft:20, height:60, width: 60, borderRadius: 10, borderWidth: 2, alignItems:"center", justifyContent: "center"}}>
                <TextInput style={{fontSize:40, fontWeight:"bold", color: "#D27203"}} 
                ref={inputTwo} 
                onChangeText={()=> inputThree.current.focus()} 
                maxLength={1}/>
            </View>
            <View style={{marginLeft:20, height:60, width: 60, borderRadius: 10, borderWidth: 2, alignItems:"center", justifyContent: "center"}}>
                <TextInput style={{fontSize:40, fontWeight:"bold", color: "#D27203"}} 
                ref={inputThree} 
                onChangeText={()=> inputFour.current.focus()} 
                maxLength={1}/>
            </View>
            <View style={{marginLeft:20, height:60, width: 60, borderRadius: 10, borderWidth: 2, alignItems:"center", justifyContent: "center"}}>
                <TextInput style={{fontSize:40, fontWeight:"bold", color: "#D27203"}} 
                ref={inputFour}  
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
        flexDirection: "row"
    }
})