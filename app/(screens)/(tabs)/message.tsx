import { View, Text, StyleSheet } from "react-native";

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Tab message</Text>
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
