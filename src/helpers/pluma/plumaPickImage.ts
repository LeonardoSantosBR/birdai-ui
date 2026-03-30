import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const plumaPickImage = async ({
  setImageUri,
  setImageBase64,
  reset,
}: {
  setImageUri: React.Dispatch<React.SetStateAction<string | null>>;
  setImageBase64: React.Dispatch<React.SetStateAction<string | null>>;
  reset: () => void;
}) => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== "granted") {
    Alert.alert(
      "Permissão negada",
      "Precisamos de acesso à galeria para identificar a ave."
    );
    return;
  }

  const picked = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.8,
    base64: true,
  });

  if (!picked.canceled && picked.assets[0]) {
    const asset = picked.assets[0];
    setImageUri(asset.uri);
    setImageBase64(asset.base64 ?? null);
    reset();
  }
};
