import { Ionicons } from "@expo/vector-icons";
import {
  Link,
  Tabs,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export interface IHeaderHomePageProps { }

export default function HeaderHomePage(props: IHeaderHomePageProps) {
  const [renderPage, setRenderPage] = useState(0);
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();

  return (
    <View style={styles.header}>
      <Ionicons name="reorder-three-outline" size={25} color="white" />
      <Link href={""}>
        <Pressable onPress={() => setRenderPage(0)}>
          <Text

            style={[styles.title, renderPage === 0 && { fontWeight: "900" }]}
          >
            Bạn bè
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: renderPage === 0 ? "white" : "transparent",
              width: 20,
              margin: "auto",
              marginTop: 4,
            }}
          />
        </Pressable>
      </Link>
      <Link href="">
        <Pressable onPress={() => setRenderPage(1)}>
          <Text

            style={[styles.title, renderPage === 1 && { fontWeight: "900" }]}
          >
            Đang Follow
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: renderPage === 1 ? "white" : "transparent",
              width: 20,
              margin: "auto",
              marginTop: 4,
            }}
          />
        </Pressable>
      </Link>
      <Link href="">
        <Pressable onPress={() => setRenderPage(2)}>
          <Text
            style={[styles.title, renderPage === 2 && { fontWeight: "900" }]}
          >
            Dành cho bạn
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: renderPage === 2 ? "white" : "transparent",
              width: 20,
              margin: "auto",
              marginTop: 4,
            }}
          />
        </Pressable>
      </Link>
      <Ionicons name="search-outline" size={17} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 25,
    position: "absolute",
    top: 0,
    zIndex: 1,
  },

  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});
