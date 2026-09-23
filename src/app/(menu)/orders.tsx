import OrderItem, { Order } from "@/components/order/orderItem";
import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const DUMMY_ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "5821",
    date: "Today, 19:42",
    items: ["Wagyu Beef Short Rib", "Smoked Negroni"],
    total: 58.0,
    status: "In progress",
  },
  {
    id: "2",
    orderNumber: "5803",
    date: "Sep 12, 2026",
    items: ["Burrata & Heirloom Tomato", "Valrhona Chocolate Fondant"],
    total: 27.5,
    status: "Completed",
  },
];

const Orders: FC<Props> = (props) => {
  return (
    <SafeAreaView className="flex-1 bg-[#09090B]">
      <ScrollView
        className="flex-1 px-4 pt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Screen Header */}
        <View className="mb-6">
          <Text className="text-2xl text-white font-bold mb-1">Orders</Text>
          <Text className="text-sm text-gray-400">Your recent orders</Text>
        </View>

        {/* Orders List */}
        {DUMMY_ORDERS.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
