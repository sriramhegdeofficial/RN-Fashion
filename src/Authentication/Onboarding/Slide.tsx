import * as React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";

import { RestyleText } from "../../components";
const { width, height } = Dimensions.get("window");
import Animated from "react-native-reanimated";

interface SlideProps {
  title: string;
  right?: boolean;
  imageSrc: number;
}

export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ title, right = false, imageSrc }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    {
      rotate: right ? "-90deg" : "90deg",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform: transform }]}>
        <RestyleText variant="hero" style={styles.title}>
          {title}
        </RestyleText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },

  titleContainer: {
    height: 100,
    justifyContent: "center",
    transform: [
      {
        translateY: (SLIDE_HEIGHT - 100) / 2,
      },
    ],
  },
  title: {
    zIndex: 100,
  },
});

export default Slide;
