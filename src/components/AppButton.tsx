import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  handleContinue: () => void;
  title: string;
  variant?: "primary" | "guest";
}

const AppButton: FC<Props> = ({ handleContinue, title, variant = "primary" }) => {
  const isGuest = variant === "guest";

  return (
    <TouchableOpacity
      style={[
        styles.baseButton,
        isGuest ? styles.guestButton : styles.primaryButton,
      ]}
      activeOpacity={0.85}
      onPress={handleContinue}
    >
      <Text style={[styles.baseText, isGuest ? styles.guestText : styles.primaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    height: 54,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#C45A34",
    shadowColor: "#C45A34",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  guestButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB", // subtle gray border matching Figma
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  baseText: {
    fontSize: 16,
    fontWeight: "700",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  guestText: {
    color: "#1E1E1E", // dark charcoal text
  },
});

export default AppButton;