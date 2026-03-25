import { addBirdStylesheets } from "@/app/(tabs)_stylesheets";
import { useIsFocused } from "@react-navigation/native";
import { MotiView } from "moti";
import { Text } from "react-native";

export function AddBirdTitle(): React.JSX.Element {
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
      <Text style={[addBirdStylesheets.title]}>Nova Ave</Text>
    </MotiView>
  );
}
