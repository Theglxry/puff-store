import { useFonts } from "expo-font";
import "../global.css";

import { Slot } from "expo-router";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Baby Gemoy': require('../assets/fonts/Baby Gemoy.ttf'),
  })

  if (!fontsLoaded) return null



  return (
  <Slot />

  )
  
  
  ;
}
