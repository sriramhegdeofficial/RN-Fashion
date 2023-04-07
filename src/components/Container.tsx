import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme } from "./Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
  style?: object;
}

export const assets = [
  require("./assets/1.png"),
  require("./assets/2.png"),
  require("./assets/3.png"),
];

const Container = ({ children, footer, style = {} }: ContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    imageContainer: {
      borderBottomLeftRadius: theme.borderRadii.xl,
      overflow: "hidden",
      height: height * 0.61,
    },
    overlay: {
      flex: 1,
      overflow: "hidden",
      backgroundColor: theme.colors.primary,
    },
    image: {
      width,
      height,
    },
    overlayImage: {
      width,
      height,
      ...StyleSheet.absoluteFillObject,
      top: -height * 0.61,
    },
    box: {
      borderRadius: theme.borderRadii.xl,
      borderTopLeftRadius: 0,
      backgroundColor: theme.colors.white,
      flex: 1,
    },
    footer: {
      backgroundColor: theme.colors.primary,
      paddingTop: theme.borderRadii.m,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <Image source={assets[0]} style={styles.image} />
      </View>
      <View style={styles.overlay}>
        <Image source={assets[0]} style={styles.overlayImage} />
        <View style={styles.box}>{children}</View>
      </View>
      <View style={styles.footer}>
        {footer}
        <View style={{ height: insets.bottom + theme.borderRadii.m }} />
      </View>
    </View>
  );
};

export default Container;
