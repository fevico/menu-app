import Category from "@/components/menu/category";
import HeroBanner from "@/components/menu/hero-banner";
import MenuCard from "@/components/menu/menu-card";
import { MENU_ITEMS, MenuItem } from "@/utils/menu-data";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import { FlatList, Text, View } from "react-native";

interface Props {}
const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

const Menu: FC<Props> = (props) => {
  const imageSource = require("../../../assets/images/hero-banner.jpg");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dishes, setDishes] = useState<MenuItem[]>(MENU_ITEMS);
  const router = useRouter()

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((d) => d.category === selectedCategory);

  const handleToggleSave = (id: string) => {
    setDishes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSaved: !item.isSaved } : item,
      ),
    );
  };

  return (
    <View className="flex-1 bg-[#09090B]">
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <View>
            {/* Banner */}
            <View className="mt-2">
              <HeroBanner
                title="Tonight's menu"
                subtitle="Seasonal ingredients, crafted daily"
                imageSource={imageSource}
              />
            </View>

            {/* Horizontal Category Carousel */}
            <Category
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Section Header */}
            <View className="px-4 mb-3">
              <Text className="text-gray-400 font-semibold text-xs tracking-wider uppercase">
                {selectedCategory === "All" ? "ALL DISHES" : selectedCategory} ·{" "}
                {filteredDishes.length}
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <MenuCard
            item={item}
            onToggleSave={handleToggleSave}
            onPress={() =>{
              router.push({pathname: "/dish/[id]", params: {id: item.id}});
            }}
          />
        )}
      />
    </View>
  );
};

export default Menu;
