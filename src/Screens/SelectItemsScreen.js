import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function SelectItemsScreen(){
    return(
        <SafeAreaView>
            <TopLineNav text={"Select Items"}/>
            <View style={{marginTop:20, alignItems:"center"}}>
            <Txt font={"PoppinsRegular"}>Please select the item you want to move</Txt>
            <Txt font={"PoppinsRegular"}>Selected items only will be shipped</Txt>
            </View>
            <View style={{flexDirection:"row", marginTop:30, alignItems:"center", justifyContent:"center"}}>
                <Image source={require("./../../assets/images/siImg1.png")}/>
                <Image source={require("./../../assets/images/siImg2.png")}/>
                <Image source={require("./../../assets/images/siImg3.png")}/>
            </View>
        </SafeAreaView>
    )
}