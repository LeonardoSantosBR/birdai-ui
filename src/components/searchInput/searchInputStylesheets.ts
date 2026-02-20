import { StyleSheet } from "react-native";

export const searchInputStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dadada",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
    marginTop: 10
  },
  input: {
    fontSize: 17,
    width: '100%',
    borderRadius: 30
  },
});
