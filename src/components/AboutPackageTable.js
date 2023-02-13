import { View, Text, StyleSheet } from "react-native";
import Txt from "./Txt";

export default function AboutPackageTable(){
    return(
        <View style={{flexDirection:"row"}}>
            <View style={{}}>
                <Txt font={"PoppinsRegular"} style={{fontSize:20, color:"#000000B2", marginTop:15}}>Category</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Gadget</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Clothing</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Clothing</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Gadgets</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Foods</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Electronics</Txt>
            </View>
            <View style={{marginLeft:136}}>
                <Txt font={"PoppinsRegular"} style={{fontSize:20, color:"#000000B2", marginTop:15}}>Items</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Digital Camera</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Shirts</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Shoes</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Phone</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>Shawarma</Txt>
                <Txt font={"PoppinsRegular"} style={{fontSize:16, color:"#00000080", marginTop:10}}>100 mm Cable</Txt>
            </View>
        </View>
    )
}