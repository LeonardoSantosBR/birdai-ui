import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { searchInputStylesheets } from "./searchInputStylesheets";

export default function SearchInput() {
    return <View>
        <Feather name="search" size={18} color="#999" />

        <TextInput
            placeholder="Buscar aves..."
            placeholderTextColor="#999"
            style={searchInputStylesheets.input}
        />
    </View>
}