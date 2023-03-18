import {
  createTheme,
  createText,
  createVariant,
  createRestyleComponent,
  VariantProps,
} from "@shopify/restyle";
import { color } from "react-native-reanimated";

const palette = {
  white: "#FFFFFF",
  primary: "#0C0D34",
  primaryFaded: "rgba(12, 13, 52, 0.7)",
  primaryFullyFaded: "rgba(12, 13, 52, 0.05)",
  secondary: "#2CB9B0",
};

const theme = createTheme({
  colors: {
    white: palette.white,
    primary: palette.primary,
    primaryFaded: palette.primaryFaded,
    primaryFullyFaded: palette.primaryFullyFaded,
    secondary: palette.secondary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  textVariants: {
    defaults: {},
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
  },
});

const variant = createVariant<Theme>({
  themeKey: "textVariants",
  defaults: {
    fontSize: 16,
  },
});

const Text = createText<Theme>();

export const RestyleText = createRestyleComponent<
  VariantProps<Theme, "textVariants"> & React.ComponentProps<typeof Text>,
  Theme
>([createVariant({ themeKey: "textVariants" })], Text);

export type Theme = typeof theme;
export default theme;
