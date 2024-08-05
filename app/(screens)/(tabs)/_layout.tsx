import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Link, Tabs } from "expo-router";
import { Image, Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 8,
          marginBottom: 4,
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: "#121212", borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Cửa hàng",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "bag" : "bag-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addNewVideo"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/public/images/tik-tok-plus.png")}
              style={{ objectFit: "cover", width: 35, height: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Hộp thư",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbox" : "chatbox-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Hố sơ",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
