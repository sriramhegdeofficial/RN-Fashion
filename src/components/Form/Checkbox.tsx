import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RestyleText } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";
import theme from "../Theme";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  // const [checked, setChecked] = React.useState<boolean>(false);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: theme.borderRadii.m,
    },
    checkbox: {
      backgroundColor: checked ? theme.colors.secondary : theme.colors.white,
      width: theme.borderRadii.m * 2,
      height: theme.borderRadii.m * 2,
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.secondary,
    },
  });

  return (
    <TouchableOpacity onPress={() => onChange()} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <Icon name="check" color={theme.colors.white} />
        </View>
        <RestyleText variant="button">{label}</RestyleText>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
