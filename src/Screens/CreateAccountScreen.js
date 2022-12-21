import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Txt from '../components/Txt';
import { Entypo } from '@expo/vector-icons';
import UsersInput from '../components/UsersInput';
import UsersPasswordInput from '../components/UsersPasswordInput';
import Bttn from '../components/Bttn';
import OrLine from '../components/OrLine';
import MailLinkSquare from '../components/MailLinkSquare';

export default function CreateAccountScreen(){
    return (
        <SafeAreaView style={{paddingHorizontal: 34}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 100}}>
            <View style={{marginTop:59}}>         
              <Txt font={"PoppinsBold"} style={{fontSize: 30, color:"#593761", alignSelf:"center" }}>Create Account</Txt>
              <Txt font={"PoppinsBold"} style={{fontSize: 14, alignSelf:"center" }}>Please fill in correctly</Txt>  
              </View>
              <Entypo name="chevron-thin-left" size={15} color="#2D264B" style={{ width: 30, marginTop: -50, marginLeft: 5}}/>
              </View>
              <TouchableOpacity  style={{marginTop: 50}}>
              <Txt font={"PoppinsBold"} style={{fontSize:15, color:"#D27203", alignSelf:"flex-end"}}>Sign Up</Txt>
              </TouchableOpacity>
              <UsersInput image={require('./../../assets/images/profileIcon.png')}/>
              <UsersInput image={require('./../../assets/images/emailIcon.png')}/>
              <UsersInput image={require('./../../assets/images/phoneCallIcon.png')}/>
              <UsersPasswordInput/>
              <Bttn text={"Sign Up"}/>
              <View style={{marginTop: 20}}>
              <Txt font={"PoppinsRegular"} style={{fontSize:14}}>By Signing up, i accept the
              <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#D27203"}}> Terms 
              </Txt> and <Txt font={"PoppinsRegular"} style={{fontSize:14, color:"#D27203"}}>Condition 
              </Txt> Policy</Txt>
              </View>
              <OrLine/>
              <Txt font={"PoppinsBold"} style={{fontSize:14}}>Continue With</Txt>
              <View style={{flexDirection:"row"}}>
              <MailLinkSquare image={require('./../../assets/images/bigAppleIcon.png')}/>
              <MailLinkSquare image={require('./../../assets/images/bigGmailIcon.png')}/>
              </View>
              </ScrollView>
        </SafeAreaView>

    )
}