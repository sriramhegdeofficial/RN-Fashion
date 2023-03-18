import * as React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant = "default", label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.secondary
      : theme.colors.primaryFullyFaded;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.primary;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Medium",
  },
});

export default Button;
