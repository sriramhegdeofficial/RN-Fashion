import * as React from "react";
import Animated from "react-native-reanimated";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";

interface SubSlide {
  last?: boolean;
  subTitle: string;
  description: string;
  onPress: () => void;
}

const SubSlide = ({ last, subTitle, description, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        onPress={onPress}
        label={last ? "Get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    color: "#0C0D34",
    lineHeight: 30,
    marginVertical: 24,
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default SubSlide;
