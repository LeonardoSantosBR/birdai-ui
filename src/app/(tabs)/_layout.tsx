
import { Header } from "@/components";
import { colors } from "@/themes";
import { Feather } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { Platform, View } from "react-native";

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 13, marginTop: 1, fontWeight: "900" },
          tabBarActiveTintColor: colors.mainPalette.orange,
          tabBarInactiveTintColor: colors.mainPalette.white,
          tabBarStyle: {
            position: "absolute",
            height: 125,
            paddingBottom: Platform.OS === "ios" ? 10 : 8,
            paddingTop: 10,
            backgroundColor: colors.mainPalette.red,
            borderTopWidth: 0,
            borderTopRightRadius: 22,
            borderTopLeftRadius: 22,
            shadowColor: colors.mainPalette.black,
            shadowOpacity: 0.18,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: 10 },
            elevation: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Catálogo",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="AddBird"
          options={{
            title: "Nova Ave",
            tabBarIcon: ({ color, size }) => (
              <Feather name="plus-circle" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Pluma"
          options={{
            title: "Pluma",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bird" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="About"
          options={{
            title: "Sobre",
            tabBarIcon: ({ color, size }) => (
              <Feather name="info" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
