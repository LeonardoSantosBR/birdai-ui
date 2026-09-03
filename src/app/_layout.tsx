import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import { messages as enMessages } from "../locales/en/messages";
import { messages as ptMessages } from "../locales/pt/messages";

const queryClient = new QueryClient();

function setupI18n() {
  i18n.load({
    en: enMessages,
    pt: ptMessages,
  });
  i18n.activate("pt");
}

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setupI18n();
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <I18nProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="birds" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </I18nProvider>
  );
}