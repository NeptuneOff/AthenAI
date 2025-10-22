import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Cet écran correspond à app/(tabs)/index.tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Feed",
          // tabBarIcon facultatif; garde simple tant que tu n'utilises pas d'icônes
        }}
      />

      {/* Si tu ajoutes app/(tabs)/profile.tsx, tu peux le déclarer ici : */}
      {/* <Tabs.Screen name="profile" options={{ title: "Profil" }} /> */}
    </Tabs>
  );
}
