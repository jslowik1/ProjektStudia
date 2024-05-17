import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

export const Cwiczenia = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>sdfsdf</Text>
    </SafeAreaView>
  );
};
