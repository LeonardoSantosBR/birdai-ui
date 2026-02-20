import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function GradientText({ text }: { text: string }) {
  return (
    <MaskedView
      maskElement={
        <Text style={{ fontSize: 28, fontWeight: "bold", textDecorationLine: 'underline' }}>{text}</Text>
      }
    >
      <LinearGradient
        colors={["#1a57ff", "#ff41e6" ,"#838383", "#0400ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={{ opacity: 0, fontSize: 28 }}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
