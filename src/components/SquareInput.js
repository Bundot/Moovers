import { View, StyleSheet, TextInput} from 'react-native';

export default function SquareInput(){
    return(
        <View style={styles.container}>
            <View style={{height:60, width: 60, borderRadius: 10, borderWidth: 2, alignItems:"center", justifyContent: "center"}}>
                <TextInput style={{fontSize:40, fontWeight:"bold"}}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row"
    }
})