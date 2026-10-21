import { Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { FC } from "react";
import { GestureResponderEvent, Pressable, Text, View } from "react-native";
import { useWishlistStore } from "../../../store/store";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  calories?: string;
  prepTime: string;
  imageUrl: string;
  category: string;
  isSaved?: boolean;
  tag?: string; // "CHEF'S PICK", "POPULAR", "SIGNATURE", etc.
}

interface MenuCardProps {
  item: MenuItem;
  onPress?: () => void;
  onToggleSave?: (item: MenuItem) => void;
  onAddToCart?: (item: MenuItem) => void;
}

const MenuCard: FC<MenuCardProps> = ({ item, onPress, onAddToCart }) => {
  const toggleWishlist = useWishlistStore((state: any) => state.toggleWishlist);
  const isSaved = useWishlistStore((state: any) =>
    state.wishlist.some((dish: MenuItem) => dish.id === item.id),
  );

  const handleToggleSave = (e: GestureResponderEvent) => {
    e.stopPropagation(); // Prevents navigating to dish detail
    toggleWishlist(item);
  };

  const handleAdd = (e: GestureResponderEvent) => {
    e.stopPropagation(); // Prevents navigating to dish detail
    onAddToCart?.(item);
  };

  return (
    <Pressable
      onPress={onPress}
      className="w-[48%] bg-white rounded-2xl overflow-hidden mb-4 border border-[#EFECE6]"
    >
      {/* 1. Flush Top Image Container */}
      <View style={{ width: "100%", height: 130, position: "relative", backgroundColor: "#F5F2EB" }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
          transition={200}
        />

        {/* Favorite Heart Button (White circle matching Figma) */}
        <Pressable
          onPress={handleToggleSave}
          hitSlop={8}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white items-center justify-center shadow-sm"
        >
          <Ionicons
            name={isSaved ? "heart" : "heart-outline"}
            size={15}
            color={isSaved ? "#C45A34" : "#1E1E1E"}
          />
        </Pressable>

        {/* Tag Pill (Bottom-left of image: e.g. "CHEF'S PICK") */}
        {item.tag && (
          <View className="absolute bottom-2 left-2 bg-white/95 px-2 py-0.5 rounded-md">
            <Text className="text-[#C45A34] text-[9px] font-bold tracking-wider uppercase">
              {item.tag}
            </Text>
          </View>
        )}
      </View>

      {/* 2. Content Section (Padding belongs here) */}
      <View className="p-3">
        {/* Rating and Prep Time */}
        <View className="flex-row items-center gap-1 mb-1">
          <Ionicons name="star" size={11} color="#D4A373" />
          <Text className="text-[#1E1E1E] text-[11px] font-bold">
            {item.rating.toFixed(1)}
          </Text>
          <Text className="text-gray-400 text-[11px]">·</Text>
          <Text className="text-gray-500 text-[11px]">{item.prepTime}</Text>
        </View>

        {/* Dish Title (Serif) */}
        <Text
          numberOfLines={1}
          className="text-[#1E1E1E] font-bold text-sm leading-tight mb-1"
          style={{ fontFamily: "serif" }}
        >
          {item.name}
        </Text>

        {/* Short Description */}
        <Text
          numberOfLines={2}
          className="text-gray-500 text-[11px] leading-4 min-h-[32px] mb-2"
        >
          {item.description}
        </Text>

        {/* Price and Add to Cart */}
        <View className="flex-row justify-between items-center mt-1">
          <Text className="text-[#C45A34] font-bold text-sm">
            ${item.price.toFixed(2)}
          </Text>

          <Pressable
            onPress={handleAdd}
            hitSlop={8}
            className="w-7 h-7 rounded-full bg-[#C45A34] items-center justify-center active:opacity-80"
          >
            <Entypo name="plus" color="#FFFFFF" size={18} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuCard;
