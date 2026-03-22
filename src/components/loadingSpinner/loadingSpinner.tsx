import { ActivityIndicator, View } from "react-native";

export function LoadingSpinner() {
  return (
    <View>
      <ActivityIndicator size={40} color="red" style={{marginTop: "50%"}}/>
    </View>
  );
}
