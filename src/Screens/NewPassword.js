import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Bttn from '../components/Bttn';
import Txt from '../components/Txt';
import UsersInput from '../components/UsersInput';
import UsersPasswordInput from '../components/UsersPasswordInput';

export default function NewPassword(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"#EEF3F5", paddingHorizontal:30}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Txt font={"PoppinsBold"} style={{alignSelf:"center", fontSize: 30, color:"#593761", marginTop:65}}>New Password</Txt>
            <Image source={require('./../../assets/images/newPasswordImage.png')} style={{alignSelf:"center"}}/>
            <Txt font={"PoppinsBold"} style={{fontSize: 14, alignSelf:"center"}}>Enter a new password </Txt>
            <UsersPasswordInput/>
            <UsersPasswordInput/>
            <Bttn text={"Proceed to Login"}/>
            </ScrollView>
       </SafeAreaView>
    )
}