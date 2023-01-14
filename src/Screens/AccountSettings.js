import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountSettingsCard from "../components/AccountSettingsCard";
import LargePictureCircle from "../components/LargePictureCirlce";
import TopLineNav from "../components/TopLineNav";

export default function AccountSettings(){
    return(
        <SafeAreaView style={{backgroundColor:"#EEF3F5"}}>
            <ScrollView>
            <TopLineNav text={"Account Settings"}/>
            <View style={{alignSelf:"center"}}>
            <LargePictureCircle image={require('./../../assets/images/ProfilePic.jpg')}/>
            </View>
            <View style={{marginTop:81}}>
            <AccountSettingsCard image={require('./../../assets/images/profileIcon.png')} text={"Daniel Nnamdi"}/>
            <AccountSettingsCard image={require('./../../assets/images/emailIcon.png')} text={"danielnnamdi@gmail.com"}/>
            <AccountSettingsCard image={require('./../../assets/images/pentagonIcon.png')} text={"New nyanya Phase IV Nassarawa State"}/>
            <AccountSettingsCard image={require('./../../assets/images/phoneCallIcon.png')} text={"08178787171"}/>
            <AccountSettingsCard image={require('./../../assets/images/passwordPadlockIcon.png')} text={"***************"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}