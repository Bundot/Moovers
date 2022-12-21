import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Entypo} from '@expo/vector-icons';
import Txt from "../components/Txt";
import UsersInput from "../components/UsersInput";
import Bttn from "../components/Bttn";

export default function ResetPassword(){
    return(
        <SafeAreaView style={{flex:1, paddingHorizontal: 30, backgroundColor:"white"}}>
            <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{height: 100}}>
            <View style={{marginTop:59}}>         
              <Txt font={"PoppinsBold"} style={{fontSize: 30, color:"#593761", alignSelf:"center" }}>Reset Password</Txt>
              </View>
              <Entypo name="chevron-thin-left" size={15} color="#2D264B" style={{ width: 30, marginTop: -30, marginLeft: 5}}/>
              </View>
              <Image source={require('./../../assets/images/resetPasswordPageImage.png')} style={{alignSelf:"center"}}/>
              <Txt font={"PoppinsBold"} style={{alignSelf:"center"}}>Enter Your email address to receive</Txt>
              <Txt font={"PoppinsBold"} style={{alignSelf:"center"}}>4 digit code to reset password.</Txt>
              <UsersInput image={require('./../../assets/images/emailIcon.png')}/>
              <Bttn text={"Send Code"}/>
              </ScrollView>
        </SafeAreaView>
    )
}