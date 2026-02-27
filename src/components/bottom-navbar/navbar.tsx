import { router, usePathname } from "expo-router";
import {
  Home,
  Compass,
  User,
  Search,
  ShoppingBag,
  Heart,
} from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", icon: Home, route: "/" },
    { name: "Shop", icon: Heart, route: "/shop" },
    { name: "Search", icon: Search, route: "/" },
    { name: "Cart", icon: ShoppingBag, route: "/" },
  ];

  return (
    <View className="absolute bottom-8 left-6 right-6">
      <BlurView
        intensity={80}
        tint="light"
        style={{
          borderRadius: 28,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.4)",
        }}
      >
        <View className="flex-row items-center justify-between px-1 py-[5px]">
          {tabs.map((tab) => {
            const isActive = pathname === tab.route;
            const Icon = tab.icon;

            return (
              <TouchableOpacity
                key={tab.name}
                onPress={() => router.push(tab.route)}
                className="items-center"
              >
                {isActive ? (
                  <View className="bg-white p-4 rounded-full">
                    <Icon color="black" fill="black" size={23} />
                  </View>
                ) : (
                  <View
                    className="items-center p-3 border border-gray-900/10 bg-gray-900/20 shadow-2xl rounded-full"
                    // style={{
                    //   borderColor: "rgba(255,255,255,0.4)",
                    // }}
                  >
                    <Icon color="#fff" fill="none" size={23} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </BlurView>
    </View>
  );
}
