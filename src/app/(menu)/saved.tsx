import { MenuItem } from "@/utils/menu-data";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { FC } from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { useWishlistStore } from "../../../store/store";

interface Props {}

const Saved: FC<Props> = (props) => {
  const wishlist = useWishlistStore((state: any) => state.wishlist);

  const handleToggleSave = (e: GestureResponderEvent, targetItem: MenuItem) => {
    e.stopPropagation(); // Prevents navigating to dish detail
    wishlist(targetItem);
  };

  return (
    <View className="px-4 py-6">
      <View className="gap-2">
        <Text className="text-[#C45A34] text-xl font-semibold">
          Your Collection
        </Text>

        <View className="flex-row justify-between items-center">
          <Text className="text-black text-2xl font-bold">
            Saved Favourites
          </Text>

          {/* item count */}
          <View className="w-8 h-8 bg-red-100 rounded-full items-center justify-center">
            <Text className="text-red-500 text-xl font-bold">
              {wishlist.length}
            </Text>
          </View>
        </View>
      </View>

      {/* wishlist content */}

      {wishlist.map((w: MenuItem) => (
        <View key={w.id} className="pt-2">
          <View className="bg-white w-full rounded-xl px-2 mb-2 py-2">
            <View className="flex flex-row gap-4 py-2">
              <Image
                source={w.imageUrl}
                className="w-24 h-full"
                contentFit="cover"
                style={{ width: "30%", height: 75, borderRadius: 12 }}
              />

              <View className="flex-1 justify-between min-w-0">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-1.5">
                    <Text className="text-sm text-[#C45A34] font-bold">
                      {w.category}
                    </Text>

                    {/* rating */}
                    <View className="flex-row gap-1 items-center">
                      <Ionicons name="star" size={11} color="#D4A373" />
                      <Text className="text-sm text-[#C45A34] font-bold">
                        {w.rating}
                      </Text>
                    </View>
                  </View>
                  {/* right hand side */}
                  <TouchableOpacity
                    // onPress={(e) => handleToggleSave(e, w)}
                    activeOpacity={0.7}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <Ionicons
                      name={
                        wishlist.some((item: MenuItem) => item.id === w.id)
                          ? "heart"
                          : "heart-outline"
                      }
                      size={16}
                      color={
                        wishlist.some((item: MenuItem) => item.id === w.id)
                          ? "#C45A34"
                          : "#1E1E1E"
                      }
                    />
                  </TouchableOpacity>
                </View>

                {/* item details */}
                <View className="gap-2">
                  <Text className="text-black font-semibold">{w.name}</Text>
                  <Text
                    className="text-xs text-gray-500"
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {w.description}
                  </Text>
                  <View className="flex flex-row gap-2">
                    <Text className="text-sm text-black font-bold">
                      ${w.price.toFixed(2)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Saved;
