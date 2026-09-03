import { plumaStylesheets } from "@/app/styles/tabs";
import { t } from "@lingui/core/macro";
import { ActivityIndicator, Text } from "react-native";

export function PlumaIdentificator({ isPending }: { isPending: boolean }) {
  return (
    <>
      {isPending ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={plumaStylesheets.btnAnalyzeText}>{t`🔍 Identificar ave`}</Text>
      )}
    </>
  );
}
