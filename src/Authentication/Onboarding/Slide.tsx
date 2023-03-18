import * as React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");

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
      <View style={styles.underlay}>
        <Image source={imageSrc} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform: transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",

    borderBottomRightRadius: 75,
    overflow: "hidden",
  },
  picture: {
    flex: 1,
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
    fontSize: 80,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
});

export default Slide;
