import { View , StyleSheet, Image, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bttn from "../components/Bttn";
import NoStyleBttn from "../components/NoStyleBttn";
import Txt from "../components/Txt";

export default function WelcomeScreen({navigation}){

    const onLogin = ()=> {
        navigation.navigate("LoginScreen")
      }

      const onCreate = ()=> {
        navigation.navigate("CreateAccountScreen")
      }
    return(
        <SafeAreaView style={{paddingHorizontal: 26, backgroundColor:"#EEF3F5", flex: 1}}>
            <View style={{ marginTop:30}}>
            <Txt font={"PoppinsBold"} style={{color:"#F7B932", fontSize: 30}}>Welcome to Moover</Txt>
            <Txt font={"PoppinsRegular"} style={{ fontSize: 16}}>Experience The next level of courier service</Txt>
        </View>
        <View style={{alignItems:"center", marginTop: 200}}>
            <Image  resizeMethod="resize" source={require('./../../assets/images/welcomeScreenImg.png')} />
        </View>
        <Bttn text={"Log in"} onPress={onLogin}/>
        <NoStyleBttn style={{height: 52,borderRadius: 15,alignItems: "center",justifyContent: "center",marginTop: 30, borderWidth:1, borderColor:"#593761"}} text={"Create Account"} txtStyle={{color:"#593761", fontSize:16}} onPress={onCreate}/>
    </SafeAreaView>
    )
}




