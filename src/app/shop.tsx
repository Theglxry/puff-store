import { Heart } from "lucide-react-native";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageSlider from "../components/image-slider/image-slider";
import AllProducts from "../components/all-products/all-products";
import BottomNav from "../components/bottom-navbar/navbar";

export default function Shop() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDark ? "#1B1212" : "#fff" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-5"
      >
        <View className="w-full flex flex-row items-center justify-between py-5">
          <Text style={{ color: isDark ? "#fff" : "#000" }} className="text-2xl">
            Browse Collections
          </Text>
          <Heart color={isDark ? "#fff" : "#000"} />
        </View>

        <ImageSlider isDark={isDark} />
        <AllProducts isDark={isDark} />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}
