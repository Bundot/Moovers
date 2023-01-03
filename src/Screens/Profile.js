import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyTopLine from "../components/EmptyTopLine";
import PictureCircle from "../components/PictureCircle";
import ProfileCard from "../components/ProfileCard";
import TopLine from "../components/TopLine";
import Txt from "../components/Txt";

export default function Profile(){
    return(
        <SafeAreaView>
            <EmptyTopLine text={"Profile"}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containera}>
            <PictureCircle image={require('./../../assets/images/ProfilePic.jpg')}/>
            <View style={styles.containerb}>
                <Txt font={"PoppinsRegular"} style={styles.name}>Daniel Nnamdi</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize: 12}}>New Nyanya, Phase IV,</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize: 12}}>Nassarawa</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize: 12}}>08178787171</Txt>
            </View>
            </View>
            <ProfileCard image={require('./../../assets/images/accountSettingsIcon.png')} title={"Account Settings"} subtext={"Mobile Number, Gmail, Address"}/>
            <ProfileCard image={require('./../../assets/images/referAndEarnIcon.png')} title={"Refer and Earn"} subtext={"Share our app and earn coupons"}/>
            <ProfileCard image={require('./../../assets/images/helpIcon.png')} title={"Help"} subtext={"Ask questions and chat"}/>
            <ProfileCard image={require('./../../assets/images/aboutUsIcon.png')} title={"About Us"} subtext={"What we are! What we do"} />
            <ProfileCard image={require('./../../assets/images/termsAndConditionIcon.png')} title={"Terms & Conditions"} subtext={"Cancelation Policy, Damage policy"}/>
            <ProfileCard image={require('./../../assets/images/privacyIcon.png')} title={"Privacy Policy"} subtext={"Cancelation Policy, Damage Policy"}/>
            <ProfileCard image={require('./../../assets/images/rateUsIcon.png')} title={"Rate Us"} subtext={"Share your experience with us"}/>
            <ProfileCard image={require('./../../assets/images/logOutIcon.png')} title={"Log Out"} subtext={"log out"}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    containera:{
        paddingHorizontal:23, 
        flexDirection:"row"
    },

    name:{
        color:"#593761", 
        fontSize: 15
    },

    containerb:{
        justifyContent:"center", 
        marginLeft: 20, 
        marginTop: 20
    }
})