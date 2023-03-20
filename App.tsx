import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Onboarding,
  Welcome,
  assets as AuthenticationAssets,
} from "./src/Authentication";
import LoadAssets from "./src/components/LoadAssets";
import theme from "./src/components/Theme";
import { View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { Routes } from "./src/components/Navigation";

const assets = [...AuthenticationAssets];

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();

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
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>

    // <View style={{ flex: 1, backgroundColor: "red" }}></View>
    // <NavigationContainer>
    //   <AuthenticationNavigator />
    // </NavigationContainer>
  );
}
