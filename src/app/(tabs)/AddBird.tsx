import AddBirdTitle from "@/components/titles/addBird/AddBird";
import { StyleSheet, View } from "react-native";

export default function AddBird(): React.JSX.Element {
  return (
    <View style={[styles.container]}>
      <AddBirdTitle />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
});
