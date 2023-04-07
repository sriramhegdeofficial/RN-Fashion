import "react-native-gesture-handler";
import * as React from "react";

import { assets as AuthenticationAssets } from "./src/Authentication";
import LoadAssets from "./src/components/LoadAssets";
import theme from "./src/components/Theme";
import { View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { AuthenticationNavigator } from "./src/Authentication";
import { SafeAreaProvider } from "react-native-safe-area-context";

const assets = [...AuthenticationAssets];

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
