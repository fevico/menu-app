import { FontAwesome } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";

interface Props {}

const Profile: FC<Props> = (props) => {
  return (
    <View className="px-4">
      <View className="flex flex-row gap-6">
        <FontAwesome name="user-circle" color="#fff" size={35} />

        <View className="flex flex-col gap-1">
          <Text className="text-white font-semibold ">Alex Morgan</Text>
          <Text className="text-gray-500">Member since Jan 2025</Text>
        </View>
      </View>

      <View></View>
    </View>
  );
};

export default Profile;
