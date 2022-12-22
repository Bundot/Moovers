import {View, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useRef } from 'react';
import SquareInput from '../components/SquareInput';

export default function TestingFormFields(){
    const inputTwo = useRef(null);
    const inputThree= useRef(null);
    const inputn = useRef(null);
    const inputx = useRef(null);
    return(
        <SafeAreaView>
            <View style={{height:100, width: 100, borderWidth: 1}}>
                <TextInput style={{height:100, width: 100}} 
                onChangeText={()=> inputTwo.current.focus()} 
                maxLength={1} />
            </View>
            <View style={{height:100, width: 100, borderWidth: 1}}>
                <TextInput style={{height:100, width: 100}}
                 ref={inputTwo}
                 onChangeText={()=> inputThree.current.focus()}/>
            </View>
            <View style={{height:100, width: 100, borderWidth: 1}}>
                <TextInput style={{height:100, width: 100}}
                 ref={inputThree}/>
            </View>
            <View>
             <SquareInput onChangeText={()=> inputn.current.focus()}/>
             <SquareInput ref={inputn} onChangeText={()=> inputx.current.focus()}/>
             <SquareInput ref={inputx}/>
             </View>
        </SafeAreaView>
    )
}