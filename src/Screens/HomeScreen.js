import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Offers from '../components/Offers';
import SearchBox from '../components/SearchBox';
import Services from '../components/Services';
import TopLine from '../components/TopLine';
import Txt from '../components/Txt';

export default function HomeScreen(){
    return(
        <SafeAreaView style={{paddingBottom: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TopLine image={require('./../../assets/images/locationIcon.png')} address={"New Nyanya, Phase IV"} state={"Nassarawa State"}/>
            <View style={{paddingHorizontal: 20}}>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Tracking your Courier</Txt>
            <SearchBox/>
            <Txt font={"PoppinsBold"} style={{marginTop:20, fontSize: 16}}>Offer</Txt>
            <Txt font={"PoppinsBold"} style={{color:"#1E1E1EB2", fontSize: 12}}>Get the best deals with discount and offers</Txt>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:"row"}}>
            <Offers/>
            <Offers/>
            <Offers/>
            </View>
            </ScrollView>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop: 16}}>Service</Txt>
            <Txt font={"PoppinsBold"} style={{color:"#1E1E1EB2", fontSize: 12}}>We make delivering a bit interesting</Txt>
            <Services topic={"Courier"} image={require('./../../assets/images/courierImage.png')} description={"Door step pickup at your fingertips"}/>
            <Services topic={"Packers and Movers"} image={require('./../../assets/images/packersandmoversImage.png')} description={"Hassle free experience Affordable package"}/>
            <Services topic={"Quicky"} image={require('./../../assets/images/quickyImage.png')} description={"30 Mins Delivery Live Tracking"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}