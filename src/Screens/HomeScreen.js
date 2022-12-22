import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen(){
    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height:54, backgroundColor:"#D27203" }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}