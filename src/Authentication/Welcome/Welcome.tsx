import * as React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./../Onboarding/Slide";
import { useTheme } from "@shopify/restyle";
import { RestyleText } from "../../components/Theme";
import { Button } from "../../components";

interface WelcomeProps {}

const ImageSrc = {
  src: require("./../Onboarding/fashion1.png"),
};

export const assets = ImageSrc.src;

const { width, height } = Dimensions.get("window");

const Welcome = ({}: WelcomeProps) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      // borderColor: "black",
      // borderWidth: 5,
    },
    slider: {
      height: height * 0.5,
      borderBottomRightRadius: theme.borderRadii.xl,
      backgroundColor: theme.colors.lightGrey,
      //borderColor: "black",
      //borderWidth: 2,
    },
    underlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      width: width,
      height: height * 0.5,
      borderBottomRightRadius: theme.borderRadii.xl,
      overflow: "hidden",
    },

    footer: {
      flex: 1,
      backgroundColor: theme.colors.lightGrey,

      //borderTopLeftRadius: theme.borderRadii.xl,
    },
    footerContent: {
      flex: 1,
      zIndex: 100,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: theme.borderRadii.xl,
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: theme.spacing.xl,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View style={styles.underlay}>
          <RestyleText
            variant="huge"
            style={{ color: theme.colors.white, width }}
            numberOfLines={1}
            ellipsizeMode="clip"
          >
            OUT
          </RestyleText>
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              //borderColor: theme.colors.lightGrey,
              //borderWidth: 5,
              height: theme.borderRadii.xl,
              zIndex: -100,
              backgroundColor: theme.colors.lightGrey,
            },
          ]}
        />
        <View style={styles.footerContent}>
          <RestyleText variant="title2">Let's get started</RestyleText>
          <RestyleText variant="body">
            Login to your account or signup for an amazing experience.
          </RestyleText>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Button
            variant="default"
            label="Sign up, it's free"
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
