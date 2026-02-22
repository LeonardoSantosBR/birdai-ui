import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { birdCardStylesheets } from "./birdCardStylesheets";

export default function BirdCard({ item }: any): React.JSX.Element {
  function setHabitatColor(habitat: string): string {
    switch (habitat) {
      case "Urbano":
        return "#6B7280";

      case "Floresta":
        return "#16A34A";

      case "Litoral":
        return "#0EA5E9";

      case "Pântano":
        return "#065F46";

      case "Deserto":
        return "#F59E0B";

      case "Ilha":
        return "#14B8A6";

      case "Costa":
        return "#1E3A8A";
      default:
        return "#9CA3AF";
    }
  }

  return (
    <View style={birdCardStylesheets.container}>
      <Image source={{ uri: item.image }} style={birdCardStylesheets.image} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>

        <Text style={{ color: "#666", marginBottom: 6 }}>
          {item.cientific_name}
        </Text>

        <View style={{ flexDirection: "row" }}>
          {item.habitats.slice(0, 2)?.map((habitat, index) => (
            <View
              key={index}
              style={{
                backgroundColor: setHabitatColor(habitat),
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 12,
                marginRight: 6,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12 }}>{habitat}</Text>
            </View>
          ))}

          {item.habitats.length >= 2 && (
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

      <View
        style={{ justifyContent: "space-between", height: "100%", padding: 12 }}
      >
        <TouchableOpacity>
          <Feather name="edit-2" size={18} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="trash-2" size={18} color="#e63946" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
