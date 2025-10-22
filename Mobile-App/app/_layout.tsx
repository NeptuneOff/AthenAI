import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Le groupe (tabs) est géré par son propre _layout, donc pas de header ici */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Exemple de modal (si tu crées app/modal.tsx plus tard) */}
      <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
    </Stack>
  );
}
