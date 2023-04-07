import * as React from "react";
import { useTheme } from "./../../components";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  interpolateNode,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface DotProps {
  index: number;
  x: SharedValue<number>;
  width: number;
  color: string;
}

const Dot = ({ index, x, width, color }) => {
  const theme = useTheme();
  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value / width,
        [index - 1, index, index + 1],
        [0.5, 1, 0.5],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: interpolate(
            x.value / width,
            [index - 1, index, index + 1],
            [1, 1.25, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          backgroundColor: color,
          width: 8,
          height: 8,
          borderRadius: 4,
        },
        animatedDotStyle,
      ]}
    ></Animated.View>
  );
};

export default Dot;
