import {
  createTheme,
  createText,
  createVariant,
  createRestyleComponent,
  VariantProps,
  createBox,
<<<<<<< HEAD
  useTheme as useReTheme
=======
>>>>>>> origin/main
} from "@shopify/restyle";
import { color } from "react-native-reanimated";

const palette = {
  white: "#FFFFFF",
  primary: "#0C0D34",
  primaryFaded: "rgba(12, 13, 52, 0.7)",
  primaryFullyFaded: "rgba(12, 13, 52, 0.05)",
  secondary: "#2CB9B0",
  lightGrey: "#F4F0EF",
  plain: "transparent",
  darkGrey: "#8A8D90",
  danger: "#DC3545",
};

const theme = createTheme({
  colors: {
    white: palette.white,
    primary: palette.primary,
    primaryFaded: palette.primaryFaded,
    primaryFullyFaded: palette.primaryFullyFaded,
    secondary: palette.secondary,
    lightGrey: palette.lightGrey,
    plain: palette.plain,
    darkGrey: palette.darkGrey,
    danger: palette.danger,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    defaults: {},
    huge: {
      fontSize: 180,
      fontFamily: "SFProText-Bold",
      textAlign: "center",
    },
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "primary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "primary",
    },
    body: {
      fontFamily: "SFProText-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "primary",
      textAlign: "center",
    },
    button: {
      fontFamily: "SFProText-Medium",
      fontSize: 15,
      color: "secondary",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
  },
  boxVariants: {
    defaults: {},
  },
});

// const variant = createVariant<Theme>({
//   themeKey: "textVariants",
//   defaults: {
//     fontSize: 16,
//   },
// });

const Text = createText<Theme>();
const Box = createBox<Theme>();

export const RestyleText = createRestyleComponent<
  VariantProps<Theme, "textVariants"> & React.ComponentProps<typeof Text>,
  Theme
>([createVariant({ themeKey: "textVariants" })], Text);

export const RestyleBox = createRestyleComponent<
  VariantProps<Theme, "boxVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "boxVariants" })], Box);

export type Theme = typeof theme;
<<<<<<< HEAD
export const useTheme = () => useReTheme<Theme>();
export default theme;

=======
export default theme;
>>>>>>> origin/main
