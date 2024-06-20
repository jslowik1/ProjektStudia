import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { HomeScreen, Przepisy, SettingsScreen, Exercises } from "./components";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import storage from "./components/storage";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function App() {
  const Tab = createBottomTabNavigator();
  const [index, setIndex] = useState(0);
  const [kcal, setKcal] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  storage.load({key: "limits"}).then(e => {
    if(e.kcal !== 2000 && e.carbs !== 200 && e.protein !== 200 && e.fat !== 45){[
      
    ]}
  }).catch(err => {
    storage.save({
      key: "limits",
      data:{
        kcal: 2000,
        carbs: 200,
        protein: 200,
        fat: 45
      }
    });
  })
  
  const [routes] = useState([
    { key: "posilki", title: "Posiłki", focusedIcon: "home" },
    { key: "przepisy", title: "Przepisy", focusedIcon: "food-variant" },
    { key: "cwiczenia", title: "Ćwiczenia", focusedIcon: "dumbbell" },
    { key: "settings", title: "Ustawienia", focusedIcon: "cog" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    posilki: HomeScreen,
    przepisy: Przepisy,
    settings: SettingsScreen,
    cwiczenia: Exercises,
  });
  return (
    <SafeAreaProvider>
      <NavigationContainer >
      <Tab.Navigator initialRouteName="posilki" screenOptions={{tabBarActiveBackgroundColor: "transparent",tabBarStyle: {backgroundColor: "#252525"}, headerShown: false}} >
      <Tab.Screen options={{title: "Posiłki", tabBarActiveTintColor: "white", tabBarIcon: () => {return <Ionicons name="home" size={32} color="white"/>} }} name="posilki" component={HomeScreen}/>
      <Tab.Screen options={{title: "Przepisy", tabBarActiveTintColor: "white", tabBarIcon: () => {return <MaterialCommunityIcons name="food-variant" size={32} color="white"/>} }} name="przepisy" component={Przepisy}/>
      <Tab.Screen options={{title: "Ćwiczenia", tabBarActiveTintColor: "white", tabBarIcon: () => {return <MaterialCommunityIcons name="dumbbell" size={32} color="white"/>} }} name="cwiczenia" component={Exercises}/>
      <Tab.Screen options={{title: "Ustawienia", tabBarActiveTintColor: "white", tabBarIcon: () => {return <Ionicons name="cog" size={32} color="white"/>} }} name="settings" component={SettingsScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
      {/* <BottomNavigation
        barStyle={{
          backgroundColor: "#252525",
        }}
        inactiveColor="grey"
        activeColor="white"
        activeIndicatorStyle={{ backgroundColor: "transparent" }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      /> */}
    </SafeAreaProvider>
  );
}
