import { birdaiEmpty } from "@/assets";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export function BirdNotFound() {
  return (
    <View style={birdNotFoundStylesheets.container}>
      <Image style={birdNotFoundStylesheets.image} source={birdaiEmpty} />
      <Text style={{ color: "#686868" }}>Nenhuma Ave no catálogo...</Text>

      <TouchableOpacity style={birdNotFoundStylesheets.button}>
        <Text style={birdNotFoundStylesheets.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export const birdNotFoundStylesheets = StyleSheet.create({
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
    backgroundColor: "#E53935",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    marginTop: 16,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
