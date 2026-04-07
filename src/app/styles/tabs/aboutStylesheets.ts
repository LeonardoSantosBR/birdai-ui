import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const aboutStylesheets = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    padding: 15,
    backgroundColor: colors.screens.aboutMe.background,
    paddingBottom: 140,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  imageArea: {
    width: 400,
    height: 400,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    marginTop: 20,
    fontSize: 15,
    lineHeight: 20,
    color: colors.screens.aboutMe.descriptionColor,
  },
});