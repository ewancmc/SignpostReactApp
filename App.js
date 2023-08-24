import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Screens
import FavouritesScreen from "./screens/FavouritesScreen";
import AboutScreen from "./screens/AboutScreen";
import SignpostListScreen from "./screens/SignpostListScreen";
import SignpostDetailsCardScreen from "./screens/SignpostDetailsCardScreen";
import SignpostDetailsFullScreen from "./screens/SignpostDetailsFullScreen";
import SignpostGalleryScreen from "./screens/SignpostGalleryScreen";
import CalibrationSignpostScreen from "./screens/CalibrationSignpostScreen";
import CalibrationDetailsScreen from "./screens/CalibrationDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Gallery"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Gallery"
        component={GalleryStackNavigator}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: "SignpostGallery" }),
        })}
        options={{
          tabBarLabel: "Gallery",
          //runmountOnBlur: true,
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
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: "SignpostList" }),
        })}
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
        name="Calibration"
        component={CalibrationDetailsScreen}
        options={{
          tabBarLabel: "Calibration",
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "play" : "play-outline";
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
      <Stack.Screen name="SignpostList" component={SignpostListScreen} />
      <Stack.Screen
        name="SignpostDetails"
        component={SignpostDetailsCardScreen}
      />
      <Stack.Screen
        name="SignpostDetailsFull"
        component={SignpostDetailsFullScreen}
      />
      <Stack.Screen
        name="CalibrationSignpost"
        component={CalibrationSignpostScreen}
      />
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
      <Stack.Screen
        name="SignpostDetails"
        component={SignpostDetailsCardScreen}
      />
      <Stack.Screen
        name="SignpostDetailsFull"
        component={SignpostDetailsFullScreen}
      />
      <Stack.Screen
        name="CalibrationSignpost"
        component={CalibrationSignpostScreen}
      />
    </Stack.Navigator>
  );
}

function FavouriteStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignpostFavourite"
    >
      <Stack.Screen name="SignpostGallery" component={FavouritesScreen} />
      <Stack.Screen
        name="SignpostDetails"
        component={SignpostDetailsCardScreen}
      />
      <Stack.Screen
        name="SignpostDetailsFull"
        component={SignpostDetailsFullScreen}
      />
      <Stack.Screen
        name="CalibrationSignpost"
        component={CalibrationSignpostScreen}
      />
    </Stack.Navigator>
  );
}

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Avenir: require("./assets/fonts/AvenirNextLTProRegular.otf"),
          AvenirBold: require("./assets/fonts/AvenirNextLTProBold.otf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
