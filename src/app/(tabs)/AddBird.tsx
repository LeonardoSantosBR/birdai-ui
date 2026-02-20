import AddBirdTitle from "@/components/titles/addBird/AddBird";
import { View } from "react-native";
import { addBirdStylesheets } from "./stylesheets";

export default function AddBird(): React.JSX.Element {
  return (
    <View style={[addBirdStylesheets.container]}>
      <AddBirdTitle />
    </View>
  );
}
