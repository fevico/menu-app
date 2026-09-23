import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const AppHeader: FC<Props> = (props) => {
  return (
    <SafeAreaView>
      <View className="px-4 border-b">
        <View className="flex-row items-center justify-between">
          {/* left hand side */}
          <View className="flex-col items-start gap-1">
            <Text className="text-white text-xl font-bold">Ember & Oak</Text>
            <Text className="text-gray-300 text-sm">
              Fine dining · Open until 23:00
            </Text>
          </View>

          {/* right hand side */}
          <View className="flex-row items-start gap-1">
            <Ionicons name="search-outline" color="#fff" size={30} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppHeader;
