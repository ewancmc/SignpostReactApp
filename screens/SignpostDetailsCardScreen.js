import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { imageSelect } from "../images/imageSelect";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSwipe } from "../hooks/useSwipe";

const SignpostDetailsCardScreen = ({ route, navigation }) => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const insets = useSafeAreaInsets();
  const { item } = route.params;
  const [favouriteIcon, setFavouriteIcon] = React.useState(false);

  function onSwipeLeft() {
    navigateFullDetails();
  }

  function onSwipeRight() {
    navigateGoBack();
  }
  function navigateFullDetails() {
    navigation.navigate("SignpostDetailsFull", {
      item: item,
    });
  }

  function navigateGoBack() {
    navigation.goBack();
  }

  // initialise favourite state
  checkFavourite = async (key) => {
    try {
      const status = await AsyncStorage.getItem(key);
      if (status == null) {
        setFavouriteIcon(false);
      } else {
        setFavouriteIcon(true);
      }
    } catch (e) {
      // read error
    }
  };
  checkFavourite(item.id);

  toggleFavourite = async (key, value) => {
    if (favouriteIcon) {
      try {
        await AsyncStorage.removeItem(key);
      } catch (e) {
        // remove error
      }
    } else {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
        // save error
      }
    }
  };

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Image
          source={imageSelect(item.id)}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <View style={styles.titleRow}>
            <Text style={styles.titleStyle}>Signpost {item.id}</Text>
            <Pressable
              onPress={() => {
                toggleFavourite(item.id, item);
                setFavouriteIcon(!favouriteIcon);
              }}
            >
              <Ionicons
                name={favouriteIcon ? "bookmark" : "bookmark-outline"}
                style={styles.icon}
              />
            </Pressable>
          </View>
          <Text style={styles.subtitleStyle}>{item.title}</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  titleStyle: {
    fontSize: 40,
    color: "#000",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontSize: 20,
    color: "#000",
    opacity: 0.5,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    paddingTop: 5,
  },
});

export default SignpostDetailsCardScreen;
