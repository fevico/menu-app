import { FC } from "react";
import { Text, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart: FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1 px-5 pt-4"
        showsVerticalScrollIndicator={false}>
            <View>
                <Text>Cart  Page</Text>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;