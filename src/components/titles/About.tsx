import MaskedView from "@react-native-masked-view/masked-view";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { Text } from "react-native";

export  function AboutTitle(): React.JSX.Element {
  const focused = useIsFocused();

  return (
    <MotiView
      from={{ opacity: 0, translateX: -40 }}
      animate={
        focused
          ? { opacity: 1, translateX: 0 }
          : { opacity: 0, translateX: -40 }
      }
      transition={{
        type: "timing",
        duration: 500,
      }}
    >
      <MaskedView
        maskElement={
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Sobre Mim
          </Text>
        }
      >
        <LinearGradient
          colors={["#1a57ff", "#ff41e6", "#838383", "#0400ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={{ opacity: 0, fontSize: 28 }}>Sobre Mim</Text>
        </LinearGradient>
      </MaskedView>
    </MotiView>
  );
}
