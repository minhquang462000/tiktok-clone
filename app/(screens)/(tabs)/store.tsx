import { View, Text, StyleSheet } from "react-native";

export default function StoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Tab Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
});
