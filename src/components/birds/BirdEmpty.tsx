import { birdaiEmpty } from "@/assets";
import { colors } from "@/themes";
import { t } from "@lingui/core/macro";
import { Image, StyleSheet, Text, View } from "react-native";

export function BirdEmpty(): React.JSX.Element {
  return (
    <View style={birdEmptyStylesheets.container}>
      <Image style={birdEmptyStylesheets.image} source={birdaiEmpty} />
      <Text style={{ color: colors.screens.birdEmpty.text }}>
        {t`Nenhuma Ave encontrada...`}
      </Text>
    </View>
  );
}

export const birdEmptyStylesheets = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  image: {
    width: "100%",
    height: 180,
  },
  text: {
    color: colors.screens.birdEmpty.buttonText,
    fontSize: 16,
    fontWeight: "600",
  },
});
