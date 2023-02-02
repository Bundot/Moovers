import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import PackageOptionsRadioButtons from "../components/PackageOptionsRadioButtons";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function PackagesScreen(){
    return(
        <SafeAreaView style={{paddingBottom:20}}>
            <ScrollView>
            <TopLineNav text={"Packages"}/>
            <View style={{paddingHorizontal:25}}>
            <Txt font={"PoppinsRegular"} style={{fontSize:16, marginTop:20}}>Pick your service package</Txt>
            <PackageOptionsRadioButtons/>
            <Bttn text={"Continue"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}