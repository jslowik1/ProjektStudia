import { Platform, StatusBar, StyleSheet } from "react-native";
export const settings = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A3A3A",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  box: {
    width: "90%",
    backgroundColor: "#14FFB9",
    margin: 10,
    borderRadius: 13,
    overflow: "hidden",
    padding: 10
  },
  values: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 5
  }
});
