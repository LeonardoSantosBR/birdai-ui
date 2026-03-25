import { addBirdStylesheets } from "@/app/(tabs)_stylesheets";
import { usePostBirds } from "@/hooks";
import { IBirdForm } from "@/interfaces";
import { t } from "@lingui/core/macro";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export function AddBirdFormActions({
  form,
  setForm,
}: {
  form: IBirdForm;
  setForm: React.Dispatch<React.SetStateAction<IBirdForm>>;
}) {
  const { mutateAsync, isPending } = usePostBirds();
  const router = useRouter();

  const handleCreate = async () => {
    try {
      await mutateAsync(form);
      setForm({
        name: "",
        url: "",
        cientific_name: "",
        description: "",
        birdsHabitats: [],
      });
      router.back();
    } catch (e) {
      console.log(e);
      Alert.alert(t`Erro, Não foi possível criar nova Ave.`);
    }
  };

  const handleCancel = () => {
    setForm({
      name: "",
      url: "",
      cientific_name: "",
      description: "",
      birdsHabitats: [],
    });
    router.back();
  };

  return (
    <View style={addBirdStylesheets.actions}>
      <TouchableOpacity
        style={addBirdStylesheets.cancelButton}
        onPress={handleCancel}
        activeOpacity={0.8}
      >
        <Text style={addBirdStylesheets.cancelText}>{t`Cancelar`}</Text>
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
        <Text style={addBirdStylesheets.saveText}>{t`Criar ave`}</Text>
      </TouchableOpacity>
    </View>
  );
}
