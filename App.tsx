import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Welcome } from "./src/Authentication";

import LoadAssets from "./src/components/LoadAssets";
import { View } from "react-native";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
    // <View style={{ flex: 1, backgroundColor: "red" }}></View>
    // <NavigationContainer>
    //   <AuthenticationNavigator />
    // </NavigationContainer>
  );
}
