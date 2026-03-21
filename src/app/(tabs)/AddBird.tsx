import AddBirdTitle from "@/components/titles/AddBird";
import { normalizePagination } from "@/helpers";
import { usePostBirds } from "@/hooks";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { IBirdForm, Ihabitats } from "@/interfaces";
import { colors } from "@/themes";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddBird(): React.JSX.Element {
  const { data: habitatsData } = useGetHabitats();
  const { rows: habitats } = normalizePagination<Ihabitats>(habitatsData);
  const { mutateAsync, isPending } = usePostBirds();
  const router = useRouter();

  const [form, setForm] = useState<IBirdForm>({
    name: "",
    url: "",
    cientific_name: "",
    description: "",
    birdsHabitats: [],
  });

  const toggleHabitat = (habitatId: number) => {
    setForm((prev) => {
      const already = prev.birdsHabitats.some(
        (x) => x.habitat_id === habitatId
      );
      return {
        ...prev,
        birdsHabitats: already
          ? prev.birdsHabitats.filter((x) => x.habitat_id !== habitatId)
          : [...prev.birdsHabitats, { habitat_id: habitatId }],
      };
    });
  };

  const handleCreate = async () => {
    try {
      await mutateAsync(form);
      router.back();
    } catch (e) {
      Alert.alert("Erro", "Não foi possível criar nova Ave.");
    }
  };

  const handleCancel = () => router.back();

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "Precisamos de acesso à galeria para adicionar a imagem."
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (!result.canceled)
      setForm((prev) => ({ ...prev, url: result.assets[0].uri }));
  };

  return (
    <View style={addBirdStylesheets.container}>
      <AddBirdTitle />

      <ScrollView
        style={addBirdStylesheets.scroll}
        contentContainerStyle={addBirdStylesheets.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={addBirdStylesheets.imageContainer}>
          {form.url ? (
            <Image
              source={{ uri: form.url }}
              style={addBirdStylesheets.birdImage}
              resizeMode="cover"
            />
          ) : (
            <View
              style={[
                addBirdStylesheets.birdImage,
                addBirdStylesheets.imagePlaceholder,
              ]}
            >
              <Text style={addBirdStylesheets.imagePlaceholderIcon}>🦜</Text>
            </View>
          )}
          <TouchableOpacity
            style={addBirdStylesheets.changeImageButton}
            onPress={handlePickImage}
            activeOpacity={0.85}
          >
            <Text style={addBirdStylesheets.cameraIcon}>📷</Text>
            <Text style={addBirdStylesheets.changeImageText}>
              Adicionar imagem
            </Text>
          </TouchableOpacity>
        </View>

        {/* Fields */}
        <View style={addBirdStylesheets.fields}>
          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>Nome</Text>
            <TextInput
              style={addBirdStylesheets.input}
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
              placeholder="Nome da ave"
              placeholderTextColor={colors.updateBird.textPlaceholder}
            />
          </View>

          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>Nome científico</Text>
            <TextInput
              style={addBirdStylesheets.input}
              value={form.cientific_name}
              onChangeText={(v) =>
                setForm((p) => ({ ...p, cientific_name: v }))
              }
              placeholder="Psittacula krameri"
              placeholderTextColor={colors.updateBird.textPlaceholder}
            />
          </View>
          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>Descrição</Text>
            <TextInput
              style={[addBirdStylesheets.input, addBirdStylesheets.textArea]}
              value={form.description}
              onChangeText={(v) => setForm((p) => ({ ...p, description: v }))}
              placeholder="Descrição da ave..."
              placeholderTextColor={colors.updateBird.textPlaceholder}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>Habitates</Text>
            <View style={addBirdStylesheets.chipsRow}>
              {habitats.map((habitat) => {
                const has = form.birdsHabitats.some(
                  (x) => x.habitat_id === habitat.id
                );
                return (
                  <TouchableOpacity
                    key={habitat.id}
                    onPress={() => toggleHabitat(habitat.id)}
                    style={[
                      addBirdStylesheets.chip,
                      has && { backgroundColor: habitat.color },
                    ]}
                    activeOpacity={0.75}
                  >
                    <Text
                      style={[
                        addBirdStylesheets.chipText,
                        has && addBirdStylesheets.chipTextSelected,
                      ]}
                    >
                      {habitat.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        <View style={addBirdStylesheets.actions}>
          <TouchableOpacity
            style={addBirdStylesheets.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.8}
          >
            <Text style={addBirdStylesheets.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              addBirdStylesheets.saveButton,
              isPending && addBirdStylesheets.saveButtonDisabled,
            ]}
            onPress={handleCreate}
            disabled={isPending}
            activeOpacity={0.85}
          >
            <Text style={addBirdStylesheets.saveText}>Criar ave</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export const addBirdStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.addBird.background,
    padding: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 140,
    gap: 20,
  },
  imageContainer: {
    alignItems: "center",
    gap: 10,
    marginHorizontal: -15,
  },
  textArea: {
    height: 96,
    paddingTop: 10,
  },
  birdImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    backgroundColor: colors.addBird.imageBackground,
  },
  imagePlaceholder: {
    backgroundColor: colors.addBird.imagePlaceholderBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderIcon: {
    fontSize: 52,
  },
  changeImageButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.addBird.border,
  },
  cameraIcon: {
    fontSize: 16,
  },
  changeImageText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.addBird.primary,
  },
  fields: {
    gap: 16,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.addBird.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.addBird.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.addBird.textPrimary,
    backgroundColor: colors.addBird.surface,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.addBird.border,
    backgroundColor: colors.addBird.chipDefault,
  },
  chipText: {
    fontSize: 13,
    color: colors.addBird.chipDefaultText,
    fontWeight: "500",
  },
  chipTextSelected: {
    color: colors.addBird.chipSelectedText,
    fontWeight: "700",
  },

  // Actions
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.addBird.cancelBorder,
    alignItems: "center",
    backgroundColor: colors.addBird.cancel,
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.addBird.cancelText,
  },
  saveButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: colors.addBird.primary,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.addBird.saveTextColor,
  },
});
