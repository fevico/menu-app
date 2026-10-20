import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  address?: string;
  onAddressPress?: () => void;
  onCartPress?: () => void;
}

const AppHeader: FC<Props> = ({
  address = "Blossom Street",
  onAddressPress,
  onCartPress,
}) => {
  return (
    <SafeAreaView edges={["top"]}>
      <View style={styles.headerContainer}>
        {/* Left Side: Delivery Address Selector */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onAddressPress}
          style={styles.deliveryContainer}
        >
          <Text style={styles.deliveryLabel}>DELIVERING TO</Text>
          <View style={styles.addressRow}>
            <Ionicons name="location-outline" size={14} color="#1E1E1E" />
            <Text style={styles.addressText}>{address}</Text>
            <Ionicons name="chevron-forward" size={13} color="#6B6B6B" />
          </View>
        </TouchableOpacity>

        {/* Center: Brand Badge "E" */}
        <View style={styles.brandBadge}>
          <Text style={styles.brandLetter}>E</Text>
        </View>

        {/* Right Side: Cart / Bag Icon */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onCartPress}
          style={styles.cartButton}
        >
          {/* Feather/Ionicons shopping bag outline */}
          <Ionicons name="bag-outline" size={20} color="#1E1E1E" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  deliveryContainer: {
    gap: 2,
  },
  deliveryLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#8E8E93",
    textTransform: "uppercase",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addressText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E1E1E",
  },
  brandBadge: {
    width: 32,
    height: 38,
    borderRadius: 16,
    backgroundColor: "#C45A34",
    alignItems: "center",
    justifyContent: "center",
  },
  brandLetter: {
    color: "#FFFFFF",
    fontFamily: "serif",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "700",
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EAE7E1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default AppHeader;