import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SignpostScreen from "./screens/SignpostScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          }}
        />
        <Stack.Screen
          name="Signpost"
          component={SignpostScreen}
          options={{
            tabBarLabel: "Signpost",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              iconName = focused ? "list" : "list-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          }}
        />
        <Stack.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarLabel: "Favourites",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              iconName = focused ? "bookmark" : "bookmark-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              iconName = focused ? "help-circle" : "help-circle-outline";
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
