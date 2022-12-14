import { View , StyleSheet, Image, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import NoStyleBttn from "../components/NoStyleBttn";
import Txt from "../components/Txt";

export default function WelcomeScreen(){
    return(
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"white", flex: 1}}>
        <View style={{alignItems:"center", marginTop: 200}}>
            <Image  resizeMethod="resize" source={require('./../../assets/images/welcomeScreen.png')} />
        </View>
        <View style={{ marginTop:18}}>
            <Txt font={"PoppinsBold"} style={{color:"#F7B932", fontSize: 30}}>Welcome</Txt>
        </View>
        <View style={{ marginTop: 1}}>
            <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>Welcome to Moover. Please do have a wonderful experience while use our app.</Txt>
        </View>

        <View style={{flexDirection:"row", marginTop: 45}}>
       <NoStyleBttn style={{
        //backgroundColor: "#593761",
        height: 37,
        width: 145,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        borderColor:"#593761",
        borderWidth: 1}} text={"Login"} txtStyle={{color:"#593761", fontSize:14}}/>

        <NoStyleBttn style={{
        backgroundColor: "#593761",
        height: 37,
        width: 145,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 30
        //borderColor:"#593761",
       // borderWidth: 1
        }} text={"Create Account"} txtStyle={{color:"white", fontSize:14}}/>
        </View>
    </SafeAreaView>
    )
}