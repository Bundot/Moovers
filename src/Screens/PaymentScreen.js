import { View, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from "../components/Add";
import Bttn from "../components/Bttn";
import OtherPaymentsCard from "../components/OtherPaymentsCard";
import PaymentOptionsRadioButton from "../components/PaymentOptionsRadioButton";
import PaymentRadioButton from "../components/PaymentRadioButton";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function PaymentScreen({navigation}){
    const onPay = ()=> {
        navigation.navigate("CongratulationScreen")
      }
    return(
        <SafeAreaView style={{paddingBottom:20}}>
            <ScrollView>
            <TopLineNav text={"Payment"}/>
            <View style={{paddingHorizontal: 24}}>
            <View style={{ marginTop:20}}>
            <Txt font={"PoppinsBold"} style={{fontSize:16}}>Select Payment Method</Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#000000B2", marginTop:15}}>CREDIT AND DEBIT CARD</Txt>
            </View>
            <PaymentOptionsRadioButton/>
            <Add text={"Add new Debit/Credit Card"}/>
            <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#000000B2", marginTop:15}}>Another way to pay</Txt>
            <OtherPaymentsCard image={require('./../../assets/images/NetBankingIcon.png')} text={"Net Banking"}/>
            <Txt font={"PoppinsBold"} style={{fontSize:14, color:"#000000B2", marginTop:15}}>Pay through UPI</Txt>
            <OtherPaymentsCard image={require('./../../assets/images/remitaIcon.png')} text={"Remita"}/>
            <OtherPaymentsCard image={require('./../../assets/images/GooglePayIcon.png')} text={"Google Pay"}/>
            <Add text={"Add new UPI"}/>
            <Bttn text={"Pay Now"} onPress={onPay}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}