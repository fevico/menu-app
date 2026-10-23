// import { MENU_ITEMS, MenuItem } from "@/utils/menu-data";
// import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
// import { Image } from "expo-image";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { FC, useState } from "react";
// import { Pressable, ScrollView, Text, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { useWishlistStore } from "../../../store/store";

// const MenuDetails: FC = () => {
//   const { id } = useLocalSearchParams<{ id: string }>();
//   const router = useRouter();
//   const insets = useSafeAreaInsets();
//   const [quantity, setQuantity] = useState(1);

//   const toggleWishlist = useWishlistStore((state: any) => state.toggleWishlist);
//   const dish = MENU_ITEMS.find((m) => m.id === id);
//   const isSaved = useWishlistStore((state: any) =>
//     state.wishlist.some((item: MenuItem) => item.id === dish?.id),
//   );

//   const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   const handleIncrease = () => setQuantity((prev) => prev + 1);

//   const totalPrice = ((dish?.price ?? 0) * quantity).toFixed(2);

//   if (!dish) {
//     return (
//       <View className="flex-1 bg-[#FBF9F5] items-center justify-center">
//         <Text className="text-gray-500 font-serif">Dish not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="flex-1 bg-[#2C2623]/40 justify-end">
//       {/* Main Modal Card Container */}
//       <View
//         style={{ paddingBottom: Math.max(insets.bottom, 20) }}
//         className="w-full bg-[#FCFBF8] rounded-t-[36px] overflow-hidden"
//       >
//         <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//           {/* ================= 1. DISH IMAGE & FLOATING BUTTONS ================= */}
//           <View className="relative w-full h-[320px] bg-[#EFECE6]">
//             <Image
//               source={{ uri: dish.imageUrl }}
//               className="w-full h-full"
//               contentFit="cover"
//               transition={200}
//               style={{ width: "100%", height: "100%" }}
//             />

//             {/* Floating Top Bar on image */}
//             <View
//               style={{ paddingTop: 16 }}
//               className="absolute top-0 left-0 right-0 px-4 flex-row justify-between items-center z-10"
//             >
//               {/* Back Button */}
//               <Pressable
//                 onPress={() => router.back()}
//                 hitSlop={8}
//                 className="w-9 h-9 rounded-full bg-white items-center justify-center shadow-sm active:opacity-80"
//               >
//                 <AntDesign name="left" size={15} color="#1E1E1E" />
//               </Pressable>

//               {/* Wishlist Button */}
//               <Pressable
//                 onPress={() => toggleWishlist(dish)}
//                 hitSlop={8}
//                 className="w-9 h-9 rounded-full bg-white items-center justify-center shadow-sm active:opacity-80"
//               >
//                 <Ionicons
//                   name={isSaved ? "heart" : "heart-outline"}
//                   size={17}
//                   color={isSaved ? "#C45A34" : "#1E1E1E"}
//                 />
//               </Pressable>
//             </View>
//           </View>

//           {/* ================= 2. DETAILS BODY ================= */}
//           <View className="px-6 pt-5 pb-4">
//             {/* Tag (e.g. Chef's pick) */}
//             {dish.tag && (
//               <Text className="text-[#C45A34] text-[12px] font-medium mb-1">
//                 {dish.tag.charAt(0).toUpperCase() +
//                   dish.tag.slice(1).toLowerCase()}
//               </Text>
//             )}

//             {/* Title & Price Row */}
//             <View className="flex-row items-baseline justify-between mb-5">
//               <Text
//                 className="text-[#1E1E1E] text-2xl font-bold flex-1 mr-3"
//                 style={{ fontFamily: "serif" }}
//               >
//                 {dish.name}
//               </Text>
//               <Text className="text-[#C45A34] text-xl font-bold">
//                 ${dish.price.toFixed(2)}
//               </Text>
//             </View>

//             {/* Stats Card (Rating / Ready in / Calories) */}
//             <View className="w-full bg-[#FFFFFF] border border-[#EFECE6] rounded-2xl py-3 px-4 flex-row items-center justify-between mb-5 shadow-sm">
//               {/* Rating */}
//               <View className="flex-1 items-center">
//                 <View className="flex-row items-center gap-1 mb-1">
//                   <AntDesign name="star" color="#1E1E1E" size={12} />
//                   <Text className="text-[#1E1E1E] font-bold text-xs">
//                     {dish.rating.toFixed(1)}
//                   </Text>
//                 </View>
//                 <Text className="text-gray-400 text-[9px] uppercase font-semibold tracking-wider">
//                   RATING
//                 </Text>
//               </View>

//               <View className="w-[1px] h-6 bg-[#EFECE6]" />

//               {/* Ready In */}
//               <View className="flex-1 items-center">
//                 <View className="flex-row items-center gap-1 mb-1">
//                   <Feather name="clock" color="#1E1E1E" size={12} />
//                   <Text className="text-[#1E1E1E] font-bold text-xs">
//                     {dish.prepTime}
//                   </Text>
//                 </View>
//                 <Text className="text-gray-400 text-[9px] uppercase font-semibold tracking-wider">
//                   READY IN
//                 </Text>
//               </View>

