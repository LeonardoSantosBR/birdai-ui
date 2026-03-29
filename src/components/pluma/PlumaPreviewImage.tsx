import { plumaStylesheets } from "@/app/(tabs)_stylesheets";
import { Image, Text, TouchableOpacity, View } from "react-native";


export function PreviewImage({ uri, onReset }: { uri: string; onReset: () => void }) {
    return (
        <View style={plumaStylesheets.previewWrap}>
            <Image source={{ uri }} style={plumaStylesheets.previewImage} resizeMode="cover" />
            <TouchableOpacity style={plumaStylesheets.changeBtn} onPress={onReset} activeOpacity={0.8}>
                <Text style={plumaStylesheets.changeBtnText}>Trocar foto</Text>
            </TouchableOpacity>
        </View>
    );
}
