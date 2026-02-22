import { StyleSheet } from "react-native";

export const birdCardStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    marginRight: 12,
  },
});
