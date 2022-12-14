import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";

export default Txt=({font, style, children,onPress, ...otherProps})=>{
    //calling the actual font
    let [fontLoaded] = useFonts({
        InterBold: require('./../../assets/fonts/Inter/static/Inter-Bold.ttf'),
        InterLight: require('./../../assets/fonts/Inter/static/Inter-Light.ttf'),
        InterBlack: require('./../../assets/fonts/Inter/static/Inter-Black.ttf'),
        InterRegular: require('./../../assets/fonts/Inter/static/Inter-Regular.ttf'),
        InterMedium: require('./../../assets/fonts/Inter/static/Inter-Medium.ttf'),
        PoppinsRegular: require('./../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        PoppinsBold: require('./../../assets/fonts/Poppins/Poppins-Bold.ttf')


    })
    return(
        <>
        {fontLoaded ? 
        (<Text style={[{fontFamily: font }, style]} {...otherProps} onPress={onPress}>{children}</Text>) :
        
        (<Text style={[style]} {...otherProps}>{children}</Text>)
        }
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})