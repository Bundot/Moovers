import { View, Image, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContactUsButton from "../components/ContactUsButton";
import FaqsCard from "../components/FaqsCard";
import RecommendedTopicsCard from "../components/RecommendedTopicsCard";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function HelpScreen(){
    return(
        <SafeAreaView style={{flex:1}}>
            <TopLineNav text={"Help"}/>
            <View>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, marginTop: 20, paddingLeft:24, paddingRight:150}}>Communicate With us if you have quiries or dificulties</Txt>
                <View style={{flexDirection:"row"}}>
                <ContactUsButton icon={require('./../../assets/images/GoldChatIcon.png')} text={"Chat With Us"}/>
                <ContactUsButton icon={require('./../../assets/images/phoneCallIcon.png')} text={"Call Us"}/>
                </View>
                <View style={{height:20, width:"100%", backgroundColor:"#00000012", marginTop:20}}/>
                <View>
                <Txt font={"PoppinsBold"} style={{fontSize:16, marginLeft:24, marginTop:15}}>Recommend Topics</Txt>
                <RecommendedTopicsCard text={"Payments and refunds"}/>
                <RecommendedTopicsCard text={"Cancellation Policy"}/>
                <RecommendedTopicsCard text={"Damage Policy Quiries"}/>
                <RecommendedTopicsCard text={"General"}/>
                </View>
                <View>
                <Txt font={"PoppinsBold"} style={{fontSize:16, marginLeft:24, marginTop:15}}>FAQ'S</Txt>
                <FaqsCard/>
                </View>
            </View>
        </SafeAreaView>
    )
}