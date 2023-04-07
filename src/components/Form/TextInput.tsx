import React from "react";
import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
<<<<<<< HEAD
import { useTheme } from "../Theme";

=======
import theme from "../Theme";
>>>>>>> origin/main

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: keyof typeof Icon.glyphMap;
<<<<<<< HEAD
  validator?: (input: string) => boolean;
  error?: string;
  touched?: boolean;
}




=======
  validator: (input: string) => boolean;
}

const Valid = true;
const InValid = false;
const Pristine = null;

type InputState = typeof Valid | typeof InValid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;
>>>>>>> origin/main

const TextInput = ({
  icon,
  placeholder,
  validator,
<<<<<<< HEAD
  error,
  touched,
  ...otherProps
}: TextInputProps) => {

  const theme = useTheme();

  const [input, setInput] = React.useState<string>("");
  const { onChangeText } = otherProps;
  const SIZE = theme.borderRadii.m * 2;
 

 
  const color = !touched ? theme.colors.darkGrey : (error ? theme.colors.danger : theme.colors.secondary)
   
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD
      backgroundColor: !error ? theme.colors.secondary : theme.colors.danger,
=======
      backgroundColor: isValid === Pristine ? theme.colors.plain : color,
>>>>>>> origin/main
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
<<<<<<< HEAD
        
        onChangeText={(text) => {
          if(onChangeText) {
            onChangeText(text)
          }
        }}
        style={{ flex: 1, backgroundColor: "transparent" }}
      />
      {touched  && (
        <View style={styles.indicatorWrapper}>
          <Icon
            name={ !error ? "check" : "x"}
=======
        onBlur={validate}
        onChangeText={(text) => onChangeText(text)}
        style={{ flex: 1, backgroundColor: "transparent" }}
      />
      {(isValid === Valid || isValid === InValid) && (
        <View style={styles.indicatorWrapper}>
          <Icon
            name={isValid === Valid ? "check" : "x"}
>>>>>>> origin/main
            size={12}
            color={theme.colors.white}
          />
        </View>
      )}
    </View>
  );
};

export default TextInput;
