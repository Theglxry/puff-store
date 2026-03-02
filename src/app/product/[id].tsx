import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { allProducts } from "../../data/products";
import { LinearGradient } from "expo-linear-gradient";

export default function ProductDetials() {
  const { id } = useLocalSearchParams();
  const product = allProducts.find((p) => p.id === Number(id));
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <View className={`w-screen h-screen rounded-2xl overflow-hidden mr-2`}>
      <LinearGradient
        colors={product?.gradient ?? ["#1a1a1a", "#2a2a2a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <Image
          source={product?.banner}
          className="w-full h-full"
          resizeMode="contain"
        />

<View className="absolute bottom-0 left-0 right-0">
  <View
    className="rounded-3xl p-6 flex flex-col gap-5 overflow-hidden"
    style={{ backgroundColor: isDark ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.85)" }}
  >
    <View className="w-full flex-col items-center justify-center">
      <Text style={{ color: isDark ? "#fff" : "#000" }} className="text-3xl font-bold leading-tight">
        {product?.name || "Product Name"}
      </Text>
      <Text style={{ color: isDark ? "#d1d5db" : "#6b7280" }} className="text-sm leading-relaxed">
        {product?.collection || "Product Collection"}
      </Text>
      <Text style={{ color: isDark ? "#d1d5db" : "#000" }} className="text-2xl leading-relaxed">
        {product?.price || "$0.00"}
      </Text>
    </View>

    <View className="flex-row gap-5 items-center justify-center">
      {["XS", "S", "M", "L"].map((size) => (
        <TouchableOpacity
          key={size}
          style={{ borderColor: isDark ? "#fff" : "#000" }}
          className="border w-10 h-10 items-center justify-center rounded-full"
        >
          <Text style={{ color: isDark ? "#fff" : "#000" }}>{size}</Text>
        </TouchableOpacity>
      ))}
    </View>

    {/* CTA Button */}
    <TouchableOpacity
      style={{ backgroundColor: isDark ? "#fff" : "#000" }}
      className="px-6 py-4 rounded-full flex-row items-center justify-center"
      activeOpacity={0.85}
      onPress={() => router.push("/shop")}
    >
      <Text style={{ color: isDark ? "#000" : "#fff" }} className="font-bold text-base tracking-wide">
        Buy Now
      </Text>
    </TouchableOpacity>
  </View>
</View>
      </LinearGradient>
    </View>
  );
}
