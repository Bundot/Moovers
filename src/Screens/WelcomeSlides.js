import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";
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
                    
                    controlsProps={{
                     sty
                      dotActiveStyle: { backgroundColor: '#593761', width: 40},
                      dotsWrapperStyle:{marginBottom: 150 }
                    }}
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
                      <View style={{flex:1}}>
                          <WelcomeScreen/>
                      </View>
                  </Swiper>
              </View>
        
        )
    }
}