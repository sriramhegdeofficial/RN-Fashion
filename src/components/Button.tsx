import * as React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant = "default", label, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
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
