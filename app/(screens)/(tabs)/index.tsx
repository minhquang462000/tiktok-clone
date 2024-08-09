import HeaderHomePage from "@/components/Headers/HeaderHomePage";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { IVideo, videos } from "@/data.video";
import VideoItem from "@/components/Home/VideoItem";
import { useState } from "react";
import { WINDOW_HEIGHT } from "@/utils";
export default function HomeScreen() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHomePage />
      <FlatList
        data={videos}
        renderItem={({ item, index }) => <VideoItem data={item} isActive={activeVideoIndex === index} />}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        onScroll={e => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT ),
          );
          setActiveVideoIndex(index);
        }}
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
