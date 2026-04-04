
import { birdaiBeijaFlor } from "@/assets";
import { CreateBirdForm, HabitatsOptions } from "@/components";
import { AddBirdTitle } from "@/components/titles";
import { normalizePagination, pickGalleryImage } from "@/helpers";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { IBirdForm, Ihabitats } from "@/interfaces";
import { colors } from "@/themes";
import { t } from "@lingui/core/macro";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { addBirdStylesheets } from "../(tabs)_stylesheets";

export default function AddBird(): React.JSX.Element {
  const { data: habitatsData } = useGetHabitats();
  const { rows: habitats } = normalizePagination<Ihabitats>(habitatsData);

  const [form, setForm] = useState<IBirdForm>({
    name: "",
    url: "",
    cientific_name: "",
    description: "",
    birdsHabitats: [],
  });

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
              <Image style={addBirdStylesheets.image} source={birdaiBeijaFlor} />
            </View>
          )}
          <TouchableOpacity
            style={addBirdStylesheets.changeImageButton}
            onPress={() => pickGalleryImage(setForm)}
            activeOpacity={0.85}
          >
            <Text style={addBirdStylesheets.cameraIcon}>📷</Text>
            <Text style={addBirdStylesheets.changeImageText}>
              {t`Adicionar imagem`}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={addBirdStylesheets.fields}>
          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>{t`Nome`}</Text>
            <TextInput
              style={addBirdStylesheets.input}
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
              placeholder={t`Nome da ave`}
              placeholderTextColor={colors.screens.birdForm.textPlaceholder}
            />
          </View>

          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>{t`Nome científico`}</Text>
            <TextInput
              style={addBirdStylesheets.input}
              value={form.cientific_name}
              onChangeText={(v) =>
                setForm((p) => ({ ...p, cientific_name: v }))
              }
              placeholder="Psittacula krameri"
              placeholderTextColor={colors.screens.birdForm.textPlaceholder}
            />
          </View>
          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>{t`Descrição`}</Text>
            <TextInput
              style={[addBirdStylesheets.input, addBirdStylesheets.textArea]}
              value={form.description}
              onChangeText={(v) => setForm((p) => ({ ...p, description: v }))}
              placeholder={t`Descrição da ave...`}
              placeholderTextColor={colors.screens.birdForm.textPlaceholder}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <View style={addBirdStylesheets.field}>
            <Text style={addBirdStylesheets.label}>{t`Habitates`}</Text>
            <View style={addBirdStylesheets.chipsRow}>
              {habitats.map((habitat) => {
                const has = form.birdsHabitats.some(
                  (x) => x.habitat_id === habitat.id
                );
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

        <CreateBirdForm form={form} setForm={setForm}/>
      </ScrollView>
    </View>
  );
}
