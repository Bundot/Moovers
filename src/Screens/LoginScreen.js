import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Txt from '../components/Txt';
import { Entypo } from '@expo/vector-icons';
import UsersInput from '../components/UsersInput';
import PasswordInputs from '../components/PasswordInputs';
import UsersPasswordInput from '../components/UsersPasswordInput';
import Bttn from '../components/Bttn';
import LinkButton from '../components/LinkButton';
import OrLine from '../components/OrLine';
import { Form, Formik } from 'formik';
import * as Yup from "yup";

const validationSchema= Yup.object().shape({
  email: Yup.string().required().email().label("Email Address"),
  password: Yup.string().required().max(10, "Password should be less than 11 characters").min(8, "Password Should be more than 4 characters").label("Password"),
})

export default function LoginScreen({navigation}){
    const onFormSubmit = ()=> {
      navigation.navigate("HomeScreen")
    }
    return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height: 100}}>
            <View style={{marginTop:59}}>         
              <Txt font={"PoppinsBold"} style={styles.txtOne}>Login</Txt>  
              </View>
              <Entypo name="chevron-thin-left" size={15} color="#2D264B" style={styles.arrow}/>
              </View>
              <TouchableOpacity>
              <Txt font={"PoppinsBold"} style={styles.sutxt} >Sign Up</Txt>
              </TouchableOpacity>
              <Txt font={"PoppinsBold"} style={styles.wbtxt}>Welcome Back!</Txt>
              <Formik initialValues={{email:"", password:""}}
                        validationSchema={validationSchema}
                        onSubmit={onFormSubmit}>
                          {({handleChange, handleSubmit, errors, touched})=>(
                            <>
              <UsersInput image={require('./../../assets/images/profileIcon.png')} onChangeText={handleChange("email")}/>
              <Text style={styles.errors}>{touched.email && errors.email}</Text>
              <UsersPasswordInput onChangeText={handleChange("password")}/>
              <Text style={styles.errors}>{touched.password && errors.password}</Text>
              <TouchableOpacity>
              <Txt font={"PoppinsRegular"} style={styles.forgotPassword}>Forgot Password?</Txt>
              </TouchableOpacity>
               <Bttn text={"Login"} onPress={handleSubmit}/>
                            </>
                          )}
                        </Formik>
              <OrLine/>
              <View>
                <LinkButton image={require('./../../assets/images/appleMailIcon.png')} text={"Continue With Apple"}/>
                <LinkButton image={require('./../../assets/images/smallGmailIcon.png')} text={"Sign in with Google"}/>
              </View>
              </ScrollView>
            </SafeAreaView>
    )
}

const styles=StyleSheet.create({
  container: {
    paddingHorizontal: 34,
    backgroundColor:"#EEF3F5"
  },
txtOne:{
  fontSize: 30,
   color:"#593761",
    alignSelf:"center" 
  },
  arrow: {
     width: 30,
      marginTop: -30,
       marginLeft: 5
      },

      sutxt: {
        fontSize:15,
         color:"#D27203", 
         alignSelf:"flex-end"
        },

        wbtxt:{
          fontSize:32,
           paddingRight:190,
            color:"#593761", 
            marginTop: 30
          },

          errors: {
            color: "red",
          fontSize: 12,
          fontWeight: "bold",
          letterSpacing: 0.2
        },

        forgotPassword: {
          fontSize:15, 
          color:"#D27203", 
          alignSelf:"flex-end", 
          marginTop: 10
        }
})