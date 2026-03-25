import { ActivityIndicator, View } from "react-native";

export function LoadingSpinner(): React.JSX.Element {
  return (
    <View>
      <ActivityIndicator size={40} color="red" style={{marginTop: "50%"}}/>
    </View>
  );
}
