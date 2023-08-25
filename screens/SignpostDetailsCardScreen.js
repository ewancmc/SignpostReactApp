import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { imageSelect } from "../images/imageSelect";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSwipe } from "../hooks/useSwipe";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

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
      response = await AsyncStorage.getItem("favouriteID");
      if (response == null) {
        setFavouriteIcon(false);
        //setFavouriteIds(response);
        console.log("null");
      } else {
        const parsed = JSON.parse(response);
        if (parsed.includes(key)) {
          setFavouriteIcon(true);
          //setFavouriteIds(parsed);
          console.log("id exists");
          console.log(parsed);
        } else {
          setFavouriteIcon(false);
          //setFavouriteIds(parsed);
          console.log("id doesn't exist");
        }
      }
    } catch (e) {
      // read error
    }
  };
  checkFavourite(item.id);

  toggleFavourite = async (key) => {
    if (favouriteIcon === false) {
      try {
        response = await AsyncStorage.getItem("favouriteID");
        if (response === null) {
          parsed = [];
          parsed.push(key);
          await AsyncStorage.setItem("favouriteID", JSON.stringify(parsed));
          setFavouriteIcon(!favouriteIcon);
        } else {
          const parsed = JSON.parse(response);
          parsed.push(key);
          await AsyncStorage.setItem("favouriteID", JSON.stringify(parsed));
          setFavouriteIcon(!favouriteIcon);
        }
      } catch (e) {
        // remove error
      }
    } else {
      try {
        response = await AsyncStorage.getItem("favouriteID");
        const parsed = JSON.parse(response);
        parsedNew = parsed.filter(function(e) {return e !== key})
        await AsyncStorage.setItem("favouriteID", JSON.stringify(parsedNew));
        setFavouriteIcon(!favouriteIcon);
      } catch (e) {
        // remove error
      }
    }
  };

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <GestureHandlerRootView>
        <ScrollView>
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
                    toggleFavourite(item.id);
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
        </ScrollView>
      </GestureHandlerRootView>
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
    paddingBottom: 5,
  },
  titleStyle: {
    fontSize: 40,
    fontFamily: "AvenirBold",
    color: "#000",
    paddingBottom: 12,
    paddingTop: 5,
  },
  subtitleStyle: {
    fontSize: 22,
    fontFamily: "Avenir",
    color: "#000",
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
});

export default SignpostDetailsCardScreen;
