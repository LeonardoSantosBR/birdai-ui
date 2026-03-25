import { HabitatsOptions, UpdateBirdFormActions } from "@/components";
import { normalizePagination, pickGalleryImage } from "@/helpers";
import { useGetBirdsById } from "@/hooks/birds/useGetBirdsById";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { IBirdForm, Ihabitats } from "@/interfaces";
import { colors } from "@/themes";
import { t } from "@lingui/core/macro";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
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
            onPress={() => pickGalleryImage(setForm)}
            activeOpacity={0.85}
          >
            <Text style={updateBirdStylesheets.cameraIcon}>📷</Text>
            <Text style={updateBirdStylesheets.changeImageText}>
              {t`Alterar imagem`}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={updateBirdStylesheets.fields}>
          <View style={updateBirdStylesheets.field}>
            <Text style={updateBirdStylesheets.label}>{t`Nome`}</Text>
            <TextInput
              style={updateBirdStylesheets.input}
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
              placeholder={t`Nome da ave`}
              placeholderTextColor={colors.updateBird.textPlaceholder}
            />
          </View>
          <View style={updateBirdStylesheets.field}>
            <Text
              style={updateBirdStylesheets.label}
            >{t`Nome científico`}</Text>
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
            <Text style={updateBirdStylesheets.label}>{t`Descrição`}</Text>
            <TextInput
              style={[
                updateBirdStylesheets.input,
                updateBirdStylesheets.textArea,
              ]}
              value={form.description}
              onChangeText={(v) => setForm((p) => ({ ...p, description: v }))}
              placeholder={t`Descrição da ave...`}
              placeholderTextColor={colors.updateBird.textPlaceholder}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          <View style={updateBirdStylesheets.field}>
            <Text style={updateBirdStylesheets.label}>{t`Habitates`}</Text>
            <View style={updateBirdStylesheets.chipsRow}>
              {habitats.map((habitat) => {
                const birdHabitat = form.birdsHabitats.find(
                  (x) => x.habitat_id === habitat.id
                );
                const has = !!birdHabitat;
                return (
                  <HabitatsOptions
                    has={has}
                    key={habitat.id}
                    id={habitat.id}
                    setForm={setForm}
                    color={habitat.color}
                    name={habitat.name}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <UpdateBirdFormActions id={+id} form={form} />
      </ScrollView>
    </View>
  );
}
