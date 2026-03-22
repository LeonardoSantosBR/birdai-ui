import { useDeleteBirdsById } from "@/hooks";
import { IBirdCard } from "@/interfaces";
import { colors } from "@/themes";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type BirdCardProps = {
  data: IBirdCard;
};

export default function BirdCard({ data }: BirdCardProps): React.JSX.Element {
  const { mutateAsync } = useDeleteBirdsById(data.id);

  const handleUpdate = () => {
    const pathName = "/birds/[id]/UpdateBird";
    router.push({
      pathname: pathName,
      params: { id: String(data.id) },
    });
  };

  const handleDelete = () => {
    Alert.alert(
      "Excluir ave",
      `Tem certeza que deseja excluir "${data.name}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            mutateAsync(data.id);
          },
        },
      ]
    );
  };

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
                { backgroundColor: item.habitat.color },
              ]}
            >
              <Text style={birdCardStylesheets.tagText}>
                {item.habitat.name}
              </Text>
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
        <TouchableOpacity onPress={() => handleUpdate()}>
          <Feather name="edit-2" size={18} color={colors.birdCard.actionEdit} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDelete()}>
          <Feather
            name="trash-2"
            size={18}
            color={colors.birdCard.actionDelete}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

export const birdCardStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 110,
    backgroundColor: colors.birdCard.background,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    overflow: "hidden",
  },
  image: {
    width: 140,
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
    color: colors.birdCard.subtitle,
    marginBottom: 6,
    fontFamily: "monospace",
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
    color: colors.birdCard.tagText,
    fontSize: 12,
  },
  moreTag: {
    backgroundColor: colors.birdCard.moreTagBackground,
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
