// import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  console.log("Current color scheme:", colorScheme);
  const themeColors = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: themeColors.navbackground,
            paddingTop: 10,
          },
          tabBarActiveTintColor: themeColors.iconcolorfocused,
          tabBarInactiveTintColor: themeColors.iconcolor,
        }}
      >
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "create" : "create-outline"}
                size={24}
                color={themeColors.iconcolor}
              />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={themeColors.iconcolor}
              />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={24}
                color={themeColors.iconcolor}
              />
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    </UserOnly>
  );
};

export default DashboardLayout;
