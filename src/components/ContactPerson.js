import { View, Image, StyleSheet } from "react-native";
import Txt from "./Txt";
import AboutParcelInputA from "./AboutParcelInputA";
import AboutParcelInputB from "./AboutParcelInputB";
import NoStyleCheckBox from "./NoStyleCheckBox";
import ContactPersonInput from "./ContactPersonInput";

export default function ContactPerson(){
    return(
        <View style={styles.container}>
        <View style={styles.containera}>
            <View>
            <ContactPersonInput placeholder={""} image={require('./../../assets/images/profileIcon.png')}/>
            </View>                  
            <View>
            <ContactPersonInput placeholder={""} image={require('./../../assets/images/phoneCallIcon.png')}/>
            </View>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
container:{
height:200, 
borderRadius:10, 
elevation:10, 
shadowColor:"#00000040", 
justifyContent:"center", 
alignItems:"center",

//backgroundColor:"white"
},

containera:{
height:"95%", 
width:"100%", 
borderRadius:10, 
backgroundColor:"white"
},

chkbxcontainer:{
    flexDirection:"row", 
    marginTop:20, 
    justifyContent:"flex-end", 
    marginRight:20
},

chkbx:{
    height: 10, 
    width:10, 
    backgroundColor:"#D9D9D9", 
    borderWidth:0
},

chkbxtxt:{
    marginLeft: 5, 
    fontSize:10
},
})