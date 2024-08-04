import HeaderHomePage from "@/components/Headers/HeaderHomePage";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { IVideo, videos } from "@/data.video";
import VideoItem from "@/components/Home/VideoItem";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHomePage />
      <FlatList
        data={videos as IVideo[]}
        renderItem={({ item }) => <VideoItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
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
