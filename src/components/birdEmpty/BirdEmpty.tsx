import { birdaiEmpty } from "@/assets";
import { colors } from "@/themes";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export function BirdEmpty() {
  return (
    <View style={birdEmptyStylesheets.container}>
      <Image style={birdEmptyStylesheets.image} source={birdaiEmpty} />
      <Text style={{ color: colors.birdEmpty.text }}>Nenhuma Ave no catálogo...</Text>

      <TouchableOpacity style={birdEmptyStylesheets.button}>
        <Text style={birdEmptyStylesheets.text}>Cadastrar</Text>
      </TouchableOpacity>
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
   button: {
    backgroundColor: colors.birdEmpty.buttonBackground,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    marginTop: 16,
  },
  text: {
    color: colors.birdEmpty.buttonText,
    fontSize: 16,
    fontWeight: "600",
  },
});
