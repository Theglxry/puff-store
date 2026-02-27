import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Heart } from "lucide-react-native";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { allProducts } from "../../data/products";

export default function AllProducts() {
  return (
    <View>
      <View className="w-full flex flex-row justify-between py-5">
        <Text className="text-white text-xl">Popular</Text>

        <Pressable>
          <Text className="text-gray-300 text-xl font-semibold">Show All</Text>
        </Pressable>
      </View>

      <View className="flex-row flex-wrap">
        {allProducts.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="w-1/2 h-64 mb-10 flex flex-col gap-5 border border-slate-600/50 p-2"
            onPress={() => router.push(`/product/${item.id}`)}
          >
            {/* image */}
            <View style={{ height: 160, position: "relative" }}>
              <LinearGradient
                colors={item.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1, borderRadius: 12, overflow: "hidden" }}
              >
                <Image
                  source={item.banner}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </LinearGradient>

              {/* Heart button */}
              <TouchableOpacity
                style={{ position: "absolute", top: 8, right: 8 }}
                className="bg-black/30 p-2 rounded-full"
              >
                <Heart color="#fff" size={16} />
              </TouchableOpacity>
            </View>

            {/* details */}
            <View className="mt-2">
              <Text className="text-white font-bold">{item.name}</Text>
              <Text className="text-gray-400 text-xs">{item.collection}</Text>
              <Text className="text-white">{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

