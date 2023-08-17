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
import SignpostGalleryScreen from "./screens/SignpostGalleryScreen"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Gallery">
      <Tab.Screen
        name="Gallery"
        component={GalleryStackNavigator}
        options={{
          tabBarLabel: "Gallery",
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "images" : "images-outline";
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStackNavigator}
        options={{
          tabBarLabel: "List",
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
        component={FavouriteStackNavigator}
        options={{
          tabBarLabel: "Favourites",
          unmountOnBlur: true,
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

function ListStackNavigator() {
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

function GalleryStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignpostGallery"
    >
      <Stack.Screen name="SignpostGallery" component={SignpostGalleryScreen} />
      <Stack.Screen name="SignpostDetails" component={SignpostDetailsCardScreen} />
      <Stack.Screen name="SignpostDetailsFull" component={SignpostDetailsFullScreen} />
    </Stack.Navigator>
  );
}

function FavouriteStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignpostFavourite"
    >
      <Stack.Screen name="SignpostGallery" component={FavouritesScreen} />
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
