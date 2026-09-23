import { FC } from "react";
import { Text, View } from "react-native";

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: string[];
  total: number;
  status: "In progress" | "Completed";
}

interface OrderItemProps {
  order: Order;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const isInProgress = order.status === "In progress";

  return (
    <View className="w-full bg-[#18181B] rounded-2xl border border-[#27272A]/70 p-5 mb-4">
      {/* Top Row: Order ID + Status Badge */}
      <View className="flex-row justify-between items-center mb-1">
        <Text className="text-white font-semibold text-base">
          #{order.orderNumber}
        </Text>

        <View
          className={`px-3 py-1 rounded-full border ${
            isInProgress
              ? "bg-[#291E13] border-[#5E3F1A]"
              : "bg-[#202023] border-[#2E2E33]"
          }`}
        >
          <Text
            className={`text-xs font-medium ${
              isInProgress ? "text-[#E59E38]" : "text-gray-400"
            }`}
          >
            {order.status}
          </Text>
        </View>
      </View>

      {/* Timestamp */}
      <Text className="text-gray-500 text-xs mb-3">{order.date}</Text>

      {/* Dish Item List */}
      <View className="gap-1 mb-3">
        {order.items.map((item, index) => (
          <Text key={index} className="text-gray-300 text-xs">
            · {item}
          </Text>
        ))}
      </View>

      {/* Total Price */}
      <Text className="text-[#E59E38] font-bold text-sm">
        ${order.total.toFixed(2)}
      </Text>
    </View>
  );
};

export default OrderItem;