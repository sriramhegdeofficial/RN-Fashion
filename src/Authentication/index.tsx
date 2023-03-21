import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./../components/Navigation";

import { assets as onBoardingAssets } from "./Onboarding/Onboarding";
import { assets as WelcomeAssets } from "./Welcome/Welcome";
import Onboarding from "./Onboarding/Onboarding";
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
export { default as Onboarding } from "./Onboarding/Onboarding";
export { default as Welcome } from "./Welcome/Welcome";
export { default as Login } from "./Login/Login";
export const assets = [onBoardingAssets, WelcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
