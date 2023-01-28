import { View, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCount from "../components/ItemCount";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function SelectItemsScreen(){
    return(
        <SafeAreaView>
            <ScrollView>
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
            <View style={{paddingHorizontal:30}}>
                <ItemCount icon={require("./../../assets/images/tvIcon.png")} item={"TV"} />
                <ItemCount icon={require("./../../assets/images/kitchenIcon.png")} item={"Kitchen Utility"}/>
                <ItemCount icon={require("./../../assets/images/furnitureIcon.png")} item={"Furniture"}/>
                <ItemCount icon={require("./../../assets/images/bathroomIcon.png")} item={"Bathroom Utility"}/>
                <ItemCount icon={require("./../../assets/images/fanIcon.png")} item={"Fan"}/>
                <ItemCount icon={require("./../../assets/images/vehicleIcon.png")} item={"Vehicle"}/>
                <ItemCount icon={require("./../../assets/images/speakersIcon.png")} item={"Speakers"}/>
                <ItemCount icon={require("./../../assets/images/washerIcon.png")} item={"Washing Machine"}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}