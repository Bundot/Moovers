import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Txt from '../components/Txt';
import { Entypo } from '@expo/vector-icons';
import UsersInput from '../components/UsersInput';
import PasswordInputs from '../components/PasswordInputs';
import UsersPasswordInput from '../components/UsersPasswordInput';
import Bttn from '../components/Bttn';
import LinkButton from '../components/LinkButton';
import OrLine from '../components/OrLine';

export default function LoginScreen(){
    return(
            <SafeAreaView style={{paddingHorizontal: 34}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height: 100}}>
            <View style={{marginTop:59}}>         
              <Txt font={"PoppinsBold"} style={{fontSize: 30, color:"#593761", alignSelf:"center" }}>Login</Txt>  
              </View>
              <Entypo name="chevron-thin-left" size={15} color="#2D264B" style={{ width: 30, marginTop: -30, marginLeft: 5}}/>
              </View>
              <TouchableOpacity>
              <Txt font={"PoppinsBold"} style={{fontSize:15, color:"#D27203", alignSelf:"flex-end"}}>Sign Up</Txt>
              </TouchableOpacity>
              <Txt font={"PoppinsBold"} style={{fontSize:32, paddingRight:190, color:"#593761", marginTop: 30}}>Welcome Back!</Txt>
              <UsersInput image={require('./../../assets/images/profileIcon.png')}/>
              <UsersPasswordInput/>
              <TouchableOpacity>
              <Txt font={"PoppinsRegular"} style={{fontSize:15, color:"#D27203", alignSelf:"flex-end", marginTop: 10}}>Forgot Password?</Txt>
              </TouchableOpacity>
              <Bttn text={"Login"}/>
              <OrLine/>
              <View>
                <LinkButton image={require('./../../assets/images/appleMailIcon.png')} text={"Continue With Apple"}/>
                <LinkButton image={require('./../../assets/images/smallGmailIcon.png')} text={"Sign in with Google"}/>
              </View>
              </ScrollView>
            </SafeAreaView>
    )
}