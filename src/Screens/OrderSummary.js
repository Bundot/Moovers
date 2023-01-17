import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PickUpDateAndTimeComp from "../components/PickUpDateAndTimeComp";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";
import PickUpAddressSummary from "../components/PickUpAddressSummary";
import DeliveryAddressSummary from "../components/DeliveryAddressSummary";
import ParcelDetails from "../components/ParcelDetails";
import ApplyOfferCard from "../components/ApplyOfferCard";
import CostDetailsCard from "../components/CostDetailsCard";
import PaymentMethodCard from "../components/PaymentMethodCard";
import Bttn from "../components/Bttn";

export default function OrderSummary({navigation}){

    const onApplyOffer = ()=> {
        navigation.navigate("ReferallAndCoupon")
      }

      const onSubmitOrder = ()=> {
        navigation.navigate("PaymentScreen")
      }

    return(
        <SafeAreaView style={{backgroundColor:"#EEF3F5", paddingBottom: 20}}>
            <ScrollView>
           <TopLineNav text={"Order Summary"}/>
           <View style={{paddingHorizontal:26}}>
           <Txt font={"PoppinsBold"} style={{marginTop:40, fontSize:16}}>Pickup Date and Time</Txt>
           <PickUpDateAndTimeComp/>
           <Txt font={"PoppinsBold"} style={{marginTop:30, fontSize:16}}>Pickup Address</Txt>
           <PickUpAddressSummary icon={require('./../../assets/images/Ppic.png')} placeholder={"Full Name"}/>
           <PickUpAddressSummary icon={require('./../../assets/images/phoneCallIcon.png')} placeholder={"Phone Number"}/>
           <PickUpAddressSummary icon={require('./../../assets/images/MapIcon.png')} placeholder={"Address"}/>
           <PickUpAddressSummary icon={require('./../../assets/images/GoldLocationIcon.png')}/>
           <Txt font={"PoppinsBold"} style={{marginTop:30, fontSize:16}}>Delivery Address</Txt>
           <DeliveryAddressSummary icon={require('./../../assets/images/Ppic.png')} placeholder={"Full Name"}/>
           <DeliveryAddressSummary icon={require('./../../assets/images/phoneCallIcon.png')} placeholder={"Phone Number"}/>
           <DeliveryAddressSummary icon={require('./../../assets/images/MapIcon.png')} placeholder={"Address"}/>
           <DeliveryAddressSummary icon={require('./../../assets/images/GoldLocationIcon.png')}/>
           <Txt font={"PoppinsBold"} style={{marginTop:30, fontSize:16}}>Parcel Details</Txt>
           <ParcelDetails dimA={"2"} dimB={"1"} dimC={"1.5"} item={"Semovita"} qty={"1"} weight={"5"}/>
           <Txt font={"PoppinsBold"} style={{marginTop:30, fontSize:16}}>Offer</Txt>
           <ApplyOfferCard offer={"Save up to 20% by applying code"} onpress={onApplyOffer}/>
           <Txt font={"PoppinsBold"} style={{marginTop:30, fontSize:16}}>Cost Details</Txt>
           <CostDetailsCard courierPrice={"500"} deliveryandpartner={"300"} taxesandcharges={"100"} topay={"1,000"}/>
           <Txt font={"PoppinsBold"} style={{marginTop:30, fontSize:16}}>Payment Method</Txt>
           <PaymentMethodCard/>
           <Bttn text={"Confirm Booking"} onPress={onSubmitOrder}/>
           </View>
           </ScrollView>
        </SafeAreaView>
    )
}