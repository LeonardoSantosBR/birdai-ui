import { normalizePagination } from "@/helpers";
import { useGetBirdsById } from "@/hooks/birds/useGetBirdsById";
import { usePatchBirdsById } from "@/hooks/birds/usePatchBirds";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { IBirdForm, Ihabitats } from "@/interfaces";
import { colors } from "@/themes";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { updateBirdStylesheets } from "./updateBirdStylesheets";

export default function UpdateBird(): React.JSX.Element {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data } = useGetBirdsById(+id);
  const { data: habitatsData } = useGetHabitats();
  const { rows: habitats } = normalizePagination<Ihabitats>(habitatsData);
  const { mutateAsync, isPending } = usePatchBirdsById(+id);
  const router = useRouter();

  const [form, setForm] = useState<IBirdForm>({
    name: "",
    url: "",
    cientific_name: "",
    description: "",
    birdsHabitats: [],
  });

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

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

  const handleUpdate = async () => {
    try {
      await mutateAsync(form);
      router.back();
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  };

  const handleCancel = () => router.back();

  //open gallery
  const handleChangeImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "Precisamos de acesso à galeria para alterar a imagem."
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
    <View style={updateBirdStylesheets.container}>
      <ScrollView
        style={updateBirdStylesheets.scroll}
        contentContainerStyle={updateBirdStylesheets.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={updateBirdStylesheets.imageContainer}>
          {form.url ? (
            <Image
              source={{ uri: form.url }}
              style={updateBirdStylesheets.birdImage}
              resizeMode="cover"
            />
          ) : (
            <View
              style={[
                updateBirdStylesheets.birdImage,
                updateBirdStylesheets.imagePlaceholder,
              ]}
            >
              <Text style={updateBirdStylesheets.imagePlaceholderIcon}>🦜</Text>
            </View>
          )}
          <TouchableOpacity
            style={updateBirdStylesheets.changeImageButton}
            onPress={handleChangeImage}
            activeOpacity={0.85}
          >
            <Text style={updateBirdStylesheets.cameraIcon}>📷</Text>
            <Text style={updateBirdStylesheets.changeImageText}>
              Alterar imagem
            </Text>
          </TouchableOpacity>
        </View>

        <View style={updateBirdStylesheets.fields}>
          <View style={updateBirdStylesheets.field}>
            <Text style={updateBirdStylesheets.label}>Nome</Text>
            <TextInput
              style={updateBirdStylesheets.input}
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
              placeholder="Nome da ave"
              placeholderTextColor={colors.updateBird.textPlaceholder}
            />
          </View>
          <View style={updateBirdStylesheets.field}>
            <Text style={updateBirdStylesheets.label}>Nome científico</Text>
            <TextInput
              style={updateBirdStylesheets.input}
              value={form.cientific_name}
              onChangeText={(v) =>
                setForm((p) => ({ ...p, cientific_name: v }))
              }
              placeholder="Psittacula krameri"
              placeholderTextColor={colors.updateBird.textPlaceholder}
            />
          </View>
          <View style={updateBirdStylesheets.field}>
            <Text style={updateBirdStylesheets.label}>Descrição</Text>
            <TextInput
              style={[
                updateBirdStylesheets.input,
                updateBirdStylesheets.textArea,
              ]}
              value={form.description}
              onChangeText={(v) => setForm((p) => ({ ...p, description: v }))}
              placeholder="Descrição da ave..."
              placeholderTextColor={colors.updateBird.textPlaceholder}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          <View style={updateBirdStylesheets.field}>
            <Text style={updateBirdStylesheets.label}>Habitates</Text>
            <View style={updateBirdStylesheets.chipsRow}>
              {habitats.map((habitat) => {
                const birdHabitat = form.birdsHabitats.find(
                  (x) => x.habitat_id === habitat.id
                );
                const has = !!birdHabitat;
                return (
                  <TouchableOpacity
                    key={habitat.id}
                    onPress={() => toggleHabitat(habitat.id)}
                    style={[
                      updateBirdStylesheets.chip,
                      has && { backgroundColor: habitat.color },
                    ]}
                    activeOpacity={0.75}
                  >
                    <Text
                      style={[
                        updateBirdStylesheets.chipText,
                        has && updateBirdStylesheets.chipTextSelected,
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
        <View style={updateBirdStylesheets.actions}>
          <TouchableOpacity
            style={updateBirdStylesheets.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.8}
          >
            <Text style={updateBirdStylesheets.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              updateBirdStylesheets.saveButton,
              isPending && updateBirdStylesheets.saveButtonDisabled,
            ]}
            onPress={handleUpdate}
            disabled={isPending}
            activeOpacity={0.85}
          >
            <Text style={updateBirdStylesheets.saveText}>
              Salvar alterações
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
