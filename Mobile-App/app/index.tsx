import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  // 🧠 États
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Démo TypeScript React Native</Text>

      {/* Champ texte */}
      <TextInput
        style={styles.input}
        placeholder="Entre ton nom..."
        value={name}
        onChangeText={setName}
      />

      <Button
        title="Valider"
        onPress={() => alert(`Salut ${name || "inconnu"} !`)}
      />

      {/* Compteur */}
      <View style={styles.counter}>
        <Button title="−" onPress={() => setCount(count - 1)} />
        <Text style={styles.count}>{count}</Text>
        <Button title="+" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    width: "80%",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 20,
  },
  count: {
    fontSize: 20,
  },
});
