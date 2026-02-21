import AboutTitle from "@/components/titles/about/About";
import { View } from "react-native";
import { aboutStylesheets } from "./(tabs)_stylesheets";

export default function About(): React.JSX.Element {
  return (
    <View style={[aboutStylesheets.container]}>
      <AboutTitle />
    </View>
  );
}
