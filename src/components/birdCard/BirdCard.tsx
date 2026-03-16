import { habitatColor } from "@/helpers";
import { IBirdCard } from "@/interfaces";
import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BirdCardProps = {
  data: IBirdCard;
};

export default function BirdCard({ data }: BirdCardProps): React.JSX.Element {
  return (
    <Pressable style={birdCardStylesheets.container}>
      <Image source={{ uri: data.url }} style={birdCardStylesheets.image} />

      <View style={birdCardStylesheets.content}>
        <Text style={birdCardStylesheets.title}>{data.name}</Text>

        <Text style={birdCardStylesheets.subtitle}>{data.cientific_name}</Text>

        <View style={birdCardStylesheets.tagsContainer}>
          {data.birdsHabitats.slice(0, 2).map((item, index) => (
            <View
              key={index}
              style={[
                birdCardStylesheets.tag,
                { backgroundColor: habitatColor({ habitat: item.habitat.name }) },
              ]}
            >
              <Text style={birdCardStylesheets.tagText}>{item.habitat.name}</Text>
            </View>
          ))}

          {data.birdsHabitats.length > 2 && (
            <View style={birdCardStylesheets.moreTag}>
              <Text style={birdCardStylesheets.moreTagText}>...</Text>
            </View>
          )}
        </View>
      </View>

      <View style={birdCardStylesheets.actions}>
        <TouchableOpacity>
          <Feather name="edit-2" size={18} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="trash-2" size={18} color="#e63946" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

export const birdCardStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 110,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    overflow: "hidden",
  },
  image: {
    width: 90,
    height: "100%",
    minHeight: 110,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
  },
  moreTag: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  moreTagText: {
    fontSize: 12,
  },
  actions: {
    marginBottom: 40,
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 14,
  },
});