import { habitatColor } from "@/helpers";
import { IBirdCard } from "@/interfaces";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { birdCardStylesheets } from "./birdCardStylesheets";

type BirdCardProps = {
  data: IBirdCard;
};

export default function BirdCard({ data }: BirdCardProps): React.JSX.Element {
  return (
    <View style={birdCardStylesheets.container}>
      <Image source={{ uri: data.url }} style={birdCardStylesheets.image} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{data.name}</Text>

        <Text style={{ color: "#666", marginBottom: 6 }}>
          {data.cientific_name}
        </Text>

        <View style={{ flexDirection: "row" }}>
          {data.birdsHabitats.slice(0, 2)?.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: habitatColor({ habitat: item.habitat.name }),
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 12,
                marginRight: 6,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12 }}>
                {item.habitat.name}
              </Text>
            </View>
          ))}

          {data.birdsHabitats.length >= 2 && (
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
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "17%",
          padding: 12,
          marginBottom: 50,
        }}
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
