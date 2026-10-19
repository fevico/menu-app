import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
    email: string;
    setInput: (input: string) => void;
    placeholder?: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const FormInput: FC<Props> = ({ email, setInput, placeholder, keyboardType }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A0"
      keyboardType={keyboardType}
      autoCapitalize="none"
      value={email}
      onChangeText={setInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#F6F6F6",
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#1A1A1A",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  }
});
export default FormInput;
