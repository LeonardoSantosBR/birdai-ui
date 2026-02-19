import { birdaiLogo } from "@/assets";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "./header.styles";

export default function Header(): React.JSX.Element {
  return (
    <SafeAreaView style={headerStyles.container}>
      <Image style={headerStyles.logo} source={birdaiLogo} />
    </SafeAreaView>
  );
}