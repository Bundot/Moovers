import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Txt from '../components/Txt';
import { Entypo } from '@expo/vector-icons';
import UsersInput from '../components/UsersInput';
import UsersPasswordInput from '../components/UsersPasswordInput';
import Bttn from '../components/Bttn';
import OrLine from '../components/OrLine';
import MailLinkSquare from '../components/MailLinkSquare';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Field Is Required").label('Full Name'),
    email: Yup.string().required("Field Is Required").email("Email Format Is name@email.com").label('Email Address'),
    phoneNumber: Yup.number("Phone Number Field Only accepts numbers").required("Field Is Required"),
    password: Yup.string().required("Field Is Required").max(10, "Password should be less than 11 characters").min(8, "Password Should be more than 4 characters").label("Password"),
})

export default function CreateAccountScreen({ navigation }){
    const onFormSubmit = () =>{
        navigation.navigate("LoginScreen")
    }
    return (
        <SafeAreaView style={{backgroundColor:"#EEF3F5", paddingHorizontal: 34}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 100}}>
            <View style={{marginTop:59}}>         
              <Txt font={"PoppinsBold"} style={{fontSize: 30, color:"#593761", alignSelf:"center" }}>Create Account</Txt>
              <Txt font={"PoppinsBold"} style={{fontSize: 14, alignSelf:"center" }}>Please fill in correctly</Txt>  
              </View>
              <Entypo name="chevron-thin-left" size={15} color="#2D264B" style={{ width: 30, marginTop: -50, marginLeft: 5}}/>
              </View>
              <TouchableOpacity  style={{marginTop: 50}} onPress={onFormSubmit}>
              <Txt font={"PoppinsBold"} style={{fontSize:15, color:"#D27203", alignSelf:"flex-end"}}>Sign Up</Txt>
              </TouchableOpacity>
              <Formik initialValues={{fullname:"", email:"", phoneNumber:"", phoneNumber:""}}
                        onSubmit={onFormSubmit}
                        validationSchema={validationSchema}>
                            {({handleChange, handleSubmit, errors, touched})=>(
                        <>
                        <UsersInput image={require('./../../assets/images/profileIcon.png')} onChangeText={handleChange("fullname")}/>
                        <Text style={{color: "red",fontSize: 12,fontWeight: "bold",letterSpacing: 0.2}}>{touched.fullname && errors.fullname}</Text>
                        <UsersInput image={require('./../../assets/images/emailIcon.png')} onChangeText={handleChange("email")}/>
                        <Text style={{color: "red",fontSize: 12,fontWeight: "bold",letterSpacing: 0.2}}>{touched.email && errors.email}</Text>
                        <UsersInput image={require('./../../assets/images/phoneCallIcon.png')} onChangeText={handleChange("phoneNumber")}/>
                        <Text style={{color: "red",fontSize: 12,fontWeight: "bold",letterSpacing: 0.2}}>{touched.phoneNumber && errors.phoneNumber}</Text>
                        <UsersPasswordInput onChangeText={handleChange("password")}/>
                        <Text style={{color: "red",fontSize: 12,fontWeight: "bold",letterSpacing: 0.2}}>{touched.password && errors.password}</Text>
                        <Bttn text={"Sign Up"} onPress={handleSubmit}/>
                        </>
                       )} 
              </Formik>
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