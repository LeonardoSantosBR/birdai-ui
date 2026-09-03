import { plumaStylesheets } from "@/app/styles/tabs";
import { t } from "@lingui/core/macro";
import { Text, View } from "react-native";

export function PlumaIdentifying({
  isPending,
  error,
}: {
  isPending: boolean;
  error: Error | null;
}) {
  return (
    <>
      {isPending && (
        <Text style={plumaStylesheets.loadingHint}>
          {t`Analisando plumagem, bico e habitat…`}
        </Text>
      )}

      {error && (
        <View style={plumaStylesheets.errorCard}>
          <Text style={plumaStylesheets.errorText}>
            ⚠ {(error as Error).message}
          </Text>
        </View>
      )}
    </>
  );
}
