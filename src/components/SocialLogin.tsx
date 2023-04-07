import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { useTheme } from "./Theme";

const SocialLogin = () => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l;
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
    },
    iconWrapper: {
      backgroundColor: "white",
      width: SIZE * 2,
      height: SIZE * 2,
      borderRadius: SIZE,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <FontAwesome name="google" size={SIZE} color={theme.colors.primary} />
      </View>
      <View style={styles.iconWrapper}>
        <FontAwesome name="facebook" size={SIZE} color={theme.colors.primary} />
      </View>
      <View style={styles.iconWrapper}>
        <FontAwesome name="twitter" size={SIZE} color={theme.colors.primary} />
      </View>
      {/* <View style={styles.iconWrapper}>
        <FontAwesome name="pinterest-p" size={SIZE} color="black" />
      </View> */}
    </View>
  );
};

export default SocialLogin;
