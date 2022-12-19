import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import OnboardingOne from "../components/OnboardingOne";
import OnboardingThree from "../components/OnboardingThree";
import OnboardingTwo from "../components/OnboardingTwo";
import WelcomeScreen from "./WelcomeScreen";

export default class WelcomeSlides extends React.Component {
    render() {
        return (
              <View style={{flex: 1}}>
                  <Swiper
                    //vertical
                    //loop
                    //timeout={-2.5}
                    loop={false}
                    dotStyle={{width: 40, marginTop:-400}}
                    activeDotStyle={{backgroundColor:"#593761", width: 40, marginTop:-400 }}
                    >
                      <View style={{flex:1}}>
                          <OnboardingOne/>
                      </View>
                      <View style={{flex:1}}>
                          <OnboardingTwo/>
                      </View>
                      <View style={{flex:1}}>
                          <OnboardingThree/>
                      </View>
                  </Swiper>
              </View>
        
        )
    }
}