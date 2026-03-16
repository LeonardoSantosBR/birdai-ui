import AboutTitle from "@/components/titles/About";
import { StyleSheet, View } from "react-native";

export default function About(): React.JSX.Element {
  return (
    <View style={[aboutStylesheets.container]}>
      <AboutTitle />
    </View>
  );
}

export const aboutStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
});
