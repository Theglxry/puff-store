import { useFonts } from "expo-font";
import { Uniwind } from "uniwind";

import "../global.css";

import { Slot, Stack } from "expo-router";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Baby Gemoy": require("../assets/fonts/Baby Gemoy.ttf"),
  });

  Uniwind.setTheme("system");


  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="shop" />
      <Stack.Screen name="product/[id]" />
    </Stack>
  );
}