//               <View className="w-[1px] h-6 bg-[#EFECE6]" />

//               {/* Calories */}
//               <View className="flex-1 items-center">
//                 <Text className="text-[#1E1E1E] font-bold text-xs mb-1">
//                   {dish.calories.replace(/[^0-9]/g, "")}
//                 </Text>
//                 <Text className="text-gray-400 text-[9px] uppercase font-semibold tracking-wider">
//                   CALORIES
//                 </Text>
//               </View>
//             </View>

//             {/* Italic Description */}
//             <Text className="text-gray-500 italic text-[13px] leading-5 mb-6">
//               {dish.description} Prepared to order with vibrant seasonal produce
//               and our kitchen's signature dressing.
//             </Text>

//             {/* ================= WHAT'S INSIDE ================= */}
//             <View className="mb-5">
//               <Text className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2.5">
//                 WHAT'S INSIDE
//               </Text>

//               <View className="flex-row flex-wrap gap-2">
//                 {dish.ingredients.map((item, index) => (
//                   <View
//                     key={index}
//                     className="bg-white border border-[#EAE7E1] px-3.5 py-2 rounded-xl shadow-none"
//                   >
//                     <Text className="text-[#1E1E1E] text-xs font-medium">
//                       {item}
//                     </Text>
//                   </View>
//                 ))}
//               </View>
//             </View>

//             {/* ================= ALLERGEN INFORMATION ================= */}
//             <View className="mb-6">
//               <Text className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">
//                 ALLERGEN INFORMATION
//               </Text>

//               <Text className="text-gray-500 text-xs leading-5">
//                 {dish.allergens.length > 0 ? dish.allergens.join(", ") : "None"}
//               </Text>
//             </View>

//             {/* ================= 3. FOOTER ACTIONS ================= */}
//             <View className="flex-row items-center gap-3">
//               {/* Counter Stepper */}
//               <View className="flex-row items-center justify-between bg-white border border-[#EAE7E1] rounded-2xl px-3 py-3 w-28">
//                 <Pressable onPress={handleDecrease} hitSlop={8}>
//                   <AntDesign name="minus" size={14} color="#7A7A7A" />
//                 </Pressable>
//                 <Text className="text-[#1E1E1E] font-bold text-sm">
//                   {quantity}
//                 </Text>
//                 <Pressable onPress={handleIncrease} hitSlop={8}>
//                   <AntDesign name="plus" size={14} color="#7A7A7A" />
//                 </Pressable>
//               </View>

//               {/* Add to Bag Button */}
//               <Pressable
//                 onPress={() => console.log(`Added ${quantity} to bag`)}
//                 className="flex-1 bg-[#C45A34] rounded-2xl py-3.5 items-center justify-center active:opacity-90 shadow-sm shadow-[#C45A34]/30"
//               >
//                 <Text className="text-white font-bold text-sm tracking-wide">
//                   Add to bag · ${totalPrice}
//                 </Text>
//               </Pressable>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default MenuDetails;

import { MENU_ITEMS, MenuItem } from "@/utils/menu-data";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FC, useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useWishlistStore } from "../../../store/store";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
// Half-screen card (adjust multiplier between 0.50 and 0.60 to taste)
const MODAL_HEIGHT = SCREEN_HEIGHT * 0.75;

