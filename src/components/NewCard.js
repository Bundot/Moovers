import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageCard from './ImageCard';
import { AntDesign } from '@expo/vector-icons';
import Txt from './Txt';
import ImageCardn from './ImageCardn';
import { FontAwesome } from '@expo/vector-icons';

export default function NewCard({image,sfrom,lfrom,sto,lto,time, budget}){
    return(
        <SafeAreaView style={{marginTop:-40, marginLeft:10}}>
            <ImageCardn image={image}/>
            <View style={{flexDirection: "row", marginTop: 10}}>
            <View>
                <Txt font={"InterMedium"} >{sfrom}</Txt>
                <Txt font={"InterMedium"} style={{color: "#00000080"}} >{lto}</Txt>
            </View>
            <FontAwesome name="long-arrow-right" size={24} color="black" style={{marginLeft: 10}} />
            <View style={{marginLeft: 10}}>
                <Txt font={"InterMedium"} >{sto}</Txt>
                <Txt font={"InterMedium"} style={{color: "#00000080"}} >{lto}</Txt>
            </View>
            </View>
            <View style={{flexDirection:"row", marginTop: 20}}>
            <View>
                <Txt font={"InterMedium"} >Budget</Txt>
                <Txt font={"InterMedium"} style={{color: "#00000080"}} >{budget}</Txt>
            </View>
            <Txt font={"InterMedium"} style={{marginLeft: 40}} >{time}</Txt>
            </View>
        </SafeAreaView>



    )
}