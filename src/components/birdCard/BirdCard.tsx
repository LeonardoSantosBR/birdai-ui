import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { birdCardStylesheets } from "./birdCardStylesheets";

export default function BirdCard({ id }: { id: number }): React.JSX.Element {

    const categories = [
        "Urbano",
        "Floresta",
        "Litoral",
        "Pântano",
        "Deserto",
        "Ilha",
        "Costa"
    ];

    return (
        <View style={birdCardStylesheets.container}>
            <Image source={{ uri: "" }} style={birdCardStylesheets.image} />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>nome</Text>

                <Text style={{ color: "#666", marginBottom: 6 }}>
                    nome cientifico
                </Text>

                <View style={{ flexDirection: "row" }}>
                    {categories.map((habitat, index) => (
                        <View
                            key={index}
                            style={{
                                backgroundColor: "#ff4d4d",
                                paddingHorizontal: 10,
                                paddingVertical: 4,
                                borderRadius: 12,
                                marginRight: 6,
                            }}
                        >
                            <Text style={{ color: "#fff", fontSize: 12 }}>
                                {habitat}
                            </Text>
                        </View>
                    ))}

                    {true && (
                        <View
                            style={{
                                backgroundColor: "#eee",
                                paddingHorizontal: 10,
                                paddingVertical: 4,
                                borderRadius: 12,
                            }}
                        >
                            <Text style={{ fontSize: 12 }}>...</Text>
                        </View>
                    )}
                </View>
            </View>

            <View style={{ justifyContent: "space-between", height: "100%" }}>
                <TouchableOpacity>
                    <Feather name="edit-2" size={18} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="trash-2" size={18} color="#e63946" />
                </TouchableOpacity>
            </View>
        </View>
    )
}