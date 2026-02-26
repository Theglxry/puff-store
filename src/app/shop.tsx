import { router } from "expo-router";
import { Heart } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageSlider from "../components/image-slider/image-slider";

export default function Shop() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1B1212" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-5"
      >
        <View className="w-full flex flex-row items-center justify-between py-5">
          <Text className="text-white text-2xl">Browse Collections</Text>
          <Heart color={"#fff"} />
        </View>

        <ImageSlider />
      </ScrollView>
    </SafeAreaView>
  );
}
