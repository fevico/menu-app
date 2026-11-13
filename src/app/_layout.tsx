import "../global.css";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { AnimatedSplashOverlay } from "@/components/animated-icon";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  
  return (
    <ThemeProvider value={DefaultTheme}>
      <View className="flex-1">
        <AnimatedSplashOverlay />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </View>
    </ThemeProvider>
  );
}
