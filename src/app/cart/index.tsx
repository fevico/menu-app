import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import {
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface DeliveryAddress {
  label: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  postcode: string;
  note: string;
}

const Cart: FC = () => {
  const router = useRouter();

  // Controls whether the form ("Cancel") or summary card ("Change") is displayed
  const [isEditingAddress, setIsEditingAddress] = useState(true);

  const [address, setAddress] = useState<DeliveryAddress>({
    label: "Home",
    fullName: "Alex Morgan",
    phone: "+44 7700 900123",
    street: "14 Blossom Street",
    city: "London",
    postcode: "E1 6PL",
    note: "Leave with concierge",
  });

  const toggleAddressForm = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsEditingAddress((prev) => !prev);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBF9F5]" edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        {/* Header Row: Left Button | Centered Title | Right Balancer */}
        <View className="px-5 pt-2 pb-3 flex-row items-center justify-between">
          <Pressable
            onPress={() => router.back()}
            hitSlop={8}
            className="w-9 h-9 rounded-full bg-white border border-[#EFECE6] items-center justify-center shadow-xs active:opacity-80"
          >
            <AntDesign name="left" size={15} color="#1E1E1E" />
          </Pressable>

          <Text
            style={{ fontFamily: "serif" }}
            className="text-xl font-bold text-[#1E1E1E]"
          >
            Checkout
          </Text>

          <View className="w-9 h-9" />
        </View>

        <ScrollView
          className="flex-1 px-5 pt-3"
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Section Header: Numbered Badge + Title + Change/Cancel Toggle */}
          <View className="flex-row justify-between items-center mb-3.5">
            <View className="flex-row items-center gap-2.5">
              <View className="w-6 h-6 rounded-full bg-[#C45A34] items-center justify-center">
                <Text className="text-white text-xs font-bold">1</Text>
              </View>
              <Text
                style={{ fontFamily: "serif" }}
                className="text-lg font-bold text-[#1E1E1E]"
              >
                Delivery address
              </Text>
            </View>

            <Pressable onPress={toggleAddressForm} hitSlop={8}>
              <Text className="text-xs font-semibold text-[#C45A34]">
                {isEditingAddress ? "Cancel" : "Change"}
              </Text>
            </Pressable>
          </View>

          {/* Conditional View: Expanded Form vs. Compact Address Summary */}
          {isEditingAddress ? (
            <View className="bg-white rounded-3xl p-4 border border-[#EFECE6] shadow-xs">
              {/* Card Subheader */}
              <View className="flex-row items-center gap-3 mb-4">
                <View className="w-10 h-10 rounded-full bg-[#FDF3EE] items-center justify-center">
                  <Ionicons name="location-outline" size={18} color="#C45A34" />
                </View>
                <View>
                  <Text
                    style={{ fontFamily: "serif" }}
                    className="text-base font-bold text-[#1E1E1E]"
                  >
                    Add delivery address
                  </Text>
                  <Text className="text-[11px] text-neutral-400">
                    Tell us exactly where to bring your order.
                  </Text>
                </View>
              </View>

              {/* Row 1: Address Label & Full Name */}
              <View className="flex-row gap-3 mb-3.5">
                <View className="flex-1">
                  <Text className="text-[11px] font-bold text-neutral-700 mb-1.5">
                    Address label
                  </Text>
                  <TextInput
                    value={address.label}
                    onChangeText={(text) =>
                      setAddress((prev) => ({ ...prev, label: text }))
                    }
                    placeholder="e.g. Home"
                    placeholderTextColor="#9CA3AF"
                    className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E]"
                  />
                </View>

                <View className="flex-1">
                  <Text className="text-[11px] font-bold text-neutral-700 mb-1.5">
                    Full name
                  </Text>
                  <TextInput
                    value={address.fullName}
                    onChangeText={(text) =>
                      setAddress((prev) => ({ ...prev, fullName: text }))
                    }
                    placeholder="Your full name"
                    placeholderTextColor="#9CA3AF"
                    className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E]"
                  />
                </View>
              </View>

              {/* Row 2: Phone Number */}
              <View className="mb-3.5">
                <Text className="text-[11px] font-bold text-neutral-700 mb-1.5">
                  Phone number
                </Text>
                <TextInput
                  value={address.phone}
                  onChangeText={(text) =>
                    setAddress((prev) => ({ ...prev, phone: text }))
                  }
                  placeholder="+44 7700 900123"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                  className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E]"
                />
              </View>

              {/* Row 3: Street Address */}
              <View className="mb-3.5">
                <Text className="text-[11px] font-bold text-neutral-700 mb-1.5">
                  Street address
                </Text>
                <TextInput
                  value={address.street}
                  onChangeText={(text) =>
                    setAddress((prev) => ({ ...prev, street: text }))
                  }
                  placeholder="Street number and name"
                  placeholderTextColor="#9CA3AF"
                  className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E]"
                />
              </View>

              {/* Row 4: City & Postcode */}
              <View className="flex-row gap-3 mb-3.5">
                <View className="flex-1">
                  <Text className="text-[11px] font-bold text-neutral-700 mb-1.5">
                    City
                  </Text>
                  <TextInput
                    value={address.city}
                    onChangeText={(text) =>
                      setAddress((prev) => ({ ...prev, city: text }))
                    }
                    placeholder="City"
                    placeholderTextColor="#9CA3AF"
                    className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E]"
                  />
                </View>

                <View className="flex-1">
                  <Text className="text-[11px] font-bold text-neutral-700 mb-1.5">
                    Postcode
                  </Text>
                  <TextInput
                    value={address.postcode}
                    onChangeText={(text) =>
                      setAddress((prev) => ({ ...prev, postcode: text }))
                    }
                    placeholder="Postcode"
                    placeholderTextColor="#9CA3AF"
                    autoCapitalize="characters"
                    className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E]"
                  />
                </View>
              </View>

              {/* Row 5: Delivery Note */}
              <View>
                <Text className="text-[11px] font-bold text-neutral-700">
                  Delivery note
                </Text>
                <Text className="text-[10px] text-neutral-400 mb-1.5">
                  Optional
                </Text>
                <TextInput
                  value={address.note}
                  onChangeText={(text) =>
                    setAddress((prev) => ({ ...prev, note: text }))
                  }
                  placeholder="Leave with concierge, gate code, etc."
                  placeholderTextColor="#9CA3AF"
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                  className="bg-[#FAF8F5] border border-[#EFECE6] rounded-xl px-3.5 py-2.5 text-xs text-[#1E1E1E] min-h-[68px]"
                />
              </View>
            </View>
          ) : (
            /* Compact Summary Card when "Cancel" is clicked */
            <Pressable
              onPress={toggleAddressForm}
              className="bg-white rounded-2xl p-4 border border-[#EFECE6] flex-row items-center gap-3 shadow-xs"
            >
              <View className="w-10 h-10 rounded-full bg-[#FDF3EE] items-center justify-center">
                <Ionicons name="location-outline" size={18} color="#C45A34" />
              </View>
              <View className="flex-1">
                <View className="flex-row items-center gap-2">
                  <Text className="text-sm font-bold text-[#1E1E1E]">
                    {address.label || "Delivery"}
                  </Text>
                  <Text className="text-xs text-neutral-400">
                    • {address.fullName}
                  </Text>
                </View>
                <Text className="text-xs text-neutral-500 mt-0.5" numberOfLines={1}>
                  {address.street}, {address.city} {address.postcode}
                </Text>
              </View>
            </Pressable>
          )}
        </ScrollView>

        {/* Bottom Sticky Action Footer */}
        <View className="px-5 pt-3 pb-4 bg-[#FBF9F5] border-t border-[#EFECE6]">
          <Pressable
            onPress={() => {
              if (isEditingAddress) {
                toggleAddressForm();
              } else {
                // Proceed to payment
              }
            }}
            className={`w-full py-3.5 rounded-2xl items-center justify-center ${
              isEditingAddress ? "bg-[#E2B7A6]" : "bg-[#C45A34]"
            }`}
          >
            <Text className="text-white text-sm font-bold">
              {isEditingAddress
                ? "Save your details to continue"
                : "Proceed to payment"}
            </Text>
          </Pressable>

          <Text className="text-[10px] text-neutral-400 text-center mt-2">
            By paying, you agree to the order total and delivery details above.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Cart; 