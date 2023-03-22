import React from "react";
import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import theme from "../Theme";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: keyof typeof Icon.glyphMap;
  validator: (input: string) => boolean;
}

const Valid = true;
const InValid = false;
const Pristine = null;

type InputState = typeof Valid | typeof InValid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({
  icon,
  placeholder,
  validator,
  ...otherProps
}: TextInputProps) => {
  const [isValid, setIsValid] = React.useState<InputState>(Pristine);
  const [input, setInput] = React.useState<string>("");

  const validate = () => {
    const valid = validator(input);
    setIsValid(valid);
  };

  const onChangeText = (text: string) => {
    setInput(text);
    if (isValid !== Pristine) {
      validate();
    }
  };

  const color =
    isValid === Pristine
      ? theme.colors.darkGrey
      : isValid === Valid
      ? theme.colors.secondary
      : theme.colors.danger;
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      height: 48,
      borderRadius: theme.borderRadii.s,
      borderColor: `${color}`,
      borderWidth: StyleSheet.hairlineWidth,
      paddingHorizontal: theme.borderRadii.m,
    },
    indicatorWrapper: {
      height: SIZE,
      width: SIZE,
      borderRadius: SIZE / 2,
      backgroundColor: isValid === Pristine ? theme.colors.plain : color,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <View style={{ padding: theme.borderRadii.s }}>
        <Icon name={icon} color={color} size={16} />
      </View>

      <RNTextInput
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor={theme.colors.darkGrey}
        autoComplete="off"
        {...otherProps}
        onBlur={validate}
        onChangeText={(text) => onChangeText(text)}
        style={{ flex: 1, backgroundColor: "transparent" }}
      />
      {(isValid === Valid || isValid === InValid) && (
        <View style={styles.indicatorWrapper}>
          <Icon
            name={isValid === Valid ? "check" : "x"}
            size={12}
            color={theme.colors.white}
          />
        </View>
      )}
    </View>
  );
};

export default TextInput;
