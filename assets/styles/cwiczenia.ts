import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
export const cwiczenia = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A3A3A",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBox: {
    display: "flex",
    width: Dimensions.get("window").width,
    padding: 10,
  },
  searchBar: {
    backgroundColor: "white",
    borderRadius: 13,
  },
  list: {
    display: "flex",
    width: Dimensions.get("window").width,
  },
  przepis: {
    backgroundColor: "#14FFB9",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },
});
