import AppHeader from "@/components/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Set your active tab accent color (e.g., matching a modern dating app theme)
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#94a3b8",
        headerShown: true,

        header: () => <AppHeader />,
        // 2. Attach your custom header globally for ALL student tabs
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          height: Platform.OS === "android" ? 95 : 85,
          paddingBottom: Platform.OS === "android" ? 10 : 25,
          paddingTop: 2,
        },
      }}
    >
      {/* Tab 1: The Home Matches Feed */}
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Tab 2: The Product listing Matches Feed */}
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="nearby"
        options={{
          title: "Nearby",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="location-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
