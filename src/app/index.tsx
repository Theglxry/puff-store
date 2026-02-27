import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowRight } from "lucide-react-native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />

        <View className="absolute inset-0 items-center justify-start pt-4 z-0">
          <Text className="font-puff text-[120px] leading-none font-extrabold text-gray-400">
            PUFF
          </Text>
        </View>

        <Image
          source={require("../assets/images/homepage-bg.png")}
          className="flex-1 w-full"
          resizeMode="contain"
          style={{ marginTop: 40 }}
        />

        {/* Bottom CTA card */}
        <View className="absolute bottom-0 left-0 right-0 px-4">
          <View
            className="rounded-3xl p-6 overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            {/* Tag */}
            <View className="bg-orange-500 self-start px-3 py-1 rounded-full mb-3">
              <Text className="text-white text-xs font-bold tracking-widest uppercase">
                New Collection
              </Text>
            </View>

            <Text className="text-3xl font-bold text-white leading-tight mb-1">
              Elevate your style ✦
            </Text>
            <Text className="text-gray-300 text-sm mb-5 leading-relaxed">
              Innovative padded leather for ultimate comfort and bold style.
            </Text>

            {/* CTA Button */}
            <TouchableOpacity
              className="bg-orange-500 px-6 py-4 rounded-2xl flex-row items-center justify-between"
              activeOpacity={0.85}
              onPress={() => router.push("/shop")}
            >
              <Text className="text-white font-bold text-base tracking-wide">
                Quick Shop Access
              </Text>
              <View className="bg-white/20 p-2 rounded-xl">
                <ArrowRight color="white" size={18} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
