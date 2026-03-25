import { updateBirdStylesheets } from "@/app/birds/[id]/updateBirdStylesheets";
import { usePatchBirdsById } from "@/hooks";
import { IBirdForm } from "@/interfaces";
import { t } from "@lingui/core/macro";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export function UpdateBirdFormActions({
  id,
  form,
}: {
  id: number;
  form: IBirdForm;
}): React.JSX.Element {
  const { mutateAsync, isPending } = usePatchBirdsById(+id);
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      await mutateAsync(form);
      router.back();
    } catch (e) {
      Alert.alert(t`Erro, Não foi possível salvar as alterações.`);
    }
  };

  const handleCancel = () => router.back();

  return (
    <View style={updateBirdStylesheets.actions}>
      <TouchableOpacity
        style={updateBirdStylesheets.cancelButton}
        onPress={handleCancel}
        activeOpacity={0.8}
      >
        <Text style={updateBirdStylesheets.cancelText}>{t`Cancelar`}</Text>
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
        <Text
          style={updateBirdStylesheets.saveText}
        >{t`Salvar alterações`}</Text>
      </TouchableOpacity>
    </View>
  );
}
