import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "./header.styles";

export default function Header() {
  return (
    <SafeAreaView style={headerStyles.container}>
      <Image style={headerStyles.logo} source={require("../../assets/birdai-logo.png")} />
    </SafeAreaView>
  );
}