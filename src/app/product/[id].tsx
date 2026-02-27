import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { allProducts } from "../../data/products";
import { LinearGradient } from "expo-linear-gradient";

export default function ProductDetials() {
  const { id } = useLocalSearchParams();
  const product = allProducts.find((p) => p.id === Number(id));
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
            className="rounded-3xl p-6 flex flex-col gap-5  overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            <View className=" w-full flex-col items-center justify-center">
              <Text className="text-3xl font-bold text-white leading-tight">
                {product?.name || "Product Name"}
              </Text>
              <Text className="text-gray-300 text-sm leading-relaxed">
                {product?.collection || "Product Collection"}
              </Text>

              <Text className="text-gray-300 text-2xl leading-relaxed">
                {product?.price || "$0.00"}
              </Text>
            </View>

            <View className="flex-row gap-5 items-center justify-center">
              {["XS", "S", "M", "L"].map((size) => (
                <TouchableOpacity
                  key={size}
                  className="border border-white w-10 h-10 items-center justify-center rounded-full"
                >
                  <Text className="text-white">{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* CTA Button */}
            <TouchableOpacity
              className="bg-white px-6 py-4 rounded-full flex-row items-center justify-center"
              activeOpacity={0.85}
              onPress={() => router.push("/shop")}
            >
              <Text className="text-black font-bold text-base tracking-wide">
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
