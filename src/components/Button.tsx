import * as React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
<<<<<<< HEAD

import { useTheme } from "./Theme";
=======
import { useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";
>>>>>>> origin/main

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: React.ReactNode;
}

const Button = ({
  variant = "default",
  label = "",
  onPress,
  children,
}: ButtonProps) => {
<<<<<<< HEAD
  const theme = useTheme();
=======
  const theme = useTheme<Theme>();
>>>>>>> origin/main
  const backgroundColor =
    variant === "primary"
      ? theme.colors.secondary
      : variant === "transparent"
      ? theme.colors.plain
      : theme.colors.primaryFullyFaded;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.primary;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={1}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
    </TouchableOpacity>
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
    fontFamily: "SFProText-Semibold",
  },
});

export default Button;
