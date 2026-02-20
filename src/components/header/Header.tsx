import { birdaiLogo } from "@/assets";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStylesheets } from "./headerStylesheets";

export default function Header(): React.JSX.Element {
  return (
    <SafeAreaView style={headerStylesheets.container}>
      <Image style={headerStylesheets.logo} source={birdaiLogo} />
    </SafeAreaView>
  );
}