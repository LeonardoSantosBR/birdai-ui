import { birdaiLogo } from "@/assets";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header(): React.JSX.Element {
  return (
    <SafeAreaView style={headerStylesheets.container}>
      <Image style={headerStylesheets.logo} source={birdaiLogo} />
    </SafeAreaView>
  );
}

export const headerStylesheets = StyleSheet.create({
  container: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    paddingVertical: 1,
  },
  logo: {
    width: 150,
    height: 80,
  },
});
