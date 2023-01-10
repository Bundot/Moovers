import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BankOffers from "../components/BankOffers";
import NewSearchBox from "../components/NewSearchBox";
import ReferAndEarnCard from "../components/ReferAndEarnCard";
import SearchBox from "../components/SearchBox";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";


// add padding Bottom
export default function ReferallAndCoupon(){
    return(
        <SafeAreaView style={{backgroundColor:"white", flex: 1 }}>
            <ScrollView>
            <TopLineNav text={"Refer and Earn"}/>
            <Image source={require('./../../assets/images/referPageImage.png')} style={{alignSelf:"center"}}/>
            <Txt font={"PoppinsRegular"} style={{alignSelf: "center", fontSize: 10}}>Invite your friend to Moover and earn coupons</Txt>
            <Txt font={"PoppinsRegular"} style={{alignSelf: "center", fontSize: 10}}>when they make their first bookings</Txt>
            <NewSearchBox/>
            <ReferAndEarnCard colorza={'#F73232'} colorzb={'#A03C3C'} offer={'20% off'} title={"Welcome You"} couponCode={"WELCOEM YOU"} percentage={"20%"} extraInfo={"on your first order. Minimum discount up to ₦500"}/>
            <ReferAndEarnCard offer={'40% off'} colorza={'#4361EE'} colorzb={'#45F108'} title={"MoversandPackers"} couponCode={"MOVERSANDPACKERS"} percentage={"40%"} extraInfo={"home and office shifting"} />
            <ReferAndEarnCard offer={'10% off'} colorza={'#FF1515'} colorzb={'#F7B932'} title={"Quicky"} couponCode={"QUICKY"} percentage={"10%"} extraInfo={"on your quicky orders. Minimum discount up to ₦500"}/>
            <Txt font={"PoppinsBold"} style={{fontSize: 15, paddingHorizontal: 23, marginTop: 10}}>Bank Offers</Txt>
            <BankOffers offer={"Cashback"} colorza={'#F7B932'} colorzb={'#F67BF9'} cashback={"₦5,000"} title={"M1V211VV"} transactionamount={"₦30,000                            "}/>
            <BankOffers offer={"Cashback"} colorza={'#4361EE'} colorzb={'#90ECFD'} cashback={"10,0000"} title={"M2V322VV"} transactionamount={"₦80,000                           "}/>
            </ScrollView>
        </SafeAreaView>
    )
}