import React from "react";
import { View } from "react-native";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import theme from "../../components/Theme";
import {
  Button,
  Container,
  SocialLogin,
  RestyleText,
} from "./../../components";

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <View style={{ alignItems: "center" }}>
        <SocialLogin />
        <Button
          variant="transparent"
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <RestyleText style={{ color: theme.colors.white }}>
              Don't have an account?
            </RestyleText>
            <RestyleText variant="button">Sign up here</RestyleText>
          </View>
        </Button>
      </View>
    </>
  );
  return (
    <Container footer={footer}>
      <View />
    </Container>
  );
};

export default Login;
