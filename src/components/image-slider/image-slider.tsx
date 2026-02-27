import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: screenWidth } = Dimensions.get("window");

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View>
      {/* image list slider */}
      <FlatList
        data={collections}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
          setActiveIndex(index);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`w-screen h-60 rounded-2xl overflow-hidden mr-2`}
            // style={{ backgroundColor: item.color }}
          >
            <LinearGradient
              colors={item.gradient}
              className="flex-1  "
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Image
                source={item.banner}
                className="w-full h-full"
                resizeMode="contain"
              />
              <View className="absolute bottom-0 left-0 p-3">
                <Text className="font-puff text-white font-bold text-xl">
                  {item.name}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* indicators */}
      <View className="flex-row justify-center gap-2 mt-3">
        {collections.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full ${activeIndex === index ? "w-8 bg-white" : "w-2 bg-gray-500"}`}
          />
        ))}
      </View>
    </View>
  );
}

const collections = [
  // {
  //   id: 1,
  //   banner: require("../../assets/images/popular-products/14.png"),
  //   name: "Weekend Vibes",
  //   gradient: ["#CC5500", "#065f46"] as const,
  // },

  {
    id: 2,
    banner: require("../../assets/images/popular-products/1.png"),
    name: "Weekend Vibes",
    gradient: ["#134e4a", "#065f46"] as const,
  },
  {
    id: 3,
    banner: require("../../assets/images/popular-products/4.png"),
    name: "Urban Collection",
    gradient: ["#831843", "#500724"] as const,
  },
  {
    id: 4,
    banner: require("../../assets/images/popular-products/3.png"),
    name: "Street Style",
    gradient: ["#1f2937", "#111827"] as const,
  },
  {
    id: 5,
    banner: require("../../assets/images/popular-products/2.png"),
    name: "New Arrivals",
    gradient: ["#5C4033", "#967969"] as const,
  },
];

//   without indicator
{
  /* <ScrollView
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}>
{collections.map((item) => (
  <TouchableOpacity 
  key={item.id}
  className="w-64 h-40 rounded-2xl overflow-hidden"
>
  <Image source={item.banner} className="w-full h-full" resizeMode="cover" />
  <View className="absolute bottom-0 left-0 p-3">
    <Text className="text-white font-bold text-xl">{item.name}</Text>
  </View>
</TouchableOpacity>
))}
</ScrollView> */
}
