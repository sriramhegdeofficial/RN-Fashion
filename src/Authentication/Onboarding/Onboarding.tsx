import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolateColor,
  multiply,
  divide,
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
    imageSrc: require("./fashion1.png"),
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
    imageSrc: require("./fashion2.png"),
  },
  {
    title: "Eccentric",
    color: "#FFE4D9",
    subTitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    imageSrc: require("./fashion3.png"),
  },
  {
    title: "Funny",
    color: "#FFDDDD",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    imageSrc: require("./fashion4.png"),
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
            return (
              <Slide
                title={slide.title}
                key={index.toString()}
                imageSrc={slide.imageSrc}
              />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => {
            return (
              <Dot key={index.toString()} x={x} index={index} width={width} />
            );
          })}
        </View>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            animatedBGStyle,
          ]}
        />

        <View
          style={{
            flex: 1,
            //borderColor: "pink",
            //borderWidth: 4,
            borderTopLeftRadius: BORDER_RADIUS,
            overflow: "hidden",
          }}
        >
          <Animated.View
            style={[
              styles.footerContent,
              {
                width: width * slides.length,
                flex: 1,
                //borderColor: "red",
                //borderWidth: 20,
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
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS * 0.75,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
    zIndex: 100,
    flexDirection: "row",
    gap: 8,
  },
  footerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: "row",
    // borderColor: "red",
    // borderWidth: 10,
  },
});

export default Onboarding;
