import { Stack } from "expo-router";

export default function BirdsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]/UpdateBird"
        options={{
          title: "Editar Ave",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
}
