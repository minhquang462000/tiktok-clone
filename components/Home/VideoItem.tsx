import { IVideo } from "@/data.video";
import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@/utils';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
interface IVideoItemProps {
  data: IVideo;
  isActive: boolean;
}
export default function VideoItem({ data, isActive }: IVideoItemProps) {
  const video = useRef<any>(null);
  const [status, setStatus] = useState(true);

  const statusBarHeight = StatusBar.currentHeight || 0;
  // const bottomTabHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.container, { height: WINDOW_HEIGHT  - statusBarHeight },]}>
      <StatusBar barStyle={'light-content'} />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: data?.uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(!status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status ? 'Pause' : 'Play'}
          onPress={() =>
            status ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttons: {},
});
