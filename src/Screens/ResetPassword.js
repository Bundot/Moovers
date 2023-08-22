import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Entypo} from '@expo/vector-icons';
import Txt from "../components/Txt";
import UsersInput from "../components/UsersInput";
import Bttn from "../components/Bttn";
import { Form, Formik } from 'formik';
import * as Yup from "yup";

const validationSchema= Yup.object().shape({
    email: Yup.string().required("email address is required").email().label("Email Address"),
  })

export default function ResetPassword({navigation}){

    const onFormSubmit = ()=>{
        navigation.navigate("Verification")
    }
    return(
        <SafeAreaView style={{flex:1, paddingHorizontal: 30, backgroundColor:"#EEF3F5"}}>
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
              <Formik initialValues={{email:""}}
                        validationSchema={validationSchema}
                        onSubmit={onFormSubmit}>
                          {({handleChange, handleSubmit, errors, touched})=>(
                            <>
              <UsersInput image={require('./../../assets/images/emailIcon.png')} onChangeText={handleChange("email")}/>
              <Text style={styles.errors}>{touched.email && errors.email}</Text>
              <Bttn text={"Send Code"} onPress={handleSubmit}/>
              </>
                          )}
                        </Formik>
            
              </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    errors: {
    color: "red",
      fontSize: 12,
      fontWeight: "bold",
      letterSpacing: 0.2
    },
})