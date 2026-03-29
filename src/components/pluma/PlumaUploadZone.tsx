import { plumaStylesheets } from "@/app/(tabs)_stylesheets";
import { Text, TouchableOpacity, View } from "react-native";

export function UploadZone({ onGallery }: { onGallery: () => void }) {
    return (
        <View style={plumaStylesheets.uploadZone}>
            <Text style={plumaStylesheets.uploadEmoji}>🦩</Text>
            <Text style={plumaStylesheets.uploadTitle}>Envie uma foto da ave</Text>
            <Text style={plumaStylesheets.uploadSub}>
                Quanto mais nítida a foto, mais precisa a identificação
            </Text>
            <TouchableOpacity style={plumaStylesheets.btnOutline} onPress={onGallery} activeOpacity={0.8}>
                <Text style={plumaStylesheets.btnOutlineText}>🖼  Escolher da galeria</Text>
            </TouchableOpacity>
        </View>
    );
}