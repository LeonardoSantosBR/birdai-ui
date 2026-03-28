import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const indexStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    backgroundColor: colors.index.background,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  categoriesScroll: {
    marginVertical: 10,
  },
  categoriesContent: {
    gap: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 120,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
    color: colors.index.emptyText,
  },
});