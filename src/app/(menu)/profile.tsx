import { FC } from "react";
import { Text, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

interface PreferenceItem {
  label: string;
  value: string;
}

const PREFERENCES: PreferenceItem[] = [
  {
    label: "Dietary preferences",
    value: "No restrictions",
  },
  {
    label: "Allergies",
    value: "None noted",
  },
  {
    label: "Preferred table",
    value: "Window seat",
  },
  {
    label: "Loyalty points",
    value: "1,240 pts",
  },
];

const Profile: FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#09090B]">
      <ScrollView
        className="flex-1 px-5 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Header Profile Card */}
        <View className="flex-row items-center gap-4 mb-8 mt-2">
          {/* Circular Avatar */}
          <View className="w-14 h-14 rounded-full overflow-hidden border border-[#27272A] bg-[#18181B]">
            <Image
              source="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              style={{ width: "100%", height: "100%" }}
              contentFit="cover"
            />
          </View>

          {/* Name & Membership */}
          <View className="flex-col">
            <Text className="text-white text-lg font-semibold tracking-wide">
              Alex Morgan
            </Text>
            <Text className="text-gray-500 text-xs mt-0.5">
              Member since Jan 2025
            </Text>
          </View>
        </View>

        {/* 2. Preferences & Details List */}
        <View className="w-full">
          {PREFERENCES.map((item, index) => (
            <View
              key={item.label}
              className={`flex-row justify-between items-center py-4 ${
                index !== PREFERENCES.length - 1
                  ? "border-b border-[#27272A]/40"
                  : ""
              }`}
            >
              <Text className="text-gray-400 text-sm font-normal">
                {item.label}
              </Text>
              <Text className="text-white text-sm font-medium">
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;