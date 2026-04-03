import { plumaStylesheets } from "@/app/(tabs)_stylesheets";
import { birdaiArara } from "@/assets";
import { t } from "@lingui/core/macro";
import { useIsFocused } from "@react-navigation/native";
import { MotiView } from "moti";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function UploadZone({ onGallery }: { onGallery: () => void }) {
  const focused = useIsFocused();

  return (
    <MotiView from={{ opacity: 0, translateX: -40 }}
      animate={
        focused
          ? { opacity: 1, translateX: 0 }
          : { opacity: 0, translateX: -40 }
      }
      transition={{
        type: "timing",
        duration: 500,
      }}>
      <View style={plumaStylesheets.uploadZone}>
        <Image style={plumaStylesheets.image} source={birdaiArara} />
        <Text style={plumaStylesheets.uploadTitle}>{t`Envie uma foto da ave`}</Text>
        <Text style={plumaStylesheets.uploadSub}>
          {t`Quanto mais nítida a foto, mais precisa a identificação`}
        </Text>
        <TouchableOpacity
          style={plumaStylesheets.btnOutline}
          onPress={onGallery}
          activeOpacity={0.8}
        >
          <Text style={plumaStylesheets.btnOutlineText}>
            {t`🖼 Escolher da galeria`}
          </Text>
        </TouchableOpacity>
      </View>
    </MotiView>

  );
}
