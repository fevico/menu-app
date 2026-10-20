import React, { FC, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";

import FormInput from "@/components/FormInput";
import Category from "@/components/menu/category";
import HeroBannerSlider from "@/components/menu/hero-banner";
import MenuCard from "@/components/menu/menu-card";
import { MENU_ITEMS, MenuItem } from "@/utils/menu-data";

interface Props {}
const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

const Menu: FC<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dishes] = useState<MenuItem[]>(MENU_ITEMS);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === "All" || dish.category === selectedCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#FBF9F5" }}>
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginBottom: 16,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        ListHeaderComponent={
          <View>
            {/* 1. GREETINGS & SEARCH */}
            <View className="px-4 mt-3 mb-3">
              <Text className="text-[#C45A34] text-[11px] font-bold tracking-widest uppercase">
                GOOD EVENING, ALEX
              </Text>
              <Text className="text-2xl font-bold text-[#1E1E1E] mt-1 font-serif">
                What are you craving?
              </Text>
            </View>

            <View className="px-4 mb-2">
              <FormInput
                value={search}
                placeholder="Search dishes, drinks or ingredients"
                setInput={setSearch}
              />
            </View>

            {/* 2. FIXED SLIDER */}
            <HeroBannerSlider
              onPress={(slide) => {
                console.log("Selected slide:", slide.title);
              }}
            />

            {/* 3. CATEGORIES */}
            <Category
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* 4. SECTION HEADER */}
            <View className="flex-row items-center justify-between px-4 mt-4 mb-3">
              <View>
                <Text className="text-[#C45A34] font-bold text-[10px] tracking-wider uppercase">
                  HANDPICKED FOR YOU
                </Text>
                <Text className="text-[#1E1E1E] font-bold text-lg font-serif">
                  Popular right now
                </Text>
              </View>
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
            onPress={() => {
              router.push({
                pathname: "/dish/[id]",
                params: { id: item.id },
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default Menu;