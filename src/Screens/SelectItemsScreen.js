import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import ItemCount from "../components/ItemCount";
import NoStyleBttn from "../components/NoStyleBttn";
import TopLineNav from "../components/TopLineNav";
import Txt from "../components/Txt";

export default function SelectItemsScreen(){
    return(
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
            <TopLineNav text={"Select Items"}/>
            <View style={styles.heading}>
            <Txt font={"PoppinsRegular"}>Please select the item you want to move</Txt>
            <Txt font={"PoppinsRegular"}>Selected items only will be shipped</Txt>
            </View>
            <View style={styles.images}>
                <Image source={require("./../../assets/images/siImg1.png")}/>
                <Image source={require("./../../assets/images/siImg2.png")}/>
                <Image source={require("./../../assets/images/siImg3.png")}/>
            </View>
            <View style={styles.itemcount}>
                <ItemCount icon={require("./../../assets/images/tvIcon.png")} item={"TV"} />
                <ItemCount icon={require("./../../assets/images/kitchenIcon.png")} item={"Kitchen Utility"}/>
                <ItemCount icon={require("./../../assets/images/furnitureIcon.png")} item={"Furniture"}/>
                <ItemCount icon={require("./../../assets/images/bathroomIcon.png")} item={"Bathroom Utility"}/>
                <ItemCount icon={require("./../../assets/images/fanIcon.png")} item={"Fan"}/>
                <ItemCount icon={require("./../../assets/images/vehicleIcon.png")} item={"Vehicle"}/>
                <ItemCount icon={require("./../../assets/images/speakersIcon.png")} item={"Speakers"}/>
                <ItemCount icon={require("./../../assets/images/washerIcon.png")} item={"Washing Machine"}/>
            </View>
            <View style={styles.bttm}>
                <Txt font={"PoppinsRegular"} style={styles.addedtxt}>Items added</Txt>
                <View style={styles.btnconainer}>
                <TouchableOpacity style={styles.btn}>
                    <Txt font={"PoppinsRegular"} style={styles.conttext}>Continue</Txt>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
maincontainer: {
    paddingBottom:22
},
heading:{
    marginTop:20, 
    alignItems:"center"
},
images:{
    flexDirection:"row", 
    marginTop:30, 
    alignItems:"center", 
    justifyContent:"center"
},
itemcount: {
    paddingHorizontal:30
},
bttm:{
    flexDirection:"row", 
    flex:1, alignItems:"center", 
    justifyContent:"center", 
    paddingHorizontal:30, 
    marginTop:10
},
addedtxt:{
    flexGrow:1, 
    flexShrink:1, 
    color:"#000000B2", 
    fontSize:14
},
btnconainer:{
    backgroundColor:"#593761", 
    borderRadius:10
},
btn:{
    height:40,
    width:"100%",
    justifyContent:"center", 
    alignItems:"center", 
    paddingHorizontal:20
},
conttext:{
    color:"white", 
    fontSize:20
},
})