const MenuDetails: FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [quantity, setQuantity] = useState(1);

  const toggleWishlist = useWishlistStore((state: any) => state.toggleWishlist);
  const dish = MENU_ITEMS.find((m) => m.id === id);
  const isSaved = useWishlistStore((state: any) =>
    state.wishlist.some((item: MenuItem) => item.id === dish?.id),
  );

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const totalPrice = ((dish?.price ?? 0) * quantity).toFixed(2);

  if (!dish) {
    return (
      <View className="flex-1 bg-[#FBF9F5] items-center justify-center">
        <Text className="text-gray-500 font-serif">Dish not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#2C2623]/40 justify-end">
      {/* 1. Backdrop Touch Area: tap above the modal to dismiss */}
      <Pressable className="flex-1" onPress={() => router.back()} />

      {/* 2. Half-Screen Sheet Container */}
      <View
        style={{
          height: MODAL_HEIGHT,
          paddingBottom: Math.max(insets.bottom, 16),
        }}
        className="w-full bg-[#FCFBF8] rounded-t-[36px] overflow-hidden shadow-2xl"
      >
        {/* ================= SCROLLABLE CONTENT AREA ================= */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          bounces={true}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          {/* Dish Image */}
          <View className="relative w-full h-52 bg-[#EFECE6]">
            <Image
              source={{ uri: dish.imageUrl }}
              className="w-full h-full"
              contentFit="cover"
              style={{ width: "100%", height: "100%" }}
              transition={200}
            />

            {/* Floating Back & Favorite buttons */}
            <View className="absolute top-4 left-0 right-0 px-4 flex-row justify-between items-center z-10">
              <Pressable
                onPress={() => router.back()}
                hitSlop={8}
                className="w-9 h-9 rounded-full bg-white items-center justify-center shadow-sm active:opacity-80"
              >
                <AntDesign name="left" size={15} color="#1E1E1E" />
              </Pressable>

              <Pressable
                onPress={() => toggleWishlist(dish)}
                hitSlop={8}
                className="w-9 h-9 rounded-full bg-white items-center justify-center shadow-sm active:opacity-80"
              >
                <Ionicons
                  name={isSaved ? "heart" : "heart-outline"}
                  size={17}
                  color={isSaved ? "#C45A34" : "#1E1E1E"}
                />
              </Pressable>
            </View>
          </View>

          {/* Details Body */}
          <View className="px-6 pt-4">
            {/* Tag */}
            {dish.tag && (
              <Text className="text-[#C45A34] text-[12px] font-medium mb-1">
                {dish.tag.charAt(0).toUpperCase() +
                  dish.tag.slice(1).toLowerCase()}
              </Text>
            )}

            {/* Title & Price Row */}
            <View className="flex-row items-baseline justify-between mb-4">
              <Text
                className="text-[#1E1E1E] text-2xl font-bold flex-1 mr-3"
                style={{ fontFamily: "serif" }}
              >
                {dish.name}
              </Text>
              <Text className="text-[#C45A34] text-xl font-bold">
                ${dish.price.toFixed(2)}
              </Text>
            </View>

            {/* Stats Card */}
            <View className="w-full bg-[#FFFFFF] border border-[#EFECE6] rounded-2xl py-3 px-4 flex-row items-center justify-between mb-4 shadow-sm">
              <View className="flex-1 items-center">
                <View className="flex-row items-center gap-1 mb-1">
                  <AntDesign name="star" color="#1E1E1E" size={12} />
                  <Text className="text-[#1E1E1E] font-bold text-xs">
                    {dish.rating.toFixed(1)}
                  </Text>
                </View>
                <Text className="text-gray-400 text-[9px] uppercase font-semibold tracking-wider">
                  RATING
                </Text>
              </View>

              <View className="w-[1px] h-6 bg-[#EFECE6]" />

              <View className="flex-1 items-center">
                <View className="flex-row items-center gap-1 mb-1">
                  <Feather name="clock" color="#1E1E1E" size={12} />
                  <Text className="text-[#1E1E1E] font-bold text-xs">
                    {dish.prepTime}
                  </Text>
                </View>
                <Text className="text-gray-400 text-[9px] uppercase font-semibold tracking-wider">
                  READY IN
                </Text>
              </View>

              <View className="w-[1px] h-6 bg-[#EFECE6]" />

              <View className="flex-1 items-center">
                <Text className="text-[#1E1E1E] font-bold text-xs mb-1">
                  {dish.calories.replace(/[^0-9]/g, "")}
                </Text>
                <Text className="text-gray-400 text-[9px] uppercase font-semibold tracking-wider">
                  CALORIES
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text className="text-gray-500 italic text-[13px] leading-5 mb-5">
              {dish.description} Prepared to order with vibrant seasonal produce
              and our kitchen's signature dressing.
            </Text>

            {/* What's Inside */}
            <View className="mb-4">
              <Text className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">
                WHAT'S INSIDE
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {dish.ingredients.map((item, index) => (
                  <View
                    key={index}
                    className="bg-white border border-[#EAE7E1] px-3.5 py-1.5 rounded-xl"
                  >
                    <Text className="text-[#1E1E1E] text-xs font-medium">
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Allergen Information */}
            <View className="mb-2">
              <Text className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1.5">
                ALLERGEN INFORMATION
              </Text>
              <Text className="text-gray-500 text-xs leading-5">
                {dish.allergens.length > 0 ? dish.allergens.join(", ") : "None"}
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* ================= FIXED BOTTOM ACTION BAR ================= */}
        <View className="px-6 pt-3 bg-[#FCFBF8] border-t border-[#EFECE6] flex-row items-center gap-3">
          {/* Stepper */}
          <View className="flex-row items-center justify-between bg-white border border-[#EAE7E1] rounded-2xl px-3 py-3 w-28">
            <Pressable onPress={handleDecrease} hitSlop={8}>
              <AntDesign name="minus" size={14} color="#7A7A7A" />
            </Pressable>
            <Text className="text-[#1E1E1E] font-bold text-sm">{quantity}</Text>
            <Pressable onPress={handleIncrease} hitSlop={8}>
              <AntDesign name="plus" size={14} color="#7A7A7A" />
            </Pressable>
          </View>

          {/* Add to Bag Button */}
          <Pressable
            onPress={() => console.log(`Added ${quantity} to bag`)}
            className="flex-1 bg-[#C45A34] rounded-2xl py-3.5 items-center justify-center active:opacity-90 shadow-sm shadow-[#C45A34]/30"
          >
            <Text className="text-white font-bold text-sm tracking-wide">
              Add to bag · ${totalPrice}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuDetails;
