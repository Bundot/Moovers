import { View,StyleSheet } from "react-native";
import AboutParcelInputA from "./AboutParcelInputA";
import AboutParcelInputB from "./AboutParcelInputB";
import CheckBox from "./CheckBox";
import NoStyleCheckBox from "./NoStyleCheckBox";
import Bttn from "./Bttn"

export default function AddresDetailsDateAndTime(){
    return(
        <View>
            <View style={{flexDirection:"row"}}>
            <AboutParcelInputA  placeholder={""} image={require('./../../assets/images/CalenderIcon.png')}/>
            <AboutParcelInputB  placeholder={""} image={require('./../../assets/images/ClockIcon.png')}/>
            </View>
            <Bttn text={"Continue"}/>     
            </View>             

)
}

const styles = StyleSheet.create({
container:{

},

})