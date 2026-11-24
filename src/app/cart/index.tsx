import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FBF9F5]">
      {/* Header Row: Left Button | Centered Title | Right Balancer */}
      <View className="px-5 pt-2 pb-3 flex-row items-center justify-between">
        {/* 1. Left Back Button */}
        <Pressable
          onPress={() => router.back()}
          hitSlop={8}
          className="w-9 h-9 rounded-full bg-white border border-[#EFECE6] items-center justify-center shadow-sm active:opacity-80"
        >
          <AntDesign name="left" size={15} color="#1E1E1E" />
        </Pressable>

        {/* 2. Centered Title */}
        <Text
          className="text-xl font-bold text-[#1E1E1E]"
        >
          Checkout
        </Text>

        {/* 3. Invisible Spacer matching the button's exact width (w-9) */}
        <View className="w-9 h-9" />
      </View>

      <ScrollView
        className="flex-1 px-5 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text>Cart Page</Text> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;