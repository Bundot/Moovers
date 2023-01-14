import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopLineNav from "../components/TopLineNav";
import EmptyTopLine from "../components/EmptyTopLine";
import BookingsCard from "../components/BookingsCard";

export default function Bookings(){
    return(
        <SafeAreaView style={{backgroundColor:"#EEF3F5", flex:1}}>
            <EmptyTopLine text={"My Bookings"}/>
            <BookingsCard image={require('./../../assets/images/courierNewImage.png')} text={"Courier"}/>
            <BookingsCard image={require('./../../assets/images/packersandmoversNewImage.png')} text={'Packers & Movers'}/>
            <BookingsCard image={require('./../../assets/images/quickyNewImage.png')} text={"Quiky"}/>
        </SafeAreaView>
    )
}