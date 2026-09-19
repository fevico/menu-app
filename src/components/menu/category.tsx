import { FC } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Category: FC<Props> = ({
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <View className="my-4">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <Pressable
            key={cat}
            onPress={() => onSelectCategory(cat)}
            className={` mr-3 rounded-full px-5 py-2.5 items-center justify-center ${
              isSelected
                ? "bg-[#D97706]" // Warm amber/orange matching Figma active pill
                : "bg-[#18181B] border border-[#27272A]"
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                isSelected ? "text-white font-semibold" : "text-gray-400"
              }`}
            >
              {cat}
            </Text>
          </Pressable>
        );
      })}
      </ScrollView>
    </View>
  );
};

export default Category;
