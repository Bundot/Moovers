import { View, StyleSheet, Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Txt from "./Txt";

export default function TopLine({image, address, state}){
    return(
        <View style={styles.container}>
                <Image source={image}/>
            <View style={{flexGrow:1, paddingHorizontal:10}}>
                <Txt font={"PoppinsRegular"} style={styles.txt}>{address}</Txt>
                <Txt font={"PoppinsRegular"} style={styles.txt}>{state}</Txt>
            </View>
                <Image source={require('./../../assets/images/notificationIcon.png')}/>
        </View>
    )
}

const styles=StyleSheet.create({
container: {
    height:54, 
    backgroundColor:"#D27203", 
    flexDirection:"row", 
    flex: 1, alignItems: 
    "center", 
    paddingHorizontal: 20 
    },

    txt: {
        color:"white", 
        fontSize:12
    }
})