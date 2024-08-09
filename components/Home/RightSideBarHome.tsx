import { Tabs } from "expo-router";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export interface IRightSideBarProps {}

export default function RightSideBarHome(props: IRightSideBarProps) {
  return <Tabs screenOptions={{ tabBarLabelPosition: "beside-icon" }}>
    
  </Tabs>;
}
