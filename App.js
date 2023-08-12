import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import HomeScreen from "./components/HomeScreen";
import SignpostScreen from "./components/SignpostScreen";
import FavouritesScreen from "./components/FavouritesScreen";
import AboutScreen from "./components/AboutScreen";

//Screen names
const homeName = "Home";
const signpostName = "Signpost";
const favouritesName = "Favourites";
const aboutName = "About";

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => (
          {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === signpostName) {
                iconName = focused ? "list" : "list-outline";
              } else if (rn === favouritesName) {
                iconName = focused ? "bookmark" : "bookmark-outline";
              } else if (rn === aboutName) {
                iconName = focused ? "help-circle" : "help-circle-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          },
          {
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
              paddingBottom: 10,
              fontSize: 10,
            },
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
          }
        )}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signpost" component={SignpostScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
