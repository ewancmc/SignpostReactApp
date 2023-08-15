import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import AboutScreen from "./screens/AboutScreen";
import SignpostList from "./components/SignpostList";
import SignpostDetailsCardScreen from "./screens/SignpostDetailsCardScreen";
import SignpostDetailsFullScreen from "./screens/SignpostDetailsFullScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
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
      <Tab.Screen
        name="Signpost"
        component={StackNavigator}
        options={{
          tabBarLabel: "Signpost",
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "list" : "list-outline";
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
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
      <Tab.Screen
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
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignpostList"
    >
      <Stack.Screen name="SignpostList" component={SignpostList} />
      <Stack.Screen name="SignpostDetails" component={SignpostDetailsCardScreen} />
      <Stack.Screen name="SignpostDetailsFull" component={SignpostDetailsFullScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
