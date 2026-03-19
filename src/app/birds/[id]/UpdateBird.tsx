import { colors } from "@/themes";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function UpdateBird(): React.JSX.Element {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={[updateBirdStylesheets.container]}>
      <Text>{id}</Text>
    </View>
  );
}

export const updateBirdStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    backgroundColor: colors.update.background,
  }
});

