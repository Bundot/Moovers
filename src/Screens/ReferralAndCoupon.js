import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import NewSearchBox from "../components/NewSearchBox";
import ReferAndEarnCard from "../components/ReferAndEarnCard";
import SearchBox from "../components/SearchBox";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function ReferallAndCoupon(){
    return(
        <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
            <ScrollView>
            <TopLineNav text={"Refer and Earn"}/>
            <Image source={require('./../../assets/images/referPageImage.png')} style={{alignSelf:"center"}}/>
            <Txt font={"PoppinsRegular"} style={{alignSelf: "center", fontSize: 10}}>Invite your friend to Moover and earn coupons</Txt>
            <Txt font={"PoppinsRegular"} style={{alignSelf: "center", fontSize: 10}}>when they make their first bookings</Txt>
            <NewSearchBox/>
            <ReferAndEarnCard/>
            </ScrollView>
        </SafeAreaView>
    )
}