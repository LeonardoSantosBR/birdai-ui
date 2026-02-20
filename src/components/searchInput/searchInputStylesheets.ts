import { StyleSheet } from "react-native";

export const searchInputStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    width: 300,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});