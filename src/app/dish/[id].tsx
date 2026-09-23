import { MENU_ITEMS } from "@/utils/menu-data";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FC, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context"; 

interface Props {}

const MenuDetails: FC<Props> = (props) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const insets = useSafeAreaInsets(); // Dynamically gets safe space for status bar & notch
  const dish = MENU_ITEMS.find((m) => m.id === id);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const totalPrice = ((dish?.price ?? 0) * quantity).toFixed(2);

  return (
    <SafeAreaView>
      <View className="relative w-full h-[360px] bg-[#09090B]">
        {/* 1. Main Background Dish Image */}
        <Image
          source={dish?.imageUrl}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />

        {/* 2. Gradient Overlay: Fades the bottom into the page background color */}
        <LinearGradient
          colors={["transparent", "rgba(9, 9, 11, 0.4)", "#09090B"]}
          locations={[0.4, 0.75, 1.0]}
          style={StyleSheet.absoluteFill}
        />

        {/* 3. Floating Action Buttons (Top Bar) */}
        <View
          style={{ paddingTop: insets.top + 8 }}
          className="absolute top-0 left-0 right-0 px-4 flex-row justify-between items-center z-10"
        >
          {/* Back Button */}
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-black/40 items-center justify-center border border-white/10"
          >
            <AntDesign name="left" size={18} color="#FFFFFF" />
          </Pressable>

          {/* Favorite Button */}
          <Pressable
            onPress={() => console.log("Toggle save")}
            className="w-10 h-10 rounded-full bg-black/40 items-center justify-center border border-white/10"
          >
            <Ionicons
              name={dish?.isSaved ? "heart" : "heart-outline"}
              size={20}
              color={dish?.isSaved ? "#EF4444" : "#FFFFFF"}
            />
          </Pressable>
        </View>

        {/* 4. Bottom Titles directly over the faded image area */}
        <View className="absolute bottom-4 left-0 right-0 px-5 z-10">
          <Text className="text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-1">
            {dish?.name || "Vegetarian"}
          </Text>
          <Text className="text-white text-2xl font-bold">
            {dish?.name || "Wild Mushroom Risotto"}
          </Text>
        </View>
      </View>

      <View className="px-5 my-4">
        <View className="w-full bg-[#18181B] border border-[#27272A]/70 rounded-2xl py-3 px-4 flex-row items-center justify-between">
          {/* 1. Rating */}
          <View className="flex-1 items-center">
            <View className="flex-row items-center gap-1.5 mb-1">
              <AntDesign name="star" color="#F59E0B" size={15} />
              <Text className="text-white font-bold text-sm">
                {dish?.rating ? Number(dish.rating).toFixed(1) : "4.6"}
              </Text>
            </View>
            <Text className="text-gray-400 text-[10px] uppercase font-semibold tracking-wider">
              Rating
            </Text>
          </View>

          {/* Divider */}
          <View className="w-[1px] h-7 bg-[#27272A]" />

          {/* 2. Prep Time */}
          <View className="flex-1 items-center">
            <View className="flex-row items-center gap-1.5 mb-1">
              <Feather name="clock" color="#9CA3AF" size={14} />
              <Text className="text-white font-bold text-sm">
                {dish?.prepTime || "12 min"}
              </Text>
            </View>
            <Text className="text-gray-400 text-[10px] uppercase font-semibold tracking-wider">
              Prep Time
            </Text>
          </View>

          {/* Divider */}
          <View className="w-[1px] h-7 bg-[#27272A]" />

          {/* 3. Calories */}
          <View className="flex-1 items-center">
            <View className="flex-row items-center gap-1.5 mb-1">
              <Ionicons name="flame-outline" color="#F97316" size={15} />
              <Text className="text-white font-bold text-sm">
                {dish?.calories || "410"}
              </Text>
            </View>
            <Text className="text-gray-400 text-[10px] uppercase font-semibold tracking-wider">
              Calories
            </Text>
          </View>
        </View>
      </View>

      {/* 1. Description */}
      <View className="px-5 mb-6">
        <Text className="text-gray-300 italic text-[13px] leading-5 tracking-normal">
          {dish?.description}
        </Text>
      </View>

      {/* 2. Ingredients Section */}
      <View className="px-5 mb-6">
        <Text className="text-white text-[11px] font-semibold tracking-widest uppercase mb-3">
          Ingredients
        </Text>

        <View className="flex-row flex-wrap gap-2">
          {dish?.ingredients.map((item) => (
            <View
              key={item}
              className="h-10 px-3 rounded-xl bg-[#18181B] border border-[#27272A] items-center justify-center min-w-[30%] flex-grow"
            >
              <Text
                numberOfLines={1}
                className="text-gray-300 text-xs font-medium text-center"
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View> 

      {/* allegens */}
      <View className="px-5 mb-6">
        <Text className="text-white text-[11px] font-semibold tracking-widest uppercase mb-3">
          Allegens
        </Text>

        <View className="flex-row flex-wrap gap-2">
          {dish?.allergens.map((item) => (
            <View
              key={item}
              className="h-10 px-3 rounded-xl bg-[#18181B] border border-[#27272A] items-center justify-center min-w-[30%] flex-grow"
            >
              <Text
                numberOfLines={1}
                className="text-[#F59E0B] text-xs font-medium text-center"
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Container anchored at the bottom */}
      <View className="px-5 pt-3 pb-6 bg-[#09090B] border-t border-[#27272A]/50 flex-row items-center gap-3">
        {/* 1. Stepper / Counter Pill */}
        <View className="flex-row items-center bg-[#18181B] border border-[#27272A] rounded-full px-4 py-3.5 gap-4">
          <Pressable onPress={handleDecrease}>
            <AntDesign name="minus" color="#fff" size={15} />
          </Pressable>

          {/* Counter Text (e.g., text-white font-bold) */}
          <Text className="text-white ">{quantity}</Text>

          <Pressable onPress={handleIncrease}>
            <AntDesign name="plus" color="#fff" size={15} />
          </Pressable>
        </View>

        {/* 2. Main Action Button */}
        <Pressable
          onPress={() => console.log(`Ordered ${quantity} items`)}
          className="flex-1 bg-[#E59E38] rounded-full py-4 items-center justify-center active:opacity-90"
        >
          <Text className="text-black font-bold text-sm tracking-wide">
            Add to order · ${totalPrice}
          </Text>
        </Pressable> 
      </View>
    </SafeAreaView>
  );
};

export default MenuDetails;
