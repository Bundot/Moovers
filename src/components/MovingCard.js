import { View,StyleSheet } from "react-native";
import AboutParcelInputA from "./AboutParcelInputA";
import AboutParcelInputB from "./AboutParcelInputB";
import CheckBox from "./CheckBox";
import NoStyleCheckBox from "./NoStyleCheckBox";

export default function MovingCard(){
    return(
        <View style={styles.container}>
        <View style={styles.containera}>
            <View style={{flexDirection:"row"}}>
            <AboutParcelInputA  placeholder={""}/>
            <AboutParcelInputB  placeholder={""}/>
            </View>                  
            <View>
            <AboutParcelInputA placeholder={""}/>
            </View>
            <NoStyleCheckBox text={"Has Lift"} 
            style={styles.chkbxcontainer} 
            chkStyle={styles.chkbx} 
            txtstyle={styles.chkbxtxt}/>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
container:{
height:215, 
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