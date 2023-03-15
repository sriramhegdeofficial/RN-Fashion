import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import useEffect from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolateColor,
  multiply,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subTitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
  },
  {
    title: "Eccentric",
    color: "#FFE4D9",
    subTitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
  },
  {
    title: "Funny",
    color: "#FFDDDD",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
  },
];

const Onboarding = () => {
  const scrollRef = React.useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });

  const animatedBGStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        x.value,
        slides.map((_, i) => i * width),
        slides.map((slide) => slide.color)
      ),
    };
  });

  const animatedSubSlidetyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value * -1 }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, animatedBGStyle]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          scrollEventThrottle={1}
          onScroll={scrollHandler}
        >
          {slides.map((slide, index) => {
            return <Slide title={slide.title} key={index.toString()} />;
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            animatedBGStyle,
          ]}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
            },
            animatedSubSlidetyle,
          ]}
        >
          {slides.map(({ subTitle, description }, index) => {
            return (
              <SubSlide
                key={index.toString()}
                last={index === slides.length - 1}
                subTitle={subTitle}
                description={description}
                onPress={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
    backgroundColor: "cyan",
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: "row",
  },
});

export default Onboarding;
