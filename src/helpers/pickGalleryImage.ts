import { IBirdForm } from "@/interfaces";
import { t } from "@lingui/core/macro";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const pickGalleryImage = async (
  setForm: React.Dispatch<React.SetStateAction<IBirdForm>>
) => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== "granted") {
    Alert.alert(
      t`Permissão negada`,
      t`Precisamos de acesso à galeria para adicionar a imagem.`
    );
    return;
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.8,
  });

  if (!result.canceled)
    setForm((prev) => ({ ...prev, url: result.assets[0].uri }));
};
