import { MenuItem } from "@/utils/menu-data";
import { Image } from "expo-image";
import { FC } from "react";
import { Text, View } from "react-native";
import { useWishlistStore } from "../../../store/store";

interface Props {}

const Saved: FC<Props> = (props) => {
  const wishlist = useWishlistStore((state: any) => state.wishlist);

   const toggleWishlist = useWishlistStore((state: any) => state.toggleWishlist);

  const handleToggleSave = (item: MenuItem) => {
    toggleWishlist(item);
  };

  return (
    <View className="px-4">
      <View className="gap-2">
        <Text className="text-white text-2xl font-semibold">
          Your Favourites
        </Text>
        <Text className="text-gray-500 text-xs">
          {wishlist.length} saved dish
        </Text>
      </View>

      {/* wishlist content */}

      {wishlist.map((w: MenuItem) => (
        <View key={w.id} className="pt-2">
          <View className="bg-[#18181B] w-full border-[#27272A]/50 rounded-xl px-2 mb-2">
            <View className="flex flex-row gap-4 py-2">
              <Image
                source={w.imageUrl}
                className="w-24 h-full"
                contentFit="cover"
                style={{ width: "30%", height: 75, borderRadius: 12 }}
              />

              <View className="flex-1 min-w-0">
                <Text className="text-white font-semibold">{w.name}</Text>
                <Text
                  className="text-xs text-gray-500"
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {w.description}
                </Text>
                <View className="flex flex-row gap-2">
                  <Text className="text-sm text-[#F59E0B] font-bold">
                    ${w.price}
                  </Text>
                  <Text className="text-xs text-gray-500">{w.category}</Text>
                </View>

                {/* <Pressable
                  onPress={handleToggleSave(w)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 items-center justify-center backdrop-blur-md"
                >
                  <Ionicons
                    name={isSaved ? "heart" : "heart-outline"}
                    size={16}
                    color={isSaved ? "#EF4444" : "#FFFFFF"}
                  />
                </Pressable> */}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Saved;
