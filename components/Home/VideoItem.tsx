import { IVideo } from "@/data.video";
import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
export default function VideoItem({ item }: { item: IVideo }) {
  const ref = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={[styles.videoContainer]}>
      <Video
        ref={ref}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  buttons: {},
});
