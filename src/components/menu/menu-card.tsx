import { FC } from "react";
import { Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@react-native-vector-icons/ionicons";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  calories: string;
  prepTime: string;
  imageUrl: string;
  category: string;
  isSaved?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
  onPress?: () => void;
  onToggleSave?: (id: string) => void;
}

const MenuCard: FC<MenuCardProps> = ({ item, onPress, onToggleSave }) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-[48%] bg-[#18181B] rounded-2xl overflow-hidden mb-4 p-3 border border-[#27272A]/50"
    >
      {/* 1. Image Container with Floating Favorite Button */}
      <View className="relative w-full h-36 rounded-xl overflow-hidden mb-3">
        <Image
          source={{ uri: item.imageUrl }}
          className="w-full h-full"
          contentFit="cover"
          style={{ width: "100%", height: 140, borderRadius: 12 }}
          transition={200}
        />
        <Pressable
          onPress={() => onToggleSave?.(item.id)}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 items-center justify-center backdrop-blur-md"
        >
          <Ionicons
            name={item.isSaved ? "heart" : "heart-outline"}
            size={16}
            color={item.isSaved ? "#EF4444" : "#FFFFFF"}
          />
        </Pressable>
      </View>

      {/* 2. Title and Price */}
      <View className="flex-row items-start justify-between gap-1 mb-1">
        <Text
          numberOfLines={2}
          className="text-white font-semibold text-sm flex-1 leading-snug"
        >
          {item.name}
        </Text>
        <Text className="text-[#F59E0B] font-bold text-sm">
          ${item.price.toFixed(2)}
        </Text>
      </View>

      {/* 3. Short Description */}
      <Text
        numberOfLines={2}
        className="text-gray-400 text-xs font-normal leading-4 mb-3 min-h-[32px]"
      >
        {item.description}
      </Text>

      {/* 4. Metadata: Rating, Calories, Time */}
      <View className="flex-row items-center justify-between pt-2 border-t border-[#27272A]/60">
        <View className="flex-row items-center">
          <Ionicons name="star" size={11} color="#F59E0B" />
          <Text className="text-gray-300 text-[11px] font-medium ml-1">
            {item.rating.toFixed(1)}
          </Text>
        </View>

        <Text className="text-gray-400 text-[11px]">{item.calories}</Text>

        <View className="flex-row items-center">
          <Ionicons name="time-outline" size={11} color="#9CA3AF" />
          <Text className="text-gray-400 text-[11px] ml-1">{item.prepTime}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuCard;