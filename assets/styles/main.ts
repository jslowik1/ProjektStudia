import { Platform, StatusBar, StyleSheet } from "react-native";
export const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A3A3A",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
