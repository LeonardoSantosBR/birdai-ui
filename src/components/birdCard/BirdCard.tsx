import { habitatColor } from "@/helpers";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { birdCardStylesheets } from "./birdCardStylesheets";

export default function BirdCard({ item }: any): React.JSX.Element {

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
                backgroundColor: habitatColor({habitat}),
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
