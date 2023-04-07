import React from "react";
import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "../Theme";


interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: keyof typeof Icon.glyphMap;
  validator?: (input: string) => boolean;
  error?: string;
  touched?: boolean;
}





const TextInput = ({
  icon,
  placeholder,
  validator,
  error,
  touched,
  ...otherProps
}: TextInputProps) => {

  const theme = useTheme();

  const [input, setInput] = React.useState<string>("");
  const { onChangeText } = otherProps;
  const SIZE = theme.borderRadii.m * 2;
 

 
  const color = !touched ? theme.colors.darkGrey : (error ? theme.colors.danger : theme.colors.secondary)
   
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
      backgroundColor: !error ? theme.colors.secondary : theme.colors.danger,
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
            size={12}
            color={theme.colors.white}
          />
        </View>
      )}
    </View>
  );
};

export default TextInput;
