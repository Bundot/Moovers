import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutPackageTable from "../components/AboutPackageTable";
import ApplyOfferCard from "../components/ApplyOfferCard";
import ContactPerson from "../components/ContactPerson";
import MovingDetails from "../components/MovingDetails";
import PickUpAndDropCard from "../components/PickUpAndDropCard";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";
import PaymentMethodCard from "../components/PaymentMethodCard";
import Bttn from "../components/Bttn";

export default function SummaryScreen(){
    return(
        <SafeAreaView style={{paddingBottom:20,backgroundColor:"#EEF3F5"}}>
            <ScrollView>
            <TopLineNav text={"Order Summary"}/>
            <View style={{paddingHorizontal:20}}>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Address Details</Txt>
            <PickUpAndDropCard dropAddress={"Chime Close b, New Karu Ado, Nasarawa State"} pickUpAddress={"New Nyanya, Phase IV, Nasarawa State"}/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Contact Details</Txt>
            <ContactPerson/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Moving Details</Txt>
            <MovingDetails date={""} itemNumber={""} time={""}/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>About Package</Txt>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#1E1E1EB2"}}>Your given details will be recheck by delivery partner</Txt>
            <AboutPackageTable/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Offer</Txt>
            <ApplyOfferCard offer={"Save up to 40% by appl;ying code"}/>
            <Txt font={"PoppinsBold"} style={{fontSize:16, marginTop:20}}>Payment Method</Txt>
            <PaymentMethodCard/>
            <Bttn text={"Confirm Booking"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}