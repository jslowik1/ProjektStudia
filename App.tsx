import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { HomeScreen, Przepisy, SettingsScreen, Cwiczenia } from "./components";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
export default function App() {
  const Tab = createBottomTabNavigator();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "posilki", title: "Posiłki", focusedIcon: "home" },
    { key: "przepisy", title: "Przepisy", focusedIcon: "food-variant" },
    { key: "cwiczenia", title: "Ćwiczenia", focusedIcon: "dumbbell" },
    { key: "wiecej", title: "Więcej", focusedIcon: "more" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    posilki: HomeScreen,
    przepisy: Przepisy,
    wiecej: SettingsScreen,
    cwiczenia: Cwiczenia,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        barStyle={{
          backgroundColor: "#252525",
        }}
        inactiveColor="grey"
        activeColor="white"
        activeIndicatorStyle={{ backgroundColor: "transparent" }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